import type { GachaCategory } from '@/types';

/**
 * アプリケーション全体で使用する定数
 */

/**
 * アプリケーション名
 */
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Orikuji Clone";

/**
 * アプリケーションの説明
 */
export const APP_DESCRIPTION = "Clone of Orikuji.com - オンラインガチャサイト";

/**
 * アプリケーションURL
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

/**
 * デフォルトのガチャステータス
 */
export const DEFAULT_GACHA_STATUS = "active";

/**
 * ガチャのカテゴリ一覧
 */
export const GACHA_CATEGORIES: { id: GachaCategory; label: string }[] = [
    { id: "all", label: "すべて" },
    { id: "pokemon", label: "ポケモン" },
    { id: "onepiece", label: "ワンピース" },
    { id: "yugioh", label: "遊戯王" },
    { id: "other", label: "その他" },
];

/**
 * レアリティの色設定
 */
export const RARITY_COLORS = {
    UR: "from-yellow-400 to-orange-500",
    SR: "from-purple-400 to-pink-500",
    R: "from-blue-400 to-cyan-500",
    N: "from-gray-400 to-gray-500",
} as const;

/**
 * ステータスラベル
 */
export const STATUS_LABELS = {
    active: "販売中",
    sold_out: "SOLD OUT",
    ended: "販売終了",
} as const;
