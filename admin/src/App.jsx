import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useEffect, useState } from "react";
import Login from "./components/Login";
  import { ToastContainer } from 'react-toastify';


export const backendUrl = 'http://localhost:8000';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");
  useEffect(()=>{
    localStorage.setItem('token' , token);
  },[token])
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/admin/add" element={<Add token={token} />} />
                <Route path="/admin/list" element={<List token={token} />} />
                <Route path="/admin/orders" element={<Order token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
