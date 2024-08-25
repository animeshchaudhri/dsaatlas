// pages/api/chat.ts
"use server";

import { NextRequest, NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { log } from "console";

const API_KEY = process.env.KEY;
const MODEL_NAME = "gemini-1.5-pro-latest";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { userInput } = reqBody;
    
    
    const genAI = new GoogleGenerativeAI(API_KEY as string);
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig: { maxOutputTokens: 200 },
    });

    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    });

    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response;

    return NextResponse.json({ text: response.text() });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
