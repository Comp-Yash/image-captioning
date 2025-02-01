import { Brain } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Service</h2>
            <p className="text-gray-300 text-lg">
              Generate AI-based captions for your images quickly and efficiently. Our cutting-edge technology analyzes
              your images and creates engaging, relevant captions in seconds.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center animate-float">
              <Brain size={64} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

