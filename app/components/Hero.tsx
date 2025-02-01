import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
      <div className="text-center space-y-8 p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          AI Image Caption Generator
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Transform your images into words with the power of AI
        </p>
        <Button
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          onClick={() => document.getElementById("image-upload")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start Captioning
        </Button>
      </div>
    </section>
  )
}

