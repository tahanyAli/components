import React from 'react'
import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
    function handleClick(){
        console.log("click");
    }
  return (
    <div>
      <div>
      <Button success rounded outline onClick={handleClick} className="mb-5">
      <GoBell  />
      Click Me!
      </Button>
      </div>
      <div>
      <Button danger outline onMouseEnter={handleClick}>
      <GoCloudDownload />
      But Now!</Button>
      </div>
      <div>
      <Button secondary outline  onMouseLeave={handleClick}>
      <GoDatabase />
      But Now!</Button>
      </div>
      <div>
      <Button warning>See Detail!</Button>
      </div>
      <div>
      <Button primary rounded>Hide Adds!</Button>
      </div>
    </div>
  )
}

export default App;
