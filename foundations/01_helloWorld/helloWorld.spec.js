const helloWorld = require('./helloWorld');  // importing the helloWorld function from the helloWorld.js file

describe('Hello World', function() { // describe the test suite
  test('says "Hello, World!"', function() { // test the helloWorld function
    expect(helloWorld()).toEqual('Hello, World!');  // expect the helloWorld function to output 'Hello, World!'
  });
});
