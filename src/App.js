import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";



export default function App() {
  

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}