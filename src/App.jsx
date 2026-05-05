import Navigation        from './components/sections/Navigation'
import Hero               from './components/sections/Hero'
import TrustBar           from './components/sections/TrustBar'
import TwoPlatforms       from './components/sections/TwoPlatforms'
import CreateEditLocalize from './components/sections/CreateEditLocalize'
import DeployAgents       from './components/sections/DeployAgents'
import BuildAPIs          from './components/sections/BuildAPIs'
import GlobalImpact       from './components/sections/GlobalImpact'
import Research           from './components/sections/Research'
import Safety             from './components/sections/Safety'
import LatestUpdates      from './components/sections/LatestUpdates'
import FinalCTA           from './components/sections/FinalCTA'
import Footer             from './components/sections/Footer'
import './App.css'

export default function App() {
  return (
    <div style={{ background: '#fdfcfc' }}>
      <Navigation />
      <Hero />
      <TrustBar />
      <TwoPlatforms />
      <CreateEditLocalize />
      <DeployAgents />
      <BuildAPIs />
      <GlobalImpact />
      <Research />
      <Safety />
      <LatestUpdates />
      <FinalCTA />
      <Footer />
    </div>
  )
}
