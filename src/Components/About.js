import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
  const a = useContext(noteContext)
  useEffect(()=>{
   
     a.update();
      // eslint-disable-next-line
  },[])
  return (
    <div>
      this is about {a.state.name}
    </div>
  )
}
