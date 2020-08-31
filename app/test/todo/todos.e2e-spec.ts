import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TodoModule } from './../../src/module/todo/todo.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let id: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [TodoModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ transform: true }));
        await app.init();
    });
    describe('/todos (POST)', () => {
        it('201', async () => {
            const todo: {
                title: string;
                coverImage?: string;
                detail?: string;
                planedAt: number;
                expiredIn: number; // 1-60 minutes
                startedAt: number;
                member?: {
                    id: string;
                    done?: boolean;
                }[];
            } = {
                title: '発表会',
                // coverImage: "aaa",
                detail: 'aaa',
                planedAt: 1234567678,
                expiredIn: 30,
                startedAt: 123456767,
                member: [
                    {
                        id: 'asdfghjk',
                    },
                    {
                        id: 'asdfghjkasas',
                        done: true,
                    },
                ],
            };
            const result = await request
                .default(app.getHttpServer())
                .post('/todos')
                .send(todo)
                .expect(201);
            id = result.body.id;
            expect(typeof result.body.id).toBe('string');
        });
        it('400', async () => {
            const result = await request
                .default(app.getHttpServer())
                .post('/todos')
                .expect(400);
        });
    });
    describe('/todos (PUT)', () => {
        it('200', async () => {
            const todo: {
                title: string;
                coverImage?: string;
                detail?: string;
                planedAt: number;
                expiredIn: number; // 1-60 minutes
                startedAt: number;
                member?: {
                    id: string;
                    done?: boolean;
                }[];
            } = {
                title: '発表会',
                // coverImage: "aaa",
                detail: 'aaa',
                planedAt: 1234567678,
                expiredIn: 30,
                startedAt: 123456767,
                member: [
                    {
                        id: 'asdfghjk',
                    },
                    {
                        id: 'asdfghjkasas',
                        done: true,
                    },
                ],
            };
            const result = await request
                .default(app.getHttpServer())
                .put(`/todos/${id}`)
                .send(todo)
                .expect(200);
            expect(typeof result.body.id).toBe('string');
        });
        it('400', async () => {
            const result = await request
                .default(app.getHttpServer())
                .put(`/todos/${id}`)
                .expect(400);
        });
    });
});
