import React from "react";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
const App = () => {
  return (
    <div>
      <Navbar />
      <Shop />
      <Counter />
    </div>
  );
};

export default App;
