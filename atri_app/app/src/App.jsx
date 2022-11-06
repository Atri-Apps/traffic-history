import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Traction from "./pages/Traction.jsx";
import EventLog from "./pages/Event_log.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/new" element={<New />} />
<Route path="/traction" element={<Traction />} />
<Route path="/event_log" element={<EventLog />} />
    </Routes>
  );
}
