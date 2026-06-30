import { MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="text-center pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">للتواصل</h2>
      <div className="flex justify-center gap-4">
        <a href="mailto:abdulrahmanhamdan98@gmail.com" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
          إرسال بريد إلكتروني
        </a>
        <a href="https://wa.me/00201125663891" className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          واتساب
        </a>
      </div>
    </section>
  );
}
