import Clock from "./components/Clock"
import interstellar from './assets/interstellar.mp4'
function App() {

  return (
    <div className="relative w-full h-screen">
      <Background />
      <Clock />
     </div>
  )
}


function Background() {
  

  return (
    <>
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover"
          src={interstellar}
           controls loop muted  poster>
          Your Browser doesn't support video tag
      </video>
      </div>
      
    </>

)
}
export default App
