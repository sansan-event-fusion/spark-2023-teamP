import { QueryClient } from 'react-query';
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