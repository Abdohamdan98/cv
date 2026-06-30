const skills = [
  'الأساليب التعليمية الحديثة',
  'تحليل السلوك التطبيقي (ABA)',
  'دعم اللغة والتخاطب',
  'MS Word, Excel, PowerPoint',
  'نظم تخطيط موارد المؤسسات (ERP)',
  'اللغة العربية (الأم)',
  'اللغة الإنجليزية (جيد)',
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">المهارات</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
