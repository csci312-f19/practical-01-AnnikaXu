/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2019').valueOf());
  });

  test('Returns 0 if birthday is less than one year ago', () => {
    expect(birthday.howOld(new Date('01 Dec 2018'))).toBe(0);
  });
});
