import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCount] = useState(0)

 return (
   <>
     <div className="clock">
       <div className="setters">
         <div className="break">
           <h4 id="break-label">Break Length</h4>
         </div>
         <div className="session">
           <h4 id="session-label">Session Length</h4>
         </div>
       </div>
     </div>
   </>
 )
}

export default App