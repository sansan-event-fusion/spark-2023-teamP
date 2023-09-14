import { QueryClient } from "react-query";
import Mock from "./mock";

export const mock = new Mock();

export const queryClient = new QueryClient();
export const mockedQueryClient = mock.getQueryClient();

export function getMockData<T>(key: any) {
    return mock.getMockData<T>(key);
}

export function setMockData(key: any, response: any) {
    return mock.setMockData(key, response);
}
