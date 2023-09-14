import { QueryClient } from 'react-query';
import { isEqual } from '../utils';
import mockData, { MockData } from './data';

export default class Mock {
    queryClient: QueryClient;
    data: MockData;

    constructor() {
        this.queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                    staleTime: Infinity
                }
            }
        });
        this.data = [];

        mockData.forEach(({ key, response }) => {
            this.queryClient.setQueryData(key, response);
            this.data.push({ key, response });
        });
    }

    getQueryClient() {
        return this.queryClient;
    }

    getMockData<T>(key: any): T | undefined {
        const response = this.data.find(rec => isEqual(rec.key, key))?.response;
        return (response as T | undefined);
    }

    setMockData<T>(key: any, response: T) {
        const rec = this.data.find(rec => isEqual(rec.key, key));

        if (rec) {
            rec.response = response;
        } else {
            this.data.push({ key, response });
        }

        this.queryClient.setQueryData(key, response);
    }
}