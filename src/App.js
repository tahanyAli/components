import React, { useState } from "react";
// import Button from './Button';
// import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Dropdown from "./Dropdown";
function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className="flex">
      {/* <div>
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
      </div> */}
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}

export default App;
