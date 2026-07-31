import { useState } from "react"

export const Accordion = ({title,content}) => {
  const [isActive, setIsActive] = useState(false)

  const clickHandler = () => {
    setIsActive(isActive===false ? true : false)
  }
 
  return (
    <div className="container">
      <section className="accordion-card">
        <div className="header">
          <div className="card-title">
            {title}
          </div>
          <p className="icon" onClick={clickHandler}>{isActive ? "-" : "+"}</p>
        </div>
        
        <div className="content">
          {isActive && <p className="card-info">{content}</p>}
        </div>
      </section>
    </div>
  )
    
}