import { QueryClient } from 'react-query';
import mockRequestData from './request_data';
import mockHelperData from './helper_data';

export function getMockQueryClient() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: Infinity
            }
        }
    });

    mockRequestData.forEach(({ key, response }) => {
        queryClient.setQueryData(key, response);
    })
    mockHelperData.forEach(({ key, response }) => {
        queryClient.setQueryData(key, response);
    })

    return queryClient;
}