export const DEFAULT_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const DEFAULT_MOCK_CONFIG = {
  mockDelay: 2000,
  mockResponse: {
    status: 200,
    data: 'createAPIAction function: default mockConfig',
  },
};

/* 
There is also a built-in environment variable called NODE_ENV. 
You can read it from process.env.NODE_ENV. When you run npm start, 
it is always equal to 'development', when you run npm test it is always equal to 'test', 
and when you run npm run build to make a production bundle, it is always equal to 'production'. 
You cannot override NODE_ENV manually. 
This prevents developers from accidentally deploying a slow development build to production.
*/
export const USE_MOCK = process.env.NODE_ENV !== 'production';
