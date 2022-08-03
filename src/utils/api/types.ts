export type MockConfig = {
    mockDelay: number,
    mockResponse: MockResponse,
};

export type MockResponse = {
    status: number;
    data: any;
};
