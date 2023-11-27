import './components/index.css'
import "./App.css"
import Content from '../feature-content'
import FeatureCard from "./components/FeatureCard"
import Feature from "./components/Feature"
import { nanoid } from "nanoid"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"

function App() {

  const {cards, pointers} = Content

  const cardComponents = cards.map((card) => {
    return <FeatureCard
            key={nanoid()}
            heading={card.heading}
            paragraph={card.paragraph}
            image={card.image}
            />
  })

  const pointerComponents = pointers.map((point) => {
    return <Feature key={nanoid()} icon={point.icon} point={point.point} heading={point.heading}/>
  })

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/about" Component={About}/>
    </Routes>
      {cardComponents}
      {pointerComponents}
    </BrowserRouter>
  )
}

export default App
