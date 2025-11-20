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
        category: "pokemon",
        price: 500,
        image: "/images/pokemon_box_gacha_1763647219635.png",
        remaining: 2965,
        total: 3190,
        status: "active",
        prizes: [
            {
                name: "リザードンVMAX",
                image: "/images/charizard_vmax_ur_1763647269868.png",
                rarity: "UR"
            },
            {
                name: "ピカチュウV",
                image: "/images/pikachu_v_sr_1763647279726.png",
                rarity: "SR"
            },
            {
                name: "イーブイ",
                image: "/images/eevee_rare_1763647289487.png",
                rarity: "R"
            },
        ],
    },
    {
        id: 2,
        title: "【ワンピース】新時代の主役 激アツガチャ",
        category: "onepiece",
        price: 3000,
        image: "/images/onepiece_leader_gacha_1763647229084.png",
        remaining: 150,
        total: 1000,
        status: "active",
        prizes: [],
    },
    {
        id: 3,
        title: "【ポケモン】超高還元！マイルドオリパ",
        category: "pokemon",
        price: 100,
        image: "/images/pokemon_mild_gacha_1763647242330.png",
        remaining: 0,
        total: 5000,
        status: "sold_out",
        prizes: [],
    },
    {
        id: 4,
        title: "【遊戯王】25th ANNIVERSARY COLLECTION",
        category: "yugioh",
        price: 10000,
        image: "/images/yugioh_25th_anniversary_1763647253367.png",
        remaining: 0,
        total: 100,
        status: "ended",
        prizes: [],
    },
];
