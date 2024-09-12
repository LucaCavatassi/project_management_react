import Sidebar from "./components/Sidebar.jsx"
import MainSection from "./components/MainSection.jsx"
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState();

  function handleChange(){
      setShowForm(true)
  }

  function handleFormSubmit(data) {
    console.log(data);
    setFormData(data)
  }

  return (
    <div className="pt-20 h-screen flex">
      <Sidebar onShow={handleChange} formData={formData}/>
      <MainSection onShow={handleChange} showForm={showForm} onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
