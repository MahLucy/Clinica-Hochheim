/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // gera HTML estático (pasta out/)
  images: { unoptimized: true }, // desativa otimização de imagens do Next
  trailingSlash: true,           // gera /index.html por rota (bom pro Apache)
  // Se for subdomínio (ex.: novosite.clinicahochheim.com.br) -> deixe SEM basePath.
  // Se fosse subpasta (ex.: /novosite), aí sim:
  // basePath: '/novosite',
  // assetPrefix: '/novosite/',
};

module.exports = nextConfig;
