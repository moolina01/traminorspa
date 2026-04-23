import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Purpose from "@/components/Purpose"
import Services from "@/components/Services"
import Providers from "@/components/Providers"
import Certifications from "@/components/Certifications"
import Fleet from "@/components/Fleet"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Services />
        <Providers />
        {/* <Certifications /> */}
        {/* <Fleet /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
