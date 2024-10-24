import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';
import { ChatCompletionMessageParam } from 'openai/resources';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai: OpenAI) {}

    async processPrompt(prompt: string) {
        const messages: ChatCompletionMessageParam[] = [
            {
                role: 'user',
                content: prompt
            }
        ]
        return this.openai.chat.completions.create({
            messages,
            model: 'gpt-4',
        });
    }
}
