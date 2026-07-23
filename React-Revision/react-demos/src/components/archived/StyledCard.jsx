export const StyledCard = ({title, description}) => {
  return (
    <div style={{
      backgroundColor:"lightblue",
      padding:"20px",
      borderRadius:"10px",
      color:"darkblue"
    }}>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}