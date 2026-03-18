'use server';
/**
 * @fileOverview An AI agent that assists in drafting personalized outreach messages for potential partners.
 *
 * - aiOutreachMessageGenerator - A function that generates a personalized outreach message.
 * - AIOutreachMessageGeneratorInput - The input type for the aiOutreachMessageGenerator function.
 * - AIOutreachMessageGeneratorOutput - The return type for the aiOutreachMessageGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIOutreachMessageGeneratorInputSchema = z.object({
  partnerProfile: z
    .string()
    .describe(
      'A detailed profile of the potential partner, including their business, target audience, and current offerings.'
    ),
  companyValueProposition: z
    .string()
    .describe(
      'Your company\'s value proposition, highlighting what makes your offering unique and beneficial.'
    ),
});
export type AIOutreachMessageGeneratorInput = z.infer<
  typeof AIOutreachMessageGeneratorInputSchema
>;

const AIOutreachMessageGeneratorOutputSchema = z.object({
  message: z
    .string()
    .describe('The personalized outreach message drafted for the potential partner.'),
});
export type AIOutreachMessageGeneratorOutput = z.infer<
  typeof AIOutreachMessageGeneratorOutputSchema
>;

export async function aiOutreachMessageGenerator(
  input: AIOutreachMessageGeneratorInput
): Promise<AIOutreachMessageGeneratorOutput> {
  return aiOutreachMessageGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiOutreachMessageGeneratorPrompt',
  input: {schema: AIOutreachMessageGeneratorInputSchema},
  output: {schema: AIOutreachMessageGeneratorOutputSchema},
  prompt: `You are an expert in business development and partnership outreach. Your task is to draft a highly personalized and compelling outreach message to a potential partner.

Consider the following information:

Potential Partner's Profile: {{{partnerProfile}}}
Your Company's Value Proposition: {{{companyValueProposition}}}

Craft a professional and persuasive message that:
1. Addresses the potential partner directly and shows you understand their business.
2. Clearly articulates how your company's value proposition aligns with their needs or could benefit their audience/offerings.
3. Briefly explains the mutual benefits of a potential partnership.
4. Ends with a clear call to action, proposing a brief introductory meeting or further discussion.

The message should be concise, respectful, and designed to elicit a positive response. Focus on value for the partner.

Draft the complete outreach message below:`,
});

const aiOutreachMessageGeneratorFlow = ai.defineFlow(
  {
    name: 'aiOutreachMessageGeneratorFlow',
    inputSchema: AIOutreachMessageGeneratorInputSchema,
    outputSchema: AIOutreachMessageGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
