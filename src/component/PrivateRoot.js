import React from "react"
import { Route, Navigate, Routes } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Dashboard from "./Dashboard"
import Login from "./Login"

function PrivateRoute() {
  const { currentUser } = useAuth()
  
  return (
    <Routes>
      {currentUser ? <Route exact path="/" element={<Dashboard/>}  
        /> : <Route path="/" element={<Login/>}/>
      }  
    </Routes>
    
  )
}
export default PrivateRoute