import React, { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([{id: 1, title: 'Todo', description: 'Info', complete: false}]);
  return (
    <div className="App">
    </div>
  );
}

export default App;
