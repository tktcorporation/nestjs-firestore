import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './app.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('lets todo api')
        .setDescription('The TODO API description')
        .setVersion('0.1')
        .addTag('todo')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apidoc', app, document);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    app.enableCors({
        origin: '*',
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    });

    const port = Config.PORT ?? 3000;
    Logger.debug(`listen port ${port}`);
    await app.listen(port);
}
bootstrap();
