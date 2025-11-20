# アーキテクチャドキュメント

## 概要

Orikuji Cloneは、Next.js 14のApp Routerを使用したモダンなWebアプリケーションです。型安全性、保守性、拡張性を重視した設計になっています。

## 技術スタック

### フロントエンド
- **Next.js 14**: React フレームワーク（App Router使用）
- **TypeScript**: 型安全性の確保
- **Tailwind CSS**: ユーティリティファーストのスタイリング
- **Framer Motion**: アニメーションライブラリ

### 開発ツール
- **ESLint**: コード品質の維持
- **PostCSS**: CSS処理
- **Autoprefixer**: ブラウザ互換性

## ディレクトリ構造

```
orikuji-clone/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
│
├── components/            # Reactコンポーネント
│   ├── gacha/            # ガチャ関連
│   ├── home/             # ホーム関連
│   └── layout/           # レイアウト関連
│
├── data/                 # データレイヤー
│   └── gacha-list.ts     # ガチャデータ
│
├── lib/                  # ユーティリティ
│   ├── constants.ts      # 定数定義
│   └── utils.ts          # ヘルパー関数
│
├── types/                # 型定義
│   ├── gacha.ts          # ガチャ関連の型
│   └── index.ts          # 型のエクスポート
│
└── public/               # 静的ファイル
```

## 設計原則

### 1. 関心の分離 (Separation of Concerns)

- **プレゼンテーション層**: `components/` - UIコンポーネント
- **データ層**: `data/` - ビジネスデータ
- **ロジック層**: `lib/` - ユーティリティ関数
- **型定義層**: `types/` - TypeScript型定義

### 2. 型安全性

全てのコンポーネントとデータに明示的な型定義を適用:

```typescript
// 型定義の例
interface GachaCard {
    id: number;
    title: string;
    price: number;
    // ...
}
```

### 3. 再利用性

- 共通の型定義を`types/`に集約
- ユーティリティ関数を`lib/utils.ts`に集約
- 定数を`lib/constants.ts`に集約

### 4. コンポーネント設計

#### コンポーネントの分類

1. **レイアウトコンポーネント** (`components/layout/`)
   - Header, Footer など
   - サイト全体で共通のUI

2. **機能コンポーネント** (`components/gacha/`, `components/home/`)
   - 特定の機能に特化したコンポーネント
   - GachaCard, Hero など

#### コンポーネントの責務

- **単一責任の原則**: 各コンポーネントは1つの責務のみを持つ
- **Props型定義**: 全てのPropsに型を定義
- **JSDocコメント**: 複雑なロジックにはコメントを追加

## データフロー

```
data/gacha-list.ts (データソース)
        ↓
app/page.tsx (ページコンポーネント)
        ↓
components/gacha/GachaCard.tsx (表示コンポーネント)
        ↓
components/gacha/GachaResultModal.tsx (モーダル)
```

### データの流れ

1. **データ定義**: `data/gacha-list.ts`でガチャデータを定義
2. **ページでインポート**: `app/page.tsx`でデータをインポート
3. **コンポーネントに渡す**: Propsとして子コンポーネントに渡す
4. **表示**: 各コンポーネントで表示

## 状態管理

現在は以下の状態管理を使用:

- **ローカル状態**: `useState`でコンポーネント内の状態を管理
- **副作用**: `useEffect`でタイマーなどの副作用を管理

### 将来的な拡張

大規模化した場合は以下を検討:

- **グローバル状態**: Zustand, Jotai などの状態管理ライブラリ
- **サーバー状態**: React Query, SWR などのデータフェッチライブラリ

## スタイリング

### Tailwind CSS

- ユーティリティクラスを使用
- カスタムカラーを`tailwind.config.ts`で定義
- `cn()`関数でクラスをマージ

### カスタムカラー

```typescript
colors: {
    primary: "#FFD700",    // ゴールド
    background: "#0A0A0A", // ダークグレー
    surface: "#1A1A1A",    // ライトグレー
}
```

## パフォーマンス最適化

### 画像最適化

- Next.js の `Image` コンポーネントを使用
- 自動的にWebP変換、遅延読み込み

### コード分割

- Next.js の自動コード分割を活用
- 動的インポートで必要に応じてコンポーネントを読み込み

## セキュリティ

### XSS対策

- Reactの自動エスケープを活用
- `dangerouslySetInnerHTML`は使用しない

### 環境変数

- 機密情報は`.env.local`に保存
- `.env.local.example`でテンプレートを提供

## テスト戦略（将来的な実装）

### 単体テスト
- Jest + React Testing Library
- コンポーネントの動作確認

### E2Eテスト
- Playwright
- ユーザーフローの確認

## デプロイ

### Vercel（推奨）

```bash
# Vercelにデプロイ
vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- 自前サーバー（Node.js環境）

## 今後の拡張予定

1. **認証機能**: NextAuth.js を使用したユーザー認証
2. **決済機能**: Stripe などの決済システム統合
3. **データベース**: Prisma + PostgreSQL でデータ永続化
4. **API実装**: Next.js API Routes でバックエンド機能
5. **管理画面**: ガチャ管理、ユーザー管理機能

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
