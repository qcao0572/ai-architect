import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://space.ai-builders.com/backend/v1',
  apiKey: process.env.AI_BUILDER_TOKEN,
});

export async function POST(req: NextRequest) {
  try {
    // Check if API token is configured
    if (!process.env.AI_BUILDER_TOKEN) {
      console.error('AI_BUILDER_TOKEN is not configured');
      return NextResponse.json(
        { error: 'API token not configured' },
        { status: 500 }
      );
    }

    const { messages, model = 'grok-4-fast' } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Validate messages format
    const validMessages = messages
      .filter((msg: any) => msg.role && msg.content)
      .map((msg: any) => ({
        role: msg.role,
        content: String(msg.content || ''),
      }));

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: 'At least one valid message with role and content is required' },
        { status: 400 }
      );
    }

    console.log('Sending request:', { 
      model, 
      messageCount: validMessages.length,
      firstMessage: validMessages[0] 
    });

    const completion = await openai.chat.completions.create({
      model,
      messages: validMessages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    return NextResponse.json(completion);
  } catch (error: any) {
    console.error('Chat API error:', error);
    console.error('Error status:', error.status);
    console.error('Error code:', error.code);
    console.error('Error type:', error.type);
    console.error('Error param:', error.param);
    
    // Try to extract error details
    let errorMessage = error.message || 'Failed to get chat completion';
    let errorStatus = error.status || 500;
    
    // The OpenAI SDK error might have additional details
    if (error.error) {
      console.error('Error details:', error.error);
      if (typeof error.error === 'object') {
        errorMessage = error.error.message || errorMessage;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        status: errorStatus,
        code: error.code,
        type: error.type,
      },
      { status: errorStatus }
    );
  }
}

