const certs = [
  { name: 'ABAT (فني تحليل سلوك تطبيقي)', detail: '40 ساعة تدريبية', ref: 'شهادة رقم: 24797', image: '/certs/abat-40.jpg' },
  { name: 'ABAT (مجلس اعتماد تحليل السلوك التطبيقي)', detail: 'Qualified Credentialing Board', ref: 'شهادة رقم: 20198', image: '/certs/abat-qaba.jpg' },
  { name: 'دورة إعداد كوادر في تأهيل اضطرابات اللغة والتخاطب', detail: '300 ساعة', ref: '', image: '/certs/speech-training.jpg' },
  { name: 'MICIT (الشهادة الدولية في تقنية المعلومات)', detail: '', ref: 'كود التحقق: 2974914920081316', image: '/certs/micit.jpg' },
  { name: 'TOT (دورة تدريب المدربين بشكل احترافي)', detail: '', ref: '', image: '/certs/tot.jpg' },
];

export default function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">الدورات والشهادات</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((cert, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-sm">
            {cert.image && (
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="w-full h-40 object-cover rounded-md mb-3 border border-gray-200" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            )}
            <h4 className="font-semibold text-gray-800">{cert.name}</h4>
            {cert.detail && <p className="text-gray-600">{cert.detail}</p>}
            {cert.ref && <p className="text-gray-500 font-mono text-xs mt-1">{cert.ref}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
