'use server';
/**
 * @fileOverview An AI agent for discovering potential business partners.
 *
 * - aiPartnerDiscovery - A function that handles the AI partner discovery process.
 * - AiPartnerDiscoveryInput - The input type for the aiPartnerDiscovery function.
 * - AiPartnerDiscoveryOutput - The return type for the aiPartnerDiscovery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestedPartnerSchema = z.object({
  name: z.string().describe('The name of the suggested partner company or entity.'),
  description: z.string().describe('A brief description of the suggested partner.'),
  alignmentScore: z
    .number()
    .min(0)
    .max(100)
    .describe('A score (0-100) indicating how well this partner aligns with the company\u0027s criteria.'),
  reasoning: z
    .string()
    .describe('A concise explanation for why this partner is a good suggestion, focusing on complementary products/audiences.'),
});

const AiPartnerDiscoveryInputSchema = z.object({
  productDescription: z
    .string()
    .describe("A detailed description of the company's product or service."),
  targetAudience: z
    .string()
    .describe("A description of the company's ideal target audience."),
  partnershipGoals: z
    .string()
    .describe('The specific goals the company aims to achieve through partnerships (e.g., expand market reach, acquire new users).'),
});
export type AiPartnerDiscoveryInput = z.infer<typeof AiPartnerDiscoveryInputSchema>;

const AiPartnerDiscoveryOutputSchema = z.object({
  suggestedPartners: z
    .array(SuggestedPartnerSchema)
    .min(3)
    .max(5)
    .describe('A list of 3 to 5 potential partner suggestions.'),
});
export type AiPartnerDiscoveryOutput = z.infer<typeof AiPartnerDiscoveryOutputSchema>;

export async function aiPartnerDiscovery(
  input: AiPartnerDiscoveryInput
): Promise<AiPartnerDiscoveryOutput> {
  return aiPartnerDiscoveryFlow(input);
}

const aiPartnerDiscoveryPrompt = ai.definePrompt({
  name: 'aiPartnerDiscoveryPrompt',
  input: {schema: AiPartnerDiscoveryInputSchema},
  output: {schema: AiPartnerDiscoveryOutputSchema},
  prompt: `You are an intelligent partner discovery engine. Your task is to identify and suggest ideal collaboration partners for a company based on their product, target audience, and partnership goals.

Analyze the following information about the company:
Product Description: {{{productDescription}}}
Target Audience: {{{targetAudience}}}
Partnership Goals: {{{partnershipGoals}}}

Based on this information, suggest 3-5 potential partners. For each partner, provide a brief description, an alignment score (0-100) indicating how well they fit the criteria, and a concise reasoning for the suggestion. Focus on partners with complementary product categories and shared audiences.`,
});

const aiPartnerDiscoveryFlow = ai.defineFlow(
  {
    name: 'aiPartnerDiscoveryFlow',
    inputSchema: AiPartnerDiscoveryInputSchema,
    outputSchema: AiPartnerDiscoveryOutputSchema,
  },
  async input => {
    const {output} = await aiPartnerDiscoveryPrompt(input);
    return output!;
  }
);
