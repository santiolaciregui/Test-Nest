import { Body, Controller, Post, Logger } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { OpenaiService } from './openai.service';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request';

@ApiTags('OpenAI')
@Controller('openai')
export class OpenaiController {
    private readonly logger = new Logger(OpenaiController.name);

    constructor(private readonly openaiService: OpenaiService) {}

    @Post('prompt')
    @ApiBody({ type: ChatCompletionMessageDto })
    async handlePrompt(@Body() message: ChatCompletionMessageDto) {
        this.logger.log(`Prompt recibido : ${message.prompt}`);

        message.role = 'user';
        const aiResponse = await this.openaiService.processPrompt(message.prompt);

        const response = {
            prompt: message.prompt,
            response: aiResponse.choices[0].message.content
        };

        this.logger.log(`Respuesta : ${JSON.stringify(response)}`);
        return response;
    }
}
