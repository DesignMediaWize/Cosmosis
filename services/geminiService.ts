import { GoogleGenAI } from "@google/genai";

/**
 * Generates a creative concept based on a user's raw idea.
 * Uses the high-speed gemini-2.5-flash model for quick interactions.
 *
 * @param userIdea - The raw input from the user (e.g., "A logo for a coffee shop")
 * @returns A structured creative brief string.
 */
export const generateCreativeConcept = async (userIdea: string): Promise<string> => {
  try {
    // Initialize the client ONLY when the function is called, not on app load.
    // This prevents "process is not defined" crashes in some build environments.
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables");
      return "System Error: Neural Link Disconnected (Missing API Key).";
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a world-class Creative Director at a futuristic design agency called "Cosmosis". 
      
      The user has a vague idea: "${userIdea}".
      
      Your task is to turn this into a "Cosmic Concept Brief". 
      Provide a response in Markdown format with the following sections:
      - **Concept Name**: A catchy, abstract name.
      - **Visual Style**: A vivid description of the aesthetic (e.g., Cyberpunk, Ethereal, Brutalist).
      - **Color Palette**: 3 distinctive colors with creative names.
      - **The Hook**: A one-sentence tagline that screams creativity.
      
      Keep it punchy, inspiring, and slightly avant-garde. Limit to 150 words.`,
      config: {
        temperature: 0.9, // High creativity
      }
    });

    return response.text || "Our creative signals are currently jammed. Please try again.";
  } catch (error) {
    console.error("Error generating concept:", error);
    return "We couldn't reach the creative core at this moment. Please try again later.";
  }
};