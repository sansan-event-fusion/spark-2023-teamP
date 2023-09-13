import { QueryClient } from 'react-query';
import { isEqual } from '../utils';
import mockData from './data';

export function getMockQueryClient() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: Infinity
            }
        }
    });

    mockData.forEach(({ key, response }) => {
        queryClient.setQueryData(key, response);
    })

    return queryClient;
}

export function getMockData<T>(key: any): T | undefined {
    const response = mockData.find(rec => isEqual(rec.key, key))?.response;
    return (response as T | undefined);
}