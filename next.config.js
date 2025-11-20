/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // ローカル画像を使用するため、remotePatterns は不要
        // 必要に応じて外部画像ドメインを追加
        remotePatterns: [],
    },
};

module.exports = nextConfig;
