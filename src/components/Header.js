import { useState } from "react"

export const Header = ({btn,toggleBtn}) => {
  
  
  return (
  <header className="header">
    <h1>App Tracker</h1>
    <button className="btn" onClick={toggleBtn}>{btn}</button>
  </header>
    )
}
