import Link from "next/link";
import { Menu, User, Search } from "lucide-react";

/**
 * ヘッダーコンポーネント
 * 
 * サイト全体で使用されるヘッダーナビゲーション
 * - ロゴとナビゲーションリンク
 * - 検索機能
 * - ログイン/新規登録ボタン
 * - レスポンシブメニュー
 */
export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* ロゴとナビゲーション */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">ORIKUJI</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                        <Link href="/" className="hover:text-primary transition-colors">
                            ホーム
                        </Link>
                        <Link href="/gacha" className="hover:text-primary transition-colors">
                            ガチャ一覧
                        </Link>
                        <Link href="/ranking" className="hover:text-primary transition-colors">
                            ランキング
                        </Link>
                    </nav>
                </div>

                {/* アクションボタン */}
                <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-300 hover:text-primary transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                            ログイン
                        </button>
                        <button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
                            新規登録
                        </button>
                    </div>
                    <button className="md:hidden p-2 text-gray-300">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
