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
      setShowDetail(false);
      setShowForm(true);
  }

  function handleFormSubmit(data) {
    setAllProjects((prevProjects) => [...prevProjects, data]);
  }

  function handleDetail(data){
    setShowForm(false);
    setProjectDetail(data);
    setShowDetail(true);
  }

  function handleDeleteProject(title) {
    setAllProjects((prevProjects) => prevProjects.filter((project) => project.title !== title));
    setShowDetail(false); // Optionally close the detail view
  }

  function MainSection() {
    if (showDetail) {
      return <DetailSection projectDetail={projectDetail} onDelete={() => handleDeleteProject(projectDetail.title)}/>
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
