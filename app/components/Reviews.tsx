const reviews = [
  { message: "This AI caption generator is amazing! It saved me so much time.", email: "john@example.com" },
  { message: "I'm impressed by the accuracy of the captions. Highly recommended!", email: "sarah@example.com" },
  {
    message: "Great tool for content creators. It's become an essential part of my workflow.",
    email: "mike@example.com",
  },
  {
    message: "The captions are creative and engaging. It's like having a writing assistant.",
    email: "emily@example.com",
  },
  { message: "Easy to use and produces high-quality results. Love it!", email: "david@example.com" },
  { message: "This tool has significantly improved my social media content. Thank you!", email: "lisa@example.com" },
]

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-300 mb-4">&ldquo;{review.message}&rdquo;</p>
              <p className="text-purple-400 text-sm">{review.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

