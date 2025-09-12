export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your Next.js application! This simple page demonstrates modern web development with Tailwind CSS styling.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Built with
            </h2>
            <ul className="text-gray-600 space-y-1">
              <li>• Next.js 15</li>
              <li>• React 19</li>
              <li>• Tailwind CSS</li>
              <li>• TypeScript</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Features
            </h2>
            <ul className="text-gray-600 space-y-1">
              <li>• Responsive Design</li>
              <li>• Modern Styling</li>
              <li>• Fast Performance</li>
              <li>• SEO Optimized</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Ready to start building something amazing?
          </p>
        </div>
      </div>
    </main>
  )
}