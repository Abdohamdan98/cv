const experiences = [
  { role: 'معلم تربية خاصة', center: 'مركز التأهيل لذوي الاحتياجات الخاصة' },
  { role: 'معلم تربية خاصة', center: 'مدرسة هاي وورلد' },
  { role: 'أخصائي صعوبات تعلم', center: 'مركز التربية الخاصة والتنمية البشرية' },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">الخبرات العملية</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="border-r-2 border-gray-200 pr-4">
            <h3 className="font-semibold text-gray-900">{exp.role}</h3>
            <p className="text-gray-600">{exp.center}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
