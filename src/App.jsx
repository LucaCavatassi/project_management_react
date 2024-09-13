import Sidebar from "./components/Sidebar.jsx"
import FormSection from "./components/FormSection.jsx"
import { useState } from "react";
import DetailSection from "./components/DetailSection.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const [allProjects, setAllProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState();

  function handleChange(){
      setShowForm(true)
  }

  function handleFormSubmit(data) {
    setAllProjects((prevProjects) => [...prevProjects, data]);
  }

  function handleDetail(data){
    console.log(data);
    setShowDetail(true);
    setProjectDetail(data);
    
  }

  function MainSection() {
    if (showDetail) {
      return <DetailSection/>
    } else {
      return <FormSection onShow={handleChange} showForm={showForm} onFormSubmit={handleFormSubmit}/>
    }
  }

  return (
    <div className="pt-20 h-screen flex">
      <Sidebar onShow={handleChange} formData={allProjects} onNameClick={handleDetail}/>
      <MainSection/>
    </div>
  );
}

export default App;
