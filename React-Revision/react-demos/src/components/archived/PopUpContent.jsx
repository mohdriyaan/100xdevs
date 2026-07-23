import { createPortal } from "react-dom"


export const PopUpContent = ({copied}) => {

  return createPortal(
    <section>
      {copied && (
        <div style={{position : "absolute" , bottom : "3rem"}}>Copied to clipboard</div>
      )}
    </section>,
    document.querySelector("#pop-up-content")
  )
  
  
}