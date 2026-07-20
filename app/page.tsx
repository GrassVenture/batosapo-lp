import Image from 'next/image';
import { MdDownload, MdEmail, MdMenuBook } from 'react-icons/md';

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
    </div>
  );
}
