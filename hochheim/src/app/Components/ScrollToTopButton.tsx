'use client'

import { IconButton } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const whatsappNumber = '5547999833291' // 👈 número com DDI + DDD, sem traços nem espaços
  const message = 'Olá! Gostaria de agendar uma consulta!' 

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <IconButton
      as="a"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      icon={<FaWhatsapp size={28} />}
      position="fixed"
      bottom={{ base: '20px', md: '30px' }}
      right={{ base: '20px', md: '30px' }}
      zIndex="1000"
      bg="#25D366"
      color="white"
      _hover={{ bg: '#1EBE57', transform: 'scale(1.05)' }}
      borderRadius="full"
      size="lg"
      shadow="xl"
      transition="all 0.2s ease"
    />
  )
}
