import { Code, Globe, Palette, Shield } from 'lucide-react'

const services = [
  {
    title: 'Développement d\'applications',
    description: 'Custom application development tailored to your business needs',
    icon: Code,
  },
  {
    title: 'Création de sites internet',
    description: 'Professional website development with modern technologies',
    icon: Globe,
  },
  {
    title: 'Conception de logos et visuels',
    description: 'Creative design solutions for your brand identity',
    icon: Palette,
  },
  {
    title: 'Hébergement web sécurisé',
    description: 'Secure and reliable web hosting solutions',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

