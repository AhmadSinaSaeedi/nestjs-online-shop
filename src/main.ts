import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(
    'Server has started on http://localhost:3000/graphql to see it running.',
  );
}
bootstrap();
