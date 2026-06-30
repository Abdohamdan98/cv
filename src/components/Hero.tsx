import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <header className="text-center space-y-2">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">عبدالرحمن حمدان عبدالله خليل</h1>
      <p className="text-xl text-gray-600">معلم تربية خاصة</p>
      <div className="flex justify-center gap-4 text-sm text-gray-500 pt-2">
        <span>abdulrahmanhamdan98@gmail.com</span>
        <span>|</span>
        <span>01125663891</span>
        <span>|</span>
        <a href="https://wa.me/00201125663891" className="flex items-center gap-1 text-green-600 hover:text-green-700">
          <MessageCircle className="w-4 h-4" />
          <span>واتساب</span>
        </a>
      </div>
    </header>
  );
}
