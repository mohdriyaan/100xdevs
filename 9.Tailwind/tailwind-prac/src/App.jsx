import { useState } from 'react'
import "./index.css"
import { RevenueCard } from './components/RevenueCard'
function App() {
  return (
    <div className='grid grid-cols-4'>
      {/* <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{backgroundColor:"red"}}>Div 1</div>
        <div style={{background:"yellow"}}>Div 2</div>
        <div style={{backgroundColor:"blue"}}>Div 3</div>
        <div style={{backgroundColor:"green"}}>Div 4</div>
      </div> */}

      {/* <div className='flex justify-between'>
        <div className='bg-red-500'>Div 1</div>
        <div className='bg-yellow-500'>Div 2</div>
        <div className='bg-blue-500'>Div 3</div>
        <div className='bg-green-500'>Div 4</div>
      </div> */}

      {/* Equal widths */}
      {/* <div className='grid grid-cols-4'>
        <div className='bg-red-500'>Div 1</div>
        <div className='bg-yellow-500'>Div 2</div>
        <div className='bg-blue-500'>Div 3</div>
        <div className='bg-green-500'>Div 4</div>
      </div> */}

      {/* Unequal widths */}
      {/* <div className='grid grid-cols-12'>
        <div className='bg-red-500 col-span-4'>Div 1</div>
        <div className='bg-yellow-500 col-span-4'>Div 2</div>
        <div className='bg-blue-500 col-span-2'>Div 3</div>
        <div className='bg-green-500 col-span-2'>Div 4</div>
      </div> */}

      {/* <div className='bg-red-500 md:bg-blue-500'>
        hi there
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-red-500'>
          hi there
        </div>
        <div className='bg-green-500'>
          hi there
        </div>
        <div className='bg-yellow-500'>
          hi there
        </div>
      </div> */}

      <RevenueCard title={"Amount pending"} showWarning={true} amount={"92,312.20"} orderCount={13} />
    </div>
  )
}

export default App
