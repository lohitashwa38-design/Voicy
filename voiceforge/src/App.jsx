import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import VoiceConversation from "./pages/VoiceConversation";
import Settings from "./pages/Settings";

import Shopping from "./pages/assistants/Shopping";
import Cooking from "./pages/assistants/Cooking";
import Medical from "./pages/assistants/Medical";
import GameMaster from "./pages/assistants/GameMaster";
import Documents from "./pages/assistants/Documents";
import Interview from "./pages/assistants/Interview";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/voice" element={<VoiceConversation />} />

        <Route path="/shopping" element={<Shopping />} />
        <Route path="/Cooking" element={<Cooking />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/game-master" element={<GameMaster />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/interview" element={<Interview />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
