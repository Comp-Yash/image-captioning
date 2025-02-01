"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is AI image captioning?",
    answer:
      "AI image captioning is the process of automatically generating descriptive text for images using artificial intelligence and machine learning algorithms.",
  },
  {
    question: "How accurate are the generated captions?",
    answer:
      "The accuracy of generated captions can vary, but our AI model is trained on a vast dataset and continuously improved to provide high-quality, relevant captions for most images.",
  },
  {
    question: "Can I edit the generated captions?",
    answer: "Yes, you can edit the generated captions to fine-tune them according to your needs or preferences.",
  },
  {
    question: "What image formats are supported?",
    answer: "Our system supports common image formats including JPEG, PNG, and GIF.",
  },
  {
    question: "Is there a limit to the number of images I can caption?",
    answer:
      "The number of images you can caption may depend on your subscription plan. Please check our pricing page for more details.",
  },
  {
    question: "How long does it take to generate a caption?",
    answer:
      "Caption generation typically takes a few seconds, but may vary depending on the complexity of the image and current system load.",
  },
  {
    question: "Can I use the generated captions commercially?",
    answer:
      "Yes, you can use the generated captions for commercial purposes. However, please review our terms of service for any specific restrictions.",
  },
  {
    question: "Do you store the images I upload?",
    answer:
      "We temporarily store images for processing, but they are deleted shortly after. We do not retain or use your images for any other purposes.",
  },
  {
    question: "Is the AI model continuously learning from user uploads?",
    answer:
      "Our AI model is regularly updated and improved, but we do not use user-uploaded images for training without explicit consent.",
  },
  {
    question: "Can I integrate this captioning service into my own application?",
    answer:
      "Yes, we offer API access for integrating our image captioning service into your applications. Please contact our sales team for more information.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-700 rounded-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-purple-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-600 rounded-lg">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

