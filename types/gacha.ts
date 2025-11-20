/**
 * ガチャシステムの型定義
 */

/**
 * ガチャのステータス
 */
export type GachaStatus = "active" | "sold_out" | "ended";

/**
 * ガチャのカテゴリ
 */
export type GachaCategory = "all" | "pokemon" | "onepiece" | "yugioh" | "other";

/**
 * カードのレアリティ
 */
export type CardRarity = "UR" | "SR" | "R" | "N";

/**
 * ガチャの結果として得られるカード情報
 */
export interface CardResult {
    /** カード名 */
    name: string;
    /** カード画像URL */
    image: string;
    /** レアリティ */
    rarity: CardRarity;
}

/**
 * ガチャカードの情報
 */
export interface GachaCard {
    /** ガチャID */
    id: number;
    /** ガチャタイトル */
    title: string;
    /** カテゴリ */
    category: GachaCategory;
    /** 価格（ポイント） */
    price: number;
    /** サムネイル画像URL */
    image: string;
    /** 残り数量 */
    remaining: number;
    /** 総数量 */
    total: number;
    /** ステータス */
    status: GachaStatus;
    /** 景品リスト */
    prizes: CardResult[];
}

/**
 * ガチャカードコンポーネントのProps
 */
export interface GachaCardProps {
    /** ガチャタイトル */
    title: string;
    /** 価格（ポイント） */
    price: number;
    /** サムネイル画像URL */
    image: string;
    /** 残り数量 */
    remaining: number;
    /** 総数量 */
    total: number;
    /** ステータス */
    status?: GachaStatus;
    /** 景品リスト */
    prizes: CardResult[];
}

/**
 * ガチャ結果モーダルのProps
 */
export interface GachaResultModalProps {
    /** モーダルの開閉状態 */
    isOpen: boolean;
    /** モーダルを閉じる関数 */
    onClose: () => void;
    /** ガチャ結果 */
    result: CardResult | null;
}
