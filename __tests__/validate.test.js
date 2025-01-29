const isValidEmail = require('../src/util/validation');

test('valid email string', () => {
  expect(isValidEmail('seun@mine.com')).toBe(true);
});
