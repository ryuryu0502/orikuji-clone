"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * バナー情報の型定義
 */
interface Banner {
    id: number;
    title: string;
    description: string;
    color: string;
}

/**
 * ヒーローバナーのデータ
 * 本番環境ではCMSやAPIから取得することを想定
 */
const BANNERS: Banner[] = [
    {
        id: 1,
        title: "超豪華！ポケモンカードガチャ",
        description: "激レアカードが当たるチャンス！",
        color: "from-purple-600 to-blue-600",
    },
    {
        id: 2,
        title: "期間限定！ワンピースカード",
        description: "今だけの特別ラインナップ",
        color: "from-red-600 to-orange-600",
    },
    {
        id: 3,
        title: "新規登録キャンペーン",
        description: "500ポイントプレゼント中！",
        color: "from-green-600 to-teal-600",
    },
];

/**
 * ヒーローバナーコンポーネント
 * 
 * トップページのメインビジュアルエリア
 * - 自動スライドするバナー
 * - アニメーション付きのテキスト表示
 * - インジケーターによる手動切り替え
 */
export default function Hero() {
    const [current, setCurrent] = useState(0);

    // 自動スライド機能
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % BANNERS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[400px] w-full overflow-hidden bg-surface">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${BANNERS[current].color}`}
                >
                    <div className="container mx-auto px-4 text-center">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 text-4xl font-bold text-white md:text-6xl"
                        >
                            {BANNERS[current].title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/90"
                        >
                            {BANNERS[current].description}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* スライドインジケーター */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {BANNERS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 rounded-full transition-all ${current === index ? "w-8 bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
