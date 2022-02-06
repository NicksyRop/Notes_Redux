import React from "react";

import NewNnote from "./components/NewNote";
import Notes from "./components/Notes";
import Visibility from "./components/Visibility";

const App = () => {
  return (
    <div>
      <NewNnote />
      <Visibility />
      <Notes />
    </div>
  );
};

export default App;
