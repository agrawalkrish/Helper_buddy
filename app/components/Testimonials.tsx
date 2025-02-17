import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      quote: "CleanCo transformed my home. I couldn't be happier with their service!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jane Smith",
      quote: "Professional, thorough, and friendly. I highly recommend CleanCo.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Mike Johnson",
      quote: "Our office has never looked better. CleanCo is our go-to cleaning service.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

