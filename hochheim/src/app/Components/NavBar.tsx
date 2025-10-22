'use client';

import {
  Box, Container, Flex, HStack, Button, Link as CLink, Image,
  useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent,
  DrawerCloseButton, DrawerHeader, DrawerBody, VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { id: 'sobre',     label: 'Sobre',         href: '/' },
  { id: 'servicos',  label: 'Serviços',      href: '/Servicos' },
  { id: 'kids',      label: 'Hochheim Kids', href: '/Kids' },
  { id: 'blog',      label: 'Blog',          href: '/Blog' },
];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const normalize = (s: string) =>
    (s || '/').toLowerCase().replace(/\/+$/, '') || '/';

  const path = normalize(pathname || '/');

  const isActive = (href: string) => {
    const h = normalize(href);
    if (h === '/') return path === '/';
    return path === h || path.startsWith(h + '/');
  };

  const darkBlue = 'brand.800';
  const midBlue  = 'brand.700';

  return (
    <Box as="header" bg="brand.20" borderBottomWidth="1px" borderColor="blackAlpha.100" position="sticky" top={0} zIndex={20}>
      <Container maxW="6xl" py={{ base: 3, md: 10 }}>
        <Flex align="center" gap={6}>
          <CLink as={NextLink} href="/" _hover={{ opacity: 0.9 }}>
            <Image src="/logo.png" alt="Hochheim" h={{ base: '5rem', md: '7rem' }} w="auto" draggable={false} />
          </CLink>

          <HStack as="nav" spacing={{ base: 6, md: 12 }} mx="auto" display={{ base: 'none', md: 'flex' }}>
            {links.map((l) => {
              const activeNow = isActive(l.href);
              return (
                <CLink
                  as={NextLink}
                  key={l.id}
                  href={l.href}
                  aria-current={activeNow ? 'page' : undefined}
                  fontWeight={activeNow ? '800' : '200'}
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={activeNow ? darkBlue : midBlue}
                  transition="all .2s ease"
                  _hover={{ color: darkBlue, fontWeight: '800', textDecoration: 'none' }}
                >
                  {l.label}
                </CLink>
              );
            })}
          </HStack>

          <Button
            as={NextLink}
            href="/#contato"
            variant="outline"
            size="lg"
            rounded="full"
            fontWeight={100}
            fontSize="xl"
            borderWidth="2px"
            borderColor="brand.200"
            bg="white"
            color={midBlue}
            _hover={{ bg: 'brand.500', borderColor: 'brand.500', color: 'white' }}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Contato
          </Button>

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

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} mt={2} onClick={onClose}>
              {links.map((l) => {
                const activeNow = isActive(l.href);
                return (
                  <CLink
                    as={NextLink}
                    key={l.id}
                    href={l.href}
                    aria-current={activeNow ? 'page' : undefined}
                    fontWeight={activeNow ? '800' : '400'}
                    color={activeNow ? darkBlue : midBlue}
                    _hover={{ color: darkBlue, fontWeight: '800', textDecoration: 'none' }}
                    fontSize="lg"
                  >
                    {l.label}
                  </CLink>
                );
              })}
              <Button
                as={NextLink}
                href="/#contato"
                rounded="full"
                variant="outline"
                color={midBlue}
                _hover={{ color: darkBlue, bg: 'blue.50' }}
              >
                Contato
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
