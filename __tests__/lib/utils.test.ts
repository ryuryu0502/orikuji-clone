import { formatPrice, calculateProgress, getRandomElement } from '@/lib/utils';

describe('lib/utils', () => {
    describe('formatPrice', () => {
        it('数値を3桁区切りの文字列に変換する', () => {
            expect(formatPrice(1000)).toBe('1,000');
            expect(formatPrice(1000000)).toBe('1,000,000');
            expect(formatPrice(0)).toBe('0');
        });
    });

    describe('calculateProgress', () => {
        it('進捗率を正しく計算する', () => {
            expect(calculateProgress(50, 100)).toBe(50);
            expect(calculateProgress(25, 100)).toBe(25);
            expect(calculateProgress(0, 100)).toBe(0);
            expect(calculateProgress(100, 100)).toBe(100);
        });

        it('totalが0の場合は0を返す', () => {
            expect(calculateProgress(0, 0)).toBe(0);
            expect(calculateProgress(10, 0)).toBe(0);
        });
    });

    describe('getRandomElement', () => {
        it('配列から要素を1つ返す', () => {
            const array = [1, 2, 3];
            const result = getRandomElement(array);
            expect(array).toContain(result);
        });

        it('配列が空の場合はundefinedを返す', () => {
            const array: number[] = [];
            const result = getRandomElement(array);
            expect(result).toBeUndefined();
        });
    });
});
