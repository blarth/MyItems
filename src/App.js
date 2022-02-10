import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";



export default function App() {
  

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}