import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";



export default function App() {
  

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/shop-cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}