import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import WhatIsYoga from './components/WhatIsYoga/WhatIsYoga'
import Services from './components/Services/Services'
import WhatStudentsThink from './components/WhatStudentsThink/WhatStudentsThink'
import ContactSection from './components/ContactSection/ContactSection'

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhatIsYoga />
      <Services />  
      <WhatStudentsThink />
      <ContactSection />
      {/* Add other components here as needed */}
    </main>
  )
}

export default App
