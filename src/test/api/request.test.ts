process.env.NEXT_PUBLIC_API_ENDPOINT = 'http://example.com';

import { request, requestJson } from "../../app/api/request";

describe('request', () => {
    const text = JSON.stringify({ result: true });

    beforeAll(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue(new Response(text));
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('params', () => {
        it('get request with params', async () => {
            await request('/test/:userId/:postId', 'GET', { params: { userId: 1, postId: 2 } });
            expect(fetch).toBeCalledWith('http://example.com/test/1/2');
        });

        it('get request with redundant params', async () => {
            await request('/test/:userId', 'GET', { params: { userId: 1, postId: 2 } });
            expect(fetch).toBeCalledWith('http://example.com/test/1');
        });

        it('get request with insufficient params', async () => {
            const promise = request('/test/:userId/:postId', 'GET', { params: { postId: 2 } });
            try {
                await promise
            } catch (e) {}
            expect(promise).rejects.toThrowError();
            expect(fetch).not.toBeCalled();
        });

        it('get request with empty params', async () => {
            await request('/test', 'GET', { params: {} });
            expect(fetch).toBeCalledWith('http://example.com/test');
        });
    });

    describe('query', () => {
        it('get request with single query', async () => {
            await request('/test', 'GET', { query: { userId: 1 } });
            expect(fetch).toBeCalledWith('http://example.com/test?userId=1');
        });

        it('get request with multiple query', async () => {
            await request('/test', 'GET', { query: { userId: 1, postId: 2 } });
            expect(fetch).toBeCalledWith('http://example.com/test?userId=1&postId=2');
        });

        it('get request with empty query', async () => {
            await request('/test', 'GET', { query: {} });
            expect(fetch).toBeCalledWith('http://example.com/test');
        });
    });

    describe('body', () => {
        it('get request with body', async () => {
            const promise = request('/test', 'GET', { body: { userId: 1, postId: 2 } });
            try {
                await promise;
            } catch (e) {}
            expect(promise).rejects.toThrowError();
            expect(fetch).not.toBeCalled();
        });

        it('post request with body', async () => {
            await request('/test', 'POST', { body: { userId: 1, postId: 2 } });
            const body = JSON.stringify({ userId: 1, postId: 2 });
            expect(fetch).toBeCalledWith('http://example.com/test', expect.objectContaining({ body }));
        });
    });

    describe('params and query', () => {
        it('get request with params and query', async () => {
            await request('/test/:userId', 'GET', { params: { userId: 1 }, query: { postId: 2 } });
            expect(fetch).toBeCalledWith('http://example.com/test/1?postId=2');
        });
    });

    describe('json', () => {
        it('get request parsed in json', async () => {
            const data = await requestJson('/test');
            expect(fetch).toBeCalledWith('http://example.com/test');
            expect(data).toEqual({ result: true });
        });
    });
});