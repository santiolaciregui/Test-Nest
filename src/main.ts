import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RateLimiterMiddleware } from './middleware/rate-limiter.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const rateLimiter = new RateLimiterMiddleware();

  app.use(rateLimiter.use.bind(rateLimiter));

  const logger = new Logger('Bootstrap');
  await app.listen(3000);

  logger.log('Application is running on: http://localhost:3000');

}
bootstrap();
