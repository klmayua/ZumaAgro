"use client";

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-corporate-navy">
          Our Strategic Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Secure Production",
              description: "Military partnership ensures land security and operational stability",
              icon: "🔒"
            },
            {
              title: "End-to-End Control",
              description: "Integrated supply chain from production to export",
              icon: "🔗"
            },
            {
              title: "Export Excellence",
              description: "GCC market access with full compliance certifications",
              icon: "🌍"
            },
            {
              title: "Sustainable Practices",
              description: "Environmentally responsible operations with measurable impact",
              icon: "🌱"
            },
            {
              title: "Community Impact",
              description: "Creating employment and economic opportunities in host communities",
              icon: "👥"
            },
            {
              title: "Investor Ready",
              description: "Transparent governance and financial structures",
              icon: "📈"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sun-gold"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-corporate-navy">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}