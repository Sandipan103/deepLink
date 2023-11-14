import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import Profile from "./pages/Profile"

import UserDetails from "./pages/UserDetails";
import PostComponent from "./components/PostComponent";
import Feed from "./pages/Feed";

import MyConnections from "./components/MyConnections";
import Chat from "./pages/Chat";
import UserProfileView from './pages/UserProfileView';
import CompanyForm from './pages/CompanyForm';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<UserDetails/>}/>

        <Route path="/mynetwork" element={<MyConnections/>}/>

        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/userprofileview" element={<UserProfileView/>}/>

        <Route path="/company" element={<CompanyForm/>}/>

      </Routes>
    </div>
  );
}

export default App;
