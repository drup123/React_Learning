import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Component'

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 text-white text-center text-2xl rounded mb-4">
        Tailwind Test And props intro
      </h1>
      <Comp Name = "Iron man" src="https://www.shutterstock.com/shutterstock/photos/2272933395/display_1500/stock-vector-iron-man-mask-armour-special-gun-body-metal-weapon-power-army-warrior-bot-d-design-logo-art-2272933395.jpg"/>
      <Comp Name = "Captain America" src="https://www.shutterstock.com/shutterstock/photos/2290235547/display_1500/stock-vector-captain-america-art-design-vector-template-helmet-initial-a-strong-warrior-man-person-hero-2290235547.jpg"/>
      
    </>
  )
}

export default App
