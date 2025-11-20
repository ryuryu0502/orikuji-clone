import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import GachaCard from "@/components/gacha/GachaCard";
import { GACHA_LIST } from "@/data/gacha-list";
import { GACHA_CATEGORIES } from "@/lib/constants";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1">
                <Hero />

                <section className="container mx-auto px-4 py-12">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            <span className="mr-2 text-primary">GACHA</span>
                            ガチャ一覧
                        </h2>
                        <div className="flex gap-2">
                            {GACHA_CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    className={`rounded-full px-4 py-1 text-sm transition-colors ${category.id === "all"
                                            ? "bg-surface text-white hover:bg-white/10"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {GACHA_LIST.map((gacha) => (
                            <GachaCard key={gacha.id} {...gacha} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
