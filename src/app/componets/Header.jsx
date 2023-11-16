import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
       <header className="bg-blue-500 p-4 text-white font-bold">
        <div className='flex justify-between ' >
          <h1 className="text-3xl">Typo-Champ</h1> 
        <div className='flex  items-center gap-[50px] ' >
         <Link href={"/practice"} >Practice Page </Link>
         <Link href={"/alag"} >Alag </Link>
         <Link href={"/"} >Test</Link>
        </div>
         </div>
      
    </header>
    </>
  )
}

export default Header
