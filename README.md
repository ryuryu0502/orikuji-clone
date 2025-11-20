# Orikuji Clone

オンラインガチャサイト「Orikuji.com」のクローンプロジェクトです。Next.js、TypeScript、Tailwind CSSを使用して構築されています。

## 🚀 特徴

- **モダンなUI/UX**: Framer Motionを使用したスムーズなアニメーション
- **型安全**: TypeScriptによる厳格な型チェック
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **保守性の高いコード**: 型定義の分離、ユーティリティ関数の活用

## 📁 プロジェクト構造

```
orikuji-clone/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── gacha/            # ガチャ関連コンポーネント
│   │   ├── GachaCard.tsx
│   │   └── GachaResultModal.tsx
│   ├── home/             # ホーム関連コンポーネント
│   │   └── Hero.tsx
│   └── layout/           # レイアウトコンポーネント
│       ├── Header.tsx
│       └── Footer.tsx
├── data/                 # データファイル
│   └── gacha-list.ts     # ガチャデータ
├── lib/                  # ユーティリティ
│   ├── constants.ts      # 定数定義
│   └── utils.ts          # ユーティリティ関数
├── types/                # 型定義
│   ├── gacha.ts          # ガチャ関連の型
│   └── index.ts          # 型のエクスポート
└── public/               # 静的ファイル
    └── images/           # 画像ファイル
```

## 🛠️ セットアップ

### 前提条件

- Node.js 18.x以上
- npm または yarn

### インストール

1. リポジトリをクローン（または`install.bat`を実行）:

```bash
npm install
```

2. 環境変数の設定（オプション）:

```bash
cp .env.local.example .env.local
```

3. 開発サーバーの起動（または`start_app.bat`を実行）:

```bash
npm run dev
```

4. ブラウザで開く:

```
http://localhost:3000
```

## 📝 開発ガイド

### 新しいガチャを追加する

`data/gacha-list.ts`を編集して、新しいガチャオブジェクトを追加します:

```typescript
{
    id: 5,
    title: "【新商品】タイトル",
    price: 1000,
    image: "画像URL",
    remaining: 100,
    total: 100,
    status: "active",
    prizes: [
        { name: "カード名", image: "画像URL", rarity: "UR" }
    ],
}
```

### 型定義の使用

共通の型定義は`types/`ディレクトリから参照できます:

```typescript
import type { GachaCard, CardResult } from '@/types';
```

### ユーティリティ関数

`lib/utils.ts`には以下の便利な関数があります:

- `cn()`: Tailwindクラスのマージ
- `formatPrice()`: 価格のフォーマット
- `calculateProgress()`: 進捗率の計算
- `getRandomElement()`: ランダム要素の取得

## 🧪 ビルドとテスト

### プロダクションビルド

```bash
npm run build
```

### Lintチェック

```bash
npm run lint
```

## 🎨 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **フォント**: Inter, Noto Sans JP

## 📄 ライセンス

このプロジェクトは学習目的で作成されています。

## 🤝 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。
