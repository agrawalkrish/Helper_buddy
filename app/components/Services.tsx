import { CleaningService } from "./CleaningService"

export function Services() {
  const services = [
    { title: "Home Cleaning", description: "Comprehensive cleaning for your entire home" },
    { title: "Office Cleaning", description: "Professional cleaning for your workspace" },
    { title: "Deep Cleaning", description: "Thorough cleaning for those hard-to-reach areas" },
    { title: "Move-in/Move-out", description: "Get your new space ready or leave your old one spotless" },
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <CleaningService key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

