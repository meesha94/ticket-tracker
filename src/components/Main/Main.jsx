import React from 'react'
import Ticketcard from '../Ticketcard/Ticketcard'
import Ticketcounter from '../Ticketcounter/Ticketcounter'
import "./Main.scss"
const Main = () => {
  return (
    <div className='main'>
        <Ticketcard/>
        <Ticketcounter/>

    </div>
  )
}

export default Main