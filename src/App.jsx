import Hero from "./components/Hero"
import Demo from "./components/Demo"

import './App.css'

const App = () => {
    return (
        <main className="">
            <div className="main bg_color">
                <div className="background_gradient" />
            </div>
            <div className="app">
                <Hero />
                <Demo />
            </div>
        </main>
    )
}

export default App