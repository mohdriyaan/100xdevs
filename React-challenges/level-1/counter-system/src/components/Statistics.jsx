export function Statistics({count,click}){
  return(
    <div>
      <p>Current Count: {count}</p>
      <p hidden={(count<100)?true:false}>Maximum Count Reached</p>
      <p hidden={(count>0)?true:false}>Minimum Count Reached</p>
      <p>Total clicks: {click}</p>
    </div>
    
  )
}