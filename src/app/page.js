'use client'

import HelloButton from "../components/button/HelloButton"

export default function Home() {
  return (
    <section style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1 style={{
        margin: 0,
        fontSize: "24px",
        marginBottom: "12px"
      }}>Welcome to my App</h1>
      <HelloButton buttonText={"button 1"} buttonText2={"button 2"}/>
    </section>
  )
}