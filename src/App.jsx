import { useState } from 'react'
import './App.css'
import Payment from './components/Payment';
import { FaLock, FaBolt, FaMobileAlt } from 'react-icons/fa';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <img src={viteLogo} alt="Vite Logo" className="h-12 text-white" />
            <img src={reactLogo} alt="React Logo" className="h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold">PayFlow Demo</h1>
          <p className="text-lg mt-2">Experience seamless payment processing with modern React components and beautiful UI design</p>
        </div>
      </header>

      <main className="container mx-auto py-16">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Modern Payment Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaLock className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Secure Processing</h3>
              <p className="text-gray-600">End-to-end encryption ensures your payment data is always protected and secure.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaBolt className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Powered by Vite and React for instant load times and smooth interactions.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaMobileAlt className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Mobile Ready</h3>
              <p className="text-gray-600">Fully responsive design that works perfectly on all devices and screen sizes.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Try Our Payment Form</h2>
          <Payment />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">✨ This is a demo form - no real payments will be processed ✨</p>
          <div className="flex justify-center gap-8 mt-4">
            <div>
              <h4 className="text-lg font-bold">Technologies</h4>
              <ul className="text-sm">
                <li>React 18</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>Modern JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Learn More</h4>
              <ul className="text-sm">
                <li><a href="https://reactjs.org" className="text-blue-400">React Docs</a></li>
                <li><a href="https://vitejs.dev" className="text-blue-400">Vite Guide</a></li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-4">Built with ❤️ using modern web technologies</p>
        </div>
      </footer>
    </div>
  )
}

export default App
