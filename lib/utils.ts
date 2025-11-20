import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSSのクラス名をマージするユーティリティ関数
 * 
 * @param inputs - クラス名の配列
 * @returns マージされたクラス名
 * 
 * @example
 * cn("px-2 py-1", "px-4") // => "px-4 py-1"
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * 価格をフォーマットする
 * 
 * @param price - 価格（ポイント）
 * @returns フォーマットされた価格文字列
 * 
 * @example
 * formatPrice(1000) // => "1,000"
 */
export function formatPrice(price: number): string {
    return price.toLocaleString('ja-JP');
}

/**
 * 進捗率を計算する
 * 
 * @param remaining - 残り数量
 * @param total - 総数量
 * @returns 進捗率（0-100）
 * 
 * @example
 * calculateProgress(50, 100) // => 50
 */
export function calculateProgress(remaining: number, total: number): number {
    if (total === 0) return 0;
    return (remaining / total) * 100;
}

/**
 * ランダムな配列要素を取得する
 * 
 * @param array - 配列
 * @returns ランダムな要素
 * 
 * @example
 * getRandomElement([1, 2, 3]) // => 2 (ランダム)
 */
export function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
