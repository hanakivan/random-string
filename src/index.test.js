import generateRandomString from './index';

const randomString = generateRandomString();

test('generates string', () => {
    expect(typeof randomString).toBe("string");
    expect(randomString.length).toBeGreaterThan(20);
    expect(randomString.length).toBeLessThan(60);
});