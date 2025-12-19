import React from 'react'
import Hero from './component/hero'
import Timeline from './component/timeline'
import Navbar from './component/navbar'
import Why from './component/why'
import Score from './component/score'
import Perfect from './component/perfect-home'
import Secured from './component/secured'
import Everything from './component/everything'
import Faq from './component/faq'
import Cta from './component/cta'
import Footer from './component/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline />
      <Why />
      <Score />
      <Perfect />
      <Secured />
      <Everything />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

export default App