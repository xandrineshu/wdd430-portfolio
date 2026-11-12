export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">. ݁₊ ⊹ My Portfolio ⊹ ₊ ݁.</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am a software development student learning full-stack engineering, Next.js, and React.
          Here are some of my recent projects:
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto px-4">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl bg-[#F4F9F5] border border-[#D8E8DD] border-l-4 border-l-[#81A88C] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>˚˖𓍢ִ໋`🍵</span> CSE341 Books API
            </h3>
            <p className="text-gray-600 mb-4">A RESTful Node.js and Express API connected to MongoDB Atlas with secure routing and validation.</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">Node.js</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">Express</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">MongoDB</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">JavaScript</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl bg-[#F4F9F5] border border-[#D8E8DD] border-l-4 border-l-[#81A88C] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>˚˖𓍢ִ໋`🍀</span> WDD430 Portfolio
            </h3>
            <p className="text-gray-600 mb-4">A modern full-stack portfolio application built with Next.js App Router, TypeScript, and Tailwind CSS.</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">Next.js</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">React</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">TypeScript</span>
            <span className="px-3 py-1 bg-white text-gray-700 border border-[#D8E8DD] rounded-full text-xs font-medium shadow-sm">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </main>
  );
}