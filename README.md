# Caderno

Um caderno de leituras — site estático feito com Astro.

## Como funciona
- Cada FRASE é um arquivo em `src/content/quotes/`. O que fica entre os `---`
  é a ficha (número, autor, obra, a frase). O que você escreve embaixo é o seu
  comentário, e pode ter imagens.
- Cada ENSAIO é um arquivo em `src/content/ensaios/`.
- As imagens ficam em `public/images/` e são usadas assim no comentário:
  `![descrição](/images/nome-da-imagem.jpg)`

## Adicionar uma frase
Crie um arquivo novo em `src/content/quotes/`, por exemplo `17-nova-frase.md`:

    ---
    number: 17
    author: Nome do Autor
    work: Nome da Obra
    quote: >-
      O texto da frase aqui.
    ---

    (Opcional) Aqui embaixo vai o seu comentário, quando quiser escrever.

## Publicar
Este projeto vira um site quando você o coloca no GitHub e conecta a um serviço
gratuito como Netlify, Vercel ou Cloudflare Pages. Comando de build: `npm run build`.
Pasta publicada: `dist`.
