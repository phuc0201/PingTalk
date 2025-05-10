import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Friends from "./pages/Channels/Friends";
import DrirectMessages from "./pages/Channels/DirectMessages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/channels" element={<AppLayout />}>
          <Route path="@me" element={<Friends />} />
          <Route path="@me/:channelId" element={<DrirectMessages />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
