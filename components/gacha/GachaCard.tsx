"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import GachaResultModal from "./GachaResultModal";
import type { GachaCardProps, CardResult } from "@/types";
import { calculateProgress, getRandomElement } from "@/lib/utils";

export default function GachaCard({
    title,
    price,
    image,
    remaining,
    total,
    status = "active",
    prizes = [],
}: GachaCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [gachaResult, setGachaResult] = useState<CardResult | null>(null);

    const progress = calculateProgress(remaining, total);

    const handlePull = () => {
        if (prizes.length === 0) {
            alert("このガチャには景品が設定されていません。");
            return;
        }
        // ランダムに景品を選択
        const randomPrize = getRandomElement(prizes);
        setGachaResult(randomPrize);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="group relative overflow-hidden rounded-xl bg-surface border border-white/5 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(255,215,0,0.3)]">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/50 relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {status !== "active" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                            <span className="text-xl font-bold text-white">
                                {status === "sold_out" ? "SOLD OUT" : "販売終了"}
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-white line-clamp-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <div className="mb-4 flex items-end justify-between">
                        <div className="text-sm text-gray-400">
                            残り <span className="text-white font-bold">{remaining}</span> / {total}
                        </div>
                        <div className="text-xl font-bold text-primary">
                            {price} <span className="text-sm text-gray-400">pt</span>
                        </div>
                    </div>

                    <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <button
                        onClick={handlePull}
                        disabled={status !== "active"}
                        className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn"
                    >
                        1回引く
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
            <GachaResultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                result={gachaResult}
            />
        </>
    );
}
