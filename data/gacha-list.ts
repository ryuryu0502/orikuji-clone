import type { GachaCard } from '@/types';

/**
 * ガチャリストのモックデータ
 * 
 * 本番環境ではAPIから取得することを想定
 */
export const GACHA_LIST: GachaCard[] = [
    {
        id: 1,
        title: "【ポケモン】楽園ドラゴーナ BOX確定オリパ",
        price: 500,
        image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Pokemon+BOX",
        remaining: 2965,
        total: 3190,
        status: "active",
        prizes: [
            {
                name: "リザードンVMAX",
                image: "https://via.placeholder.com/300x420/FBBF24/000000?text=UR+Card",
                rarity: "UR"
            },
            {
                name: "ピカチュウV",
                image: "https://via.placeholder.com/300x420/F87171/000000?text=SR+Card",
                rarity: "SR"
            },
            {
                name: "イーブイ",
                image: "https://via.placeholder.com/300x420/60A5FA/000000?text=R+Card",
                rarity: "R"
            },
        ],
    },
    {
        id: 2,
        title: "【ワンピース】新時代の主役 激アツガチャ",
        price: 3000,
        image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=One+Piece",
        remaining: 150,
        total: 1000,
        status: "active",
        prizes: [],
    },
    {
        id: 3,
        title: "【ポケモン】超高還元！マイルドオリパ",
        price: 100,
        image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Pokemon+Mild",
        remaining: 0,
        total: 5000,
        status: "sold_out",
        prizes: [],
    },
    {
        id: 4,
        title: "【遊戯王】25th ANNIVERSARY COLLECTION",
        price: 10000,
        image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Yu-Gi-Oh+25th",
        remaining: 0,
        total: 100,
        status: "ended",
        prizes: [],
    },
];
