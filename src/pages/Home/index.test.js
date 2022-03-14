import { sum } from './';

test('sum function', () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
})