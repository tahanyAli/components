import React from "react";
import Link from "./Link";
import Route from "./Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
      <Link to='/accordion'>Go to Accordion</Link>
      <Link to='/dropdown'>Go to dropdown</Link>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
        
      </div>
    </div>
  )
}

export default App;
