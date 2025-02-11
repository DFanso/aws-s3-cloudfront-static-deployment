import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your Amazing Project
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            This is a boilerplate home page built with React and Tailwind CSS. 
            Customize it according to your needs.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get started
            </button>
            <button className="bg-transparent border border-purple-600 text-purple-400 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn more
            </button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <FeatureCard 
            icon="⚡"
            title="Lightning Fast"
            description="Experience blazing fast performance with our optimized solution."
          />
          <FeatureCard 
            icon="🔧"
            title="Modular Design"
            description="Built with modularity in mind for easy customization and scaling."
          />
          <FeatureCard 
            icon="🛡️"
            title="Secure by Default"
            description="Built-in security features to keep your application safe."
          />
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div 
      className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

export default App;
