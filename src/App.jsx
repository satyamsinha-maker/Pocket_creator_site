import Navigation       from './components/sections/Navigation'
import Hero              from './components/sections/Hero'
import CompleteJourney   from './components/sections/CompleteJourney'
import TrustBand         from './components/sections/TrustBand'
import Act1Write         from './components/sections/Act1Write'
import Act2Produce       from './components/sections/Act2Produce'
import Act3Earn          from './components/sections/Act3Earn'
import WriterStories     from './components/sections/WriterStories'
import SampleStories     from './components/sections/SampleStories'
import FinalCTA          from './components/sections/FinalCTA'
import Footer            from './components/sections/Footer'
import './App.css'

export default function App() {
  return (
    <div style={{ background: '#faf6ed' }}>
      <Navigation />
      <Hero />
      <CompleteJourney />
      <TrustBand />
      <Act1Write />
      <Act2Produce />
      <Act3Earn />
      <WriterStories />
      <SampleStories />
      <FinalCTA />
      <Footer />
    </div>
  )
}
