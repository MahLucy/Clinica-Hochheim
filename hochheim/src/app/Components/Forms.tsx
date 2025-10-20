'use client';

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  FormControl,
  Input,
  Textarea,
  VStack,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

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
  // estilo base dos campos para ficar fiel ao mock
  const fieldProps = {
    bg: 'brand.800',
    borderWidth: '1px',
    color: 'white',
    _placeholder: { color: 'rgba(255, 255, 255, 0.36)' },
    rounded: 'xl',
    h: '56px',
  } as const;

  return (
    <Box as="section" bg="brand.1000" color="white" py={{ base: 12, md: 20 }}>
      <Container maxW={{ base: '92%', md: '70%', lg: '65%' }}>
        <VStack align="stretch" spacing={6}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} mb={2}>
            Fale Conosco
          </Heading>

          {/* Linha 1 */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl>
              <Input placeholder="Nome" {...fieldProps} fontSize={{base: "md", md:'2xl'}}/>
            </FormControl>
            <FormControl>
              <Input type="email" placeholder="E-mail" {...fieldProps} fontSize={{base: "md", md:'2xl'}} />
            </FormControl>
          </SimpleGrid>

          {/* Linha 2 */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <FormControl >
              <Input placeholder="Telefone" {...fieldProps}
              resize="none"
              rounded="xl"
              bg="brand.800"
              borderWidth="1px"
              borderColor="brand.200"
              color="white"
              p={4}
              fontWeight={'100'}
              fontSize={{base: "md", md:'2xl'}}
              />
            </FormControl>
            <FormControl>
              <Input placeholder="Cidade" {...fieldProps} fontSize={{base: "md", md:'2xl'}} />
            </FormControl>
            <FormControl>
              <Input placeholder="Estado" {...fieldProps} fontSize={{base: "md", md:'2xl'}} />
            </FormControl>
          </SimpleGrid>

          {/* Mensagem */}
          <FormControl>
            <Textarea
              placeholder="Assunto/Mensagem"
              minH={{ base: '160px', md: '200px' }}
              resize="none"
              rounded="xl"
              bg="brand.800"
              borderWidth="1px"
              p={4}
              fontWeight={'100'}
              fontSize={{base: "md", md:'2xl'}}
            />
          </FormControl>

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
        h="10rem"
        rounded="full"
        display="grid"
        placeItems="center"
      >
        <Image src={icon} alt="" draggable={false} />
      </Box>
      <Text fontWeight={800} fontSize={{base: "md", md:'2xl'}} lineHeight="shorter">
        {title}
      </Text>
      <VStack  opacity={0.9} >
        {lines.map((l, i) => (
          <Text key={i} fontSize={{base: "md", md:'1.4rem'}} lineHeight="shorter" fontWeight={"100"}>
            {l}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
