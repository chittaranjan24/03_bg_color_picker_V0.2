
import './App.css'

import ChangeBg from './components/ChangeBg.jsx'

function App() {

  // const buttons = [

  // ];

  return (
    <>
      <div className="h-full bg-orange-50 p-3 m-5 rounded-full main">
        <ChangeBg color = 'red' buttonName = 'Red' />
        <ChangeBg color = 'green' buttonName = 'Green' />
        <ChangeBg color = 'blue' buttonName = 'Blue' />
        <ChangeBg color = 'olive' buttonName = 'Olive' />
        <ChangeBg color = 'gray' buttonName = 'Gray' />
        <ChangeBg color = 'yellow' buttonName = 'Yellow' nameColor='Black' />
        <ChangeBg color = 'pink' buttonName = 'Pink' nameColor='Black' />    
        <ChangeBg color = 'lavender' buttonName = 'Lavender' nameColor='Black' />    
        <ChangeBg color = 'white' buttonName = 'White' nameColor='Black' />    
        <ChangeBg color = 'black' buttonName = 'Black' />    
      </div>
    </>
  )
}

export default App
