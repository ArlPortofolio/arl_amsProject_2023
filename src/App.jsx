import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/login/Login";
import { MainSidebar } from "./components/sidebar/Main_Sidebar";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<MainSidebar/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
