import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';


export class ChatCompletionMessageDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    role: string;

    @MaxLength(500, { message: 'Prompt is long. Maximum length is 500 characters.' })
    @IsNotEmpty()
    @IsString()
    prompt: string;
}
