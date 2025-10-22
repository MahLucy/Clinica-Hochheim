'use client';

import {
  Box, Container, Heading, SimpleGrid, FormControl, Input, Textarea,
  VStack, HStack, Image, Text, Button, useToast
} from '@chakra-ui/react';
import { useState } from 'react';

type ContatoSectionProps = {
  iconLocal?: string;
  iconEmail?: string;
  iconPhone?: string;
};

export default function ContatoSection({
  iconLocal = '/icons/local.png',
  iconEmail = '/icons/email.png',
  iconPhone = '/icons/phone.png',
}: ContatoSectionProps) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const fieldProps = {
    bg: 'brand.800',
    borderWidth: '1px',
    color: 'white',
    _placeholder: { color: 'rgba(255, 255, 255, 0.36)' },
    rounded: 'xl',
    h: '56px',
  } as const;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      setLoading(true);
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: data,
      });

      const json: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error || 'Erro ao enviar');

      toast({
        title: 'Enviado!',
        description: 'Mensagem enviada com sucesso.',
        status: 'success',
      });
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Tente novamente.';
      toast({
        title: 'Falha no envio',
        description: message,
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box as="section" bg="brand.1000" color="white" py={{ base: 12, md: 20 }}>
      <Container maxW={{ base: '92%', md: '70%', lg: '65%' }}>
        <form onSubmit={handleSubmit}>
          {/* honeypot anti-bot (NÃO MOSTRAR) */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <VStack align="stretch" spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={2}>
              Fale Conosco
            </Heading>

            {/* Linha 1 */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <Input
                  name="nome"
                  placeholder="Nome"
                  {...fieldProps}
                  fontSize={{ base: 'md', md: '2xl' }}
                  required
                />
              </FormControl>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  {...fieldProps}
                  fontSize={{ base: 'md', md: '2xl' }}
                  required
                />
              </FormControl>
            </SimpleGrid>

            {/* Linha 2 */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              <FormControl>
                <Input
                  name="telefone"
                  placeholder="Telefone"
                  {...fieldProps}
                  rounded="xl"
                  bg="brand.800"
                  borderWidth="1px"
                  borderColor="brand.200"
                  p={4}
                  fontWeight="100"
                  fontSize={{ base: 'md', md: '2xl' }}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="cidade"
                  placeholder="Cidade"
                  {...fieldProps}
                  fontSize={{ base: 'md', md: '2xl' }}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="estado"
                  placeholder="Estado"
                  {...fieldProps}
                  fontSize={{ base: 'md', md: '2xl' }}
                />
              </FormControl>
            </SimpleGrid>

            {/* Mensagem */}
            <FormControl>
              <Textarea
                name="mensagem"
                placeholder="Assunto/Mensagem"
                minH={{ base: '160px', md: '200px' }}
                resize="none"
                rounded="xl"
                bg="brand.800"
                borderWidth="1px"
                p={4}
                fontWeight="100"
                fontSize={{ base: 'md', md: '2xl' }}
                required
              />
            </FormControl>

            <Button
              type="submit"
              isLoading={loading}
              loadingText="Enviando..."
              size="lg"
              rounded="full"
              px={8}
              fontWeight={500}
              color="#fff"
              bg="#1B7C9F"
              _hover={{ filter: 'brightness(1.05)' }}
              boxShadow="md"
              height="3rem"
              fontSize={{ base: 'sm', md: '1.2rem' }}
              w={{ base: '100%', md: 'fit-content' }}
            >
              Enviar Mensagem
            </Button>

            {/* Blocos de informação */}
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 8, md: 10 }}
              pt={{ base: 8, md: 10 }}
            >
              <InfoItem
                icon={iconLocal}
                title="Local"
                lines={[
                  'Av. Martin Luther, 1446,',
                  'Itoupava Seca, Blumenau/SC ,',
                  'CEP: 89030-016',
                ]}
              />
              <InfoItem
                icon={iconEmail}
                title="Email"
                lines={['contato@clinicahochheim.com.br']}
              />
              <InfoItem
                icon={iconPhone}
                title="Contato"
                lines={['(47) 3222-0010', '(47) 99983-3291']}
              />
            </SimpleGrid>
          </VStack>
        </form>
      </Container>
    </Box>
  );
}

function InfoItem({
  icon,
  title,
  lines,
}: {
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <VStack spacing={2} textAlign="center">
      <Box
        w={{ base: '3rem', md: '11rem' }}
        h={{ base: '3rem', md: '10rem' }}
        rounded="full"
        display="grid"
        placeItems="center"
        id="contato"
      >
        <Image src={icon} alt="" draggable={false} />
      </Box>
      <Text fontWeight={800} fontSize={{ base: 'md', md: '2xl' }} lineHeight="shorter">
        {title}
      </Text>
      <VStack opacity={0.9}>
        {lines.map((l, i) => (
          <Text key={i} fontSize={{ base: 'md', md: '1.4rem' }} lineHeight="shorter" fontWeight="100">
            {l}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
