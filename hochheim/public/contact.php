<?php
// contact.php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Método não permitido']);
  exit;
}

// Honeypot anti-bot (campo "website" oculto no front)
$hp = isset($_POST['website']) ? trim($_POST['website']) : '';
if ($hp !== '') {
  echo json_encode(['ok' => true]); // finge sucesso
  exit;
}

$nome     = trim($_POST['nome']     ?? '');
$email    = trim($_POST['email']    ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$cidade   = trim($_POST['cidade']   ?? '');
$estado   = trim($_POST['estado']   ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');

if ($nome === '' || $email === '' || $mensagem === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Preencha nome, e-mail e mensagem.']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'E-mail inválido.']);
  exit;
}

// CONFIGURAÇÕES
$to      = 'contato@clinicahochheim.com.br';
$from    = 'no-reply@clinicahochheim.com.br'; // remetente do MESMO domínio
$assunto = 'Novo contato via site - Clínica Hochheim';

// Corpo do e-mail (texto puro)
$bodyTxt = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nCidade/UF: $cidade/$estado\n\nMensagem:\n$mensagem\n";

$headers   = [];
$headers[] = "From: Clinica Hochheim <{$from}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headersStr = implode("\r\n", $headers);

// Envia
$sent = @mail($to, '=?UTF-8?B?'.base64_encode($assunto).'?=', $bodyTxt, $headersStr);

if ($sent) {
  echo json_encode(['ok' => true, 'message' => 'Mensagem enviada com sucesso.']);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Falha ao enviar. Tente novamente.']);
}
