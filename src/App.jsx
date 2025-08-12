import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import WhatIsYoga from './components/WhatIsYoga/WhatIsYoga'

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhatIsYoga />
      {/* Add other components here as needed */}
    </main>
  )
}

export default App
