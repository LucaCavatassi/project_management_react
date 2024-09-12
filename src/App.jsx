import Sidebar from "./components/Sidebar.jsx"
import MainSection from "./components/MainSection.jsx"
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false)

  function handleChange(){
      setShowForm(true)
  }

  return (
    <div className="pt-20 h-screen flex">
      <Sidebar onShow={handleChange}/>
      <MainSection onShow={handleChange} showForm={showForm}/>
    </div>
  );
}

export default App;
