const education = [
  { degree: 'دبلوم عام - قسم اضطرابات اللغة والتخاطب', year: '2024 - 2025' },
  { degree: 'دبلوم مهني في التربية - تكنولوجيا التعليم', year: '2021 - 2022' },
  { degree: 'ليسانس آداب وتربية - قسم اللغة العربية', year: '2016 - 2020' },
];

export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">التعليم</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">{edu.degree}</span>
            <span className="text-sm text-gray-500">{edu.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
