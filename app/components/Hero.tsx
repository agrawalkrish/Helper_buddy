import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Clean home"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Spotless Spaces, Happy Faces</h1>
        <p className="text-xl md:text-2xl mb-8">Professional cleaning services for your home and office</p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>
    </section>
  )
}

