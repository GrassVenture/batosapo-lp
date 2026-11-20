import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Vercel のプレビューデプロイには、コメント用ツールバー（vercel.live）のスクリプトが差し込まれる。
// CSP を付けるとそれが止まるので、プレビューでは CSP だけ外す。本番とローカルには付く。
const isVercelPreview = process.env.VERCEL_ENV === "preview";

// ページは静的に生成しているため nonce を使えない。
// Next.js が埋め込むインラインスクリプトと、style 属性のために 'unsafe-inline' を許可している。
// 外部のスクリプト・画像・フォントを読み込むようにしたときは、ここに許可を足す。
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

// HSTS（Strict-Transport-Security）は Vercel が付けるので、ここでは設定しない。
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ...(isVercelPreview ? [] : [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
