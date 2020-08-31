import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { UserModule } from './../../src/module/user/user.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [UserModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ transform: true }));
        await app.init();
    });

    it('/users (POST)', async () => {
        const result = await request
            .default(app.getHttpServer())
            .post('/users')
            .expect(201);
        expect(typeof result.body.id).toBe('string');
    });
});
