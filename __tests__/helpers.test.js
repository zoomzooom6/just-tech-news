const { test, expect } = require("@jest/globals");
const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-07-13 18:01:22');

    expect(format_date(date)).toBe('13/7/2021');
});

test('format_plural() returns pluralized word', () => {
    const testPhrase = 'tiger'
    const plural = 2

    expect(format_plural(testPhrase, plural)).toBe('tigers');
});

test('format_url() returns simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.ca?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.ca');
});