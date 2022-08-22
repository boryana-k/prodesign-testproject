import About from './components/AboutSection/About';
import Casino from './components/CasinoSection/Casino';
import CTA from './components/CTA/CTA';
import Events from './components/EventsSection/Events';
import Hero from './components/HeroSection/Hero';
import Instagram from './components/InstagramSection/Instagram';
import Services from './components/ServicesSection/Services';
import Subscribe from './components/SubscribeSection/Subscribe';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Casino />
      <CTA />
      <Events />
      <Services />
      <Instagram />
      <Subscribe />
    </div>
  );
}

export default App;
