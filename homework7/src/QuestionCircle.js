import React from 'react'

export default function Circle({ data }) {
  return (
    <section style={{ borderRadius: "100%", backgroundColor: `${data.bgColor}`, height: "60px", width: "60px", display: "inline-block", textAlign: "center", marginRight: "40px", marginBottom: "50px" }}>
      <h1 style={{ paddingTop: "15px", fontSize: "1.2em", color: `${data.color}` }}>{data.id}</h1>
    </section>
  )
}  
