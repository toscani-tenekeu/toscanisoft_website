import { BookOpen, Moon, Languages, Lightbulb } from 'lucide-react'

const products = [
  {
    name: 'IntelliLearn',
    description: 'Smart learning platform for modern education',
    icon: BookOpen,
  },
  {
    name: 'Night Hoster',
    description: 'Reliable hosting solution for your applications',
    icon: Moon,
  },
  {
    name: 'Englify',
    description: 'Interactive English learning platform',
    icon: Languages,
  },
  {
    name: 'Conceptor',
    description: 'Innovative design and prototyping tool',
    icon: Lightbulb,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions for modern challenges</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0047AB] rounded-full flex items-center justify-center mr-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">{product.name}</h3>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <button className="mt-6 text-[#0047AB] font-semibold hover:text-[#1E3A8A] transition-colors">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

