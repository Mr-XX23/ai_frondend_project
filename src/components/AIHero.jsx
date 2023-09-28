import { Footer, Dashnavbar} from '.';
import { Demo } from '.';



const Hero = () => {
  return (
    <>
    <Dashnavbar />
    <div className="app">
      {/* // Heading -NavBar */}
      <section className="w-full flex justify-center items-center flex-col">
        
      {/* Hero Section */}
        <h1 className='head_text'>
            Summarize Articles With <br className="max-md:hidden" />
            <span className="misx_gradient"> Open AI GPT-4</span>
        </h1>
        <h2 className="desc lg:mx-[200px]">
            Simplfy your reading with summize, an open-source articel summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
      </section>
      <Demo />
    </div>
    <Footer/>
    </>
  )
}

export default Hero