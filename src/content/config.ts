import { defineCollection, z } from 'astro:content';

// Cada FRASE é um arquivo em src/content/quotes/.
// O que fica em cima (entre os ---) é a ficha da frase.
// O que você escreve embaixo é o seu comentário (pode ter imagens).
const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),          // o número da entrada, como no caderno
    author: z.string(),          // quem disse
    work: z.string().optional(), // a obra (opcional)
    quote: z.string(),           // a frase em si
    translation: z.string().optional(), // tradução opcional (frases bilíngues)
  }),
});

// Cada ENSAIO é um arquivo em src/content/ensaios/.
const ensaios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { quotes, ensaios };
