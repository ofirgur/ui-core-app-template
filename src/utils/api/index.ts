import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const IS_MOCKED = false;

export const createAPIAction = () => {
  if(IS_MOCKED) {
    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios, { delayResponse: 2000 });

    // Mock GET request to /users when param `searchText` is 'John'
    // arguments for reply are (status, data, headers)
    mock.onGet("https://jsonplaceholder.typicode.com/users", { params: { searchText: "John" } }).reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
  }
  axios
    .get("https://jsonplaceholder.typicode.com/users", { params: { searchText: "John" } })
    .then(function (response) {
      console.log(response.data);
  });
};
