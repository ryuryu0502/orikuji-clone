import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-surface py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-primary">ORIKUJI</h3>
                        <p className="text-sm text-gray-400">
                            オンラインオリパならORIKUJI。
                            <br />
                            24時間いつでもどこでも引ける！
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-white">サービス</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary">ガチャ一覧</Link></li>
                            <li><Link href="#" className="hover:text-primary">ランキング</Link></li>
                            <li><Link href="#" className="hover:text-primary">ポイント購入</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-white">サポート</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary">よくある質問</Link></li>
                            <li><Link href="#" className="hover:text-primary">お問い合わせ</Link></li>
                            <li><Link href="#" className="hover:text-primary">利用規約</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-white">運営会社</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary">会社概要</Link></li>
                            <li><Link href="#" className="hover:text-primary">プライバシーポリシー</Link></li>
                            <li><Link href="#" className="hover:text-primary">特定商取引法に基づく表記</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    &copy; 2025 ORIKUJI Clone. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
