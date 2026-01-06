import Nav from "./components/Nav"
import Home from "./components/Home"

function App() {
  return (
    <div className=' pl-1 pr-1 bg-white text-black dark:bg-black dark:text-white min-h-screen'>
    <Nav></Nav>
<div className="pointer-events-none fixed bottom-0 left-0 right-0 h-10 z-50 backdrop-blur-sm"/>
 <Home/>
</div>

  )
}
export default App
