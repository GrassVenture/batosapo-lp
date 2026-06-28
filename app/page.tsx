import Image from 'next/image';
import { MdDownload, MdEmail } from 'react-icons/md';

// 導入実績の店舗データ。logo があればロゴ画像、無ければ店名テキストを表示する。
const stores: { name: string; logo?: string }[] = [
  { name: '〇〇カードショップ' }, // 仮データ。確定後に実店舗名・ロゴへ差し替える。
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ backgroundImage: 'url(/images/background.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={545} height={129} className="w-full max-w-2xl h-auto" priority />
          </div>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            スイスドロー形式の大会運営をもっと手軽に
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/documents/brochure.pdf" download="バトサポ-ご紹介資料.pdf" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
              <MdDownload className="text-2xl" />
              資料ダウンロード
            </a>
            <a href="mailto:batosapo.info@gmail.com" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition inline-flex items-center gap-2">
              <MdEmail className="text-2xl" />
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* 導入実績セクション */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">導入実績</h2>
            <p className="text-lg text-gray-600">カードショップにご利用いただいています</p>
          </div>
          {/* 1 店舗のときは中央に大きめカード 1 枚、複数のときはグリッド表示に切り替わる。 */}
          <div
            className={
              stores.length === 1
                ? 'flex justify-center'
                : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
            }
          >
            {stores.map((store) => (
              <div
                key={store.name}
                className={`bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center ${
                  stores.length === 1 ? 'w-full max-w-md px-10 py-12' : 'px-6 py-8'
                }`}
              >
                <span className="text-sm font-semibold text-blue-600 mb-4">導入店舗</span>
                {store.logo ? (
                  <Image
                    src={store.logo}
                    alt={store.name}
                    width={240}
                    height={120}
                    className="h-auto w-auto max-h-24 object-contain"
                  />
                ) : (
                  <span
                    className={`font-bold text-gray-900 ${
                      stores.length === 1 ? 'text-2xl sm:text-3xl' : 'text-lg'
                    }`}
                  >
                    {store.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
