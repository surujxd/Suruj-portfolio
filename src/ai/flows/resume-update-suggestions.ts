'use server';

/**
 * @fileOverview A resume update suggestion AI agent.
 *
 * - getResumeUpdateSuggestions - A function that suggests resume updates based on contact form messages.
 * - ResumeUpdateSuggestionsInput - The input type for the getResumeUpdateSuggestions function.
 * - ResumeUpdateSuggestionsOutput - The return type for the getResumeUpdateSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeUpdateSuggestionsInputSchema = z.object({
  contactMessage: z
    .string()
    .describe('The content of the contact form message.'),
});
export type ResumeUpdateSuggestionsInput = z.infer<
  typeof ResumeUpdateSuggestionsInputSchema
>;

const ResumeUpdateSuggestionsOutputSchema = z.object({
  suggestedUpdates: z
    .string()
    .describe(
      'A list of suggested resume updates based on the contact message.'
    ),
});
export type ResumeUpdateSuggestionsOutput = z.infer<
  typeof ResumeUpdateSuggestionsOutputSchema
>;

export async function getResumeUpdateSuggestions(
  input: ResumeUpdateSuggestionsInput
): Promise<ResumeUpdateSuggestionsOutput> {
  return resumeUpdateSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeUpdateSuggestionsPrompt',
  input: {schema: ResumeUpdateSuggestionsInputSchema},
  output: {schema: ResumeUpdateSuggestionsOutputSchema},
  prompt: `You are an AI assistant specializing in providing resume update suggestions.

  Based on the content of the contact message, suggest specific updates to the resume (skills, projects).
  Focus on identifying new technologies, project experiences, or areas of expertise mentioned in the message.
  Return a list of suggested updates that Suruj can implement to keep his portfolio relevant.

  Contact Message: {{{contactMessage}}}`,
});

const resumeUpdateSuggestionsFlow = ai.defineFlow(
  {
    name: 'resumeUpdateSuggestionsFlow',
    inputSchema: ResumeUpdateSuggestionsInputSchema,
    outputSchema: ResumeUpdateSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
