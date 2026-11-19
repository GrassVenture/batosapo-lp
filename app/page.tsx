import Image from 'next/image';
import { MdDownload, MdEmail, MdMenuBook } from 'react-icons/md';

// 導入実績の店舗データ。
// photo があれば店舗写真、photo が無く logo があればロゴ画像、どちらも無ければ仮プレースホルダーを表示する。
// comment があれば画像・店名の下に「お店の声」として表示する。
const stores: { name: string; logo?: string; photo?: string; comment?: string }[] = [
  {
    name: 'BOOKOFF 仙台クリスロード店様',
    logo: '/images/bookoff-logo.png',
    // comment は仮テキスト。実際のインタビューコメントに差し替える。
    comment:
      '導入してからは、大会の組み合わせや順位の集計が自動でできるようになって、運営の負担がぐっと減りました。おかげでスタッフがお客様の対応に集中できています。',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: 'url(/images/background.svg)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundColor: '#1e2a78' }}>
      {/* ヘッダー / ナビゲーション */}
      <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.svg" alt="Logo" width={136} height={32} className="h-8 w-auto" />
          </div>
          <a href="mailto:batosapo.info@gmail.com" className="bg-white text-gray-900 px-6 py-2 rounded-full text-base font-semibold border-2 border-gray-300 hover:border-gray-400 transition inline-flex items-center gap-2">
            <MdEmail className="text-xl" />
            お問い合わせ
          </a>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={545} height={129} className="w-full max-w-2xl h-auto" priority />
          </div>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            スイスドロー形式の大会運営をもっと手軽に
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            <a href="/documents/brochure.pdf" download="バトサポ-ご紹介資料.pdf" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
              <MdDownload className="text-2xl" />
              資料ダウンロード
            </a>
            <a href="mailto:batosapo.info@gmail.com" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition inline-flex items-center gap-2">
              <MdEmail className="text-2xl" />
              お問い合わせ
            </a>
            <a href="/documents/admin-manual.pdf" download="バトサポ-基本操作マニュアル.pdf" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition inline-flex items-center gap-2">
              <MdMenuBook className="text-2xl" />
              操作マニュアル
            </a>
          </div>
        </div>
      </section>

      {/* 導入実績セクション */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">ご利用者様の声</h2>
          </div>
          {/* 1 店舗のときは中央寄せ、複数のときはグリッド表示に切り替わる。 */}
          <div
            className={
              stores.length === 1
                ? 'flex justify-center'
                : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
            }
          >
            {stores.map((store) => (
              <div
                key={store.name}
                className={`flex flex-col items-center text-center ${
                  stores.length === 1 ? 'w-full max-w-md' : ''
                }`}
              >
                {store.photo ? (
                  // 店舗写真。縦長写真でも間延びしないよう、16:9 の横長枠に object-cover で収める。
                  <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: '16 / 9' }}>
                    <Image
                      src={store.photo}
                      alt={store.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover"
                    />
                  </div>
                ) : store.logo ? (
                  // ロゴ枠。下地をロゴの地色 (#eef3fa) に合わせて四角い境目が出ないようにする。
                  // ロゴは横長なので上下余白は控えめにし、枠が縦長にならないようにする。
                  <div className="w-full rounded-xl shadow-lg px-8 py-5" style={{ backgroundColor: '#eef3fa' }}>
                    <Image
                      src={store.logo}
                      alt={store.name}
                      width={1200}
                      height={356}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : (
                  // 画像が未確定のため、仮ロゴと分かるプレースホルダーを点線枠で表示する。
                  <div
                    className="flex items-center justify-center text-gray-300 border-2 border-dashed border-white/40 rounded-xl w-full"
                    style={{ aspectRatio: '1200 / 355' }}
                  >
                    <span className="text-sm font-semibold">ロゴ（仮）</span>
                  </div>
                )}
                {/* 店名はロゴカードの下に表示する。 */}
                <p className="mt-4 text-base sm:text-lg font-semibold text-white">{store.name}</p>
                {/* コメントがあれば、店名の下に引用ブロックとして表示する。
                    左罫線を残しつつ、引用符は罫線の内側に置いてぶつからないようにする。 */}
                {store.comment && (
                  <blockquote className="relative mt-4 max-w-md border-l-2 border-white/30 pl-6 pr-6 text-left">
                    {/* 装飾用の開き引用符。罫線の右側 (本文カラム内) の左上に薄く重ねる。読み上げから外す。 */}
                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-0 select-none font-serif text-4xl leading-none text-white/25"
                    >
                      &ldquo;
                    </span>
                    <p className="pt-3 text-sm sm:text-base italic text-white/85 leading-relaxed">
                      {store.comment}
                    </p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
