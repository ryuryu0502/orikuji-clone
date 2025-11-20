"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { GachaResultModalProps, CardRarity } from "@/types";
import { RARITY_COLORS } from "@/lib/constants";

/**
 * レアリティに応じた色を取得する
 */
const getRarityColor = (rarity: string): string => {
    return RARITY_COLORS[rarity as CardRarity] || RARITY_COLORS.N;
};

export default function GachaResultModal({
    isOpen,
    onClose,
    result,
}: GachaResultModalProps) {
    if (!result) return null;


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative max-w-md w-full bg-surface rounded-2xl border border-white/10 p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>

                        <div className="text-center">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${getRarityColor(
                                    result.rarity
                                )} text-black font-bold text-xl mb-6`}
                            >
                                {result.rarity}
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                                className="relative w-full aspect-[3/4] mb-6 rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={result.image}
                                    alt={result.name}
                                    fill
                                    className="object-cover"
                                    sizes="400px"
                                />
                            </motion.div>

                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl font-bold text-white mb-4"
                            >
                                {result.name}
                            </motion.h3>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="text-gray-400 mb-6"
                            >
                                おめでとうございます！
                            </motion.p>

                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                onClick={onClose}
                                className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black hover:opacity-90 transition-opacity"
                            >
                                閉じる
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
