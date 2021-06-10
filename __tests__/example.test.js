function add(a, b) {
  return a + b;
}

// Test name, the test itself
// It is important that the tests are good writtend and the name of it need to be clear as possible
// test('if I call the route /authenticate with a valid user, it should return a JWT', () => {});
test('If I call the add function with the values 4 and 5 it should return 9 as result', () => {
  const result = add(4, 5);

  expect(result).toBe(9);
});
