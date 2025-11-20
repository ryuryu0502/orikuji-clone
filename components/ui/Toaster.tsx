"use client";

import { Toaster as HotToaster } from 'react-hot-toast';

/**
 * トースト通知のラッパーコンポーネント
 * react-hot-toastを使用してアプリケーション全体で通知を表示
 */
export default function Toaster() {
    return (
        <HotToaster
            position="top-center"
            toastOptions={{
                duration: 3000,
                style: {
                    background: '#1A1A1A',
                    color: '#fff',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                },
                success: {
                    iconTheme: {
                        primary: '#FFD700',
                        secondary: '#1A1A1A',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#EF4444',
                        secondary: '#1A1A1A',
                    },
                },
            }}
        />
    );
}
