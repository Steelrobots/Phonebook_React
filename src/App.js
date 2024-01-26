import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneBox from "./components/PhoneBox";
import PhoneAdd from "./components/PhoneAdd";
import './App.css'
import Avatar from "./components/Avatar";

export default function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<PhoneBox />} />
        <Route path="add" element={<PhoneAdd />} />
        <Route path="avatar" element={<Avatar/>}/>
      </Routes>
    </Router>
  </>
  );
}