import React from 'react';
import { Land, Hero, Navbar, Features, CTA, Pricing, ContactUs, Footer} from './components';

const Page = () => {
  return (
<>
<main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Land />
      <Features />
      <CTA />
      <Pricing />
      <ContactUs />
      <Footer />
      </div>
    </main>     
      
   </>
  )
}

export default Page