import AjaxToReact from "./pages/AjaxtoReact";
import StudentList from "./pages/StudentList";
import './App.css'

  function App() {
    let condition = 2
    return condition === 1?<AjaxToReact />: <StudentList />
      
  }

export default App
