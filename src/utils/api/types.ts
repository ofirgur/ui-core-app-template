export type MockConfig = {
  mockDelay: number,
  mockResponse: MockResponse,
};
  
  export type MockResponse<T = any> = {
    status: number;
    data: T;
  };