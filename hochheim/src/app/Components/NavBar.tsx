'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Button,
  Link as CLink,
  Image,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  active?: 'sobre' | 'servicos' | 'estrutura' | 'kids' | 'contato';
};

const links = [
  { id: 'sobre', label: 'Sobre', href: '/' },
  { id: 'servicos', label: 'Serviços', href: '/Servicos' },
  { id: 'estrutura', label: 'Estrutura', href: '/estrutura' },
  { id: 'kids', label: 'Hochheim Kids', href: '/kids' },
];

export default function NavBar({ active }: NavBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

    // define o ativo: prioridade ao prop; senão, pelo path atual
  const isActive = (id: string, href: string) => {
    if (active) return active === (id as typeof active);
    return pathname === href;
  };

  return (
    <Box
      as="header"
      bg="brand.20"
      borderBottomWidth="1px"
      borderColor="blackAlpha.100"
      position="sticky"
      top={0}
      zIndex={20}
    >
      <Container maxW="6xl" py={{ base: 3, md: 10 }}>
        <Flex align="center" gap={6}>
          {/* LOGO */}
          <CLink as={NextLink} href="/" _hover={{ opacity: 0.9 }}>
            <Image
              src="/logo.png"
              alt="Hochheim"
              h={{ base: '5rem', md: '7rem' }}
              w="auto"
              draggable={false}
            />
          </CLink>

          {/* LINKS - desktop */}
          <HStack
            as="nav"
            spacing={{ base: 6, md: 12 }}
            mx="auto"
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map((l) => (
              <CLink
                as={NextLink}
                key={l.id}
                href={l.href}
                fontWeight={active === (l.id as typeof active) ? 800 : 200}
                fontSize={{ base: 'lg', md: 'xl' }}
                color={active === (l.id as typeof active) ? 'brand.800' : '#004567'}
                _hover={{ color: '#004567' }}
                transition="color .15s ease"
              >
                {l.label}
              </CLink>
            ))}
          </HStack>

          {/* Botão Contato – desktop */}
          <Button
            as={NextLink}
            href="#contato"
            variant="outline"
            size="lg"
            rounded="full"
            fontWeight={100}
            fontSize="xl"
            borderWidth="2px"
            borderColor="#92DEFD"
            bg="white"
            color="#004567"
            _hover={{ bg: 'blue.50', borderColor: 'blue.300' }}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Contato
          </Button>

          {/* Menu mobile */}
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            ml="auto"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Drawer mobile */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} mt={2} onClick={onClose}>
              {links.map((l) => (
                <CLink
                  as={NextLink}
                  key={l.id}
                  href={l.href}
                  fontWeight={active === (l.id as typeof active) ? 700 : 400}
                  fontSize="lg"
                >
                  {l.label}
                </CLink>
              ))}
              <Button as={NextLink} href="#contato" rounded="full" colorScheme="#004567">
                Contato
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
