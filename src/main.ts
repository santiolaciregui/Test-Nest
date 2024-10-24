import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RateLimiterMiddleware } from './middleware/rate-limiter.middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const rateLimiter = new RateLimiterMiddleware();

  app.use(rateLimiter.use.bind(rateLimiter))
  
  const config = new DocumentBuilder()
       .setTitle('NestJS OpenAI API')
       .setDescription('API documentation for the NestJS OpenAI integration')
       .setVersion('1.0')
       .addTag('OpenAI')
       .build();
     const document = SwaggerModule.createDocument(app, config);
     SwaggerModule.setup('api/docs', app, document);;

  const logger = new Logger('Bootstrap');
  await app.listen(3000);

  logger.log('Application is running on: http://localhost:3000');

}
bootstrap();
