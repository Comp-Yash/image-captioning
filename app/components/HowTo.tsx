import { Upload, Wand2, FileText } from "lucide-react"

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-purple-500" />,
    title: "Upload Your Image",
    description: "Get your image and upload or drop it in the image section.",
  },
  {
    icon: <Wand2 className="w-12 h-12 text-purple-500" />,
    title: "Generate Caption",
    description: "Click on the 'Generate Caption' button to process your image.",
  },
  {
    icon: <FileText className="w-12 h-12 text-purple-500" />,
    title: "View Results",
    description: "See the generated caption text below your uploaded image.",
  },
]

export default function HowTo() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">How to Captionize Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

