"use client";
import { useState } from 'react';
import PingPongGame from './components/index';
interface names {
  fname: string,
  sname: string
}
export default function Home() {
  const [playerNames, setNames] = useState<names>()
  const getName = (name:any) => {
    console.log(name)
    setNames({fname:name.fname,sname:name.sname})
  };
  console.log(playerNames)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex justify-around items-center w-full'><span>FAIZAN</span><span>WASEEM</span></div>
      <PingPongGame getNameHandler={getName}/>
    </main>
  )
}
