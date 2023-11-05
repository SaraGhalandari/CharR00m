import { Routes , Route , Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  return (
  <>
    <ChatContextProvider user ={user}>
    <NavBar/>
    <Container>
      <Routes>
        <Route  path="/" element={<Chat/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Container>
    </ChatContextProvider>
    </>
  );
}

export default App;
