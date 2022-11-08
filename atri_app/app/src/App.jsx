import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Project from "./pages/Project.jsx";
import EventLog from "./pages/Event_log.jsx";
import Community from "./pages/Community.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/new" element={<New />} />
<Route path="/project" element={<Project />} />
<Route path="/event_log" element={<EventLog />} />
<Route path="/community" element={<Community />} />
    </Routes>
  );
}
