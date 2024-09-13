import Sidebar from "./components/Sidebar.jsx"
import MainSection from "./components/MainSection.jsx"
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [showDetail, setShowDetail] = useStae(false);


  function handleChange(){
      setShowForm(true)
  }

  function handleFormSubmit(data) {
    setAllProjects((prevProjects) => [...prevProjects, data]);
  }

  function handleDetail(data){
    console.log(data);
    
  }

  return (
    <div className="pt-20 h-screen flex">
      <Sidebar onShow={handleChange} formData={allProjects} onNameClick={handleDetail}/>
      <MainSection onShow={handleChange} showForm={showForm} onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
