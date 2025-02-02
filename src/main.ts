import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';
import { SubscribeModule } from './subscriber/subscribe.module';
import { ContractEventSubscribeService } from './subscriber/contractEventSubscribe.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  const options = new DocumentBuilder()
    .setTitle('SME API DOCs')
    .setDescription('')
    .setVersion('1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  app.useGlobalInterceptors(new Response());
  app.useGlobalFilters(new HttpFilter());

  const subscribe = app.get(ContractEventSubscribeService);

  process.on('SIGINT', () => {
    subscribe.onApplicationShutdown('SIGINT');
  });

  await app.listen(3000);
}
bootstrap();
