export const Greeting = ({timeOfDay}) => {
  return (
    <div>
      {(timeOfDay==="morning") ? "Good morning!" : (timeOfDay==="afternoon") ? "Good afternoon!" : "" }
    </div>
  )
}

