import React from 'react'
import Ticketcard from '../Ticketcard/Ticketcard'
//import Ticketcounter from '../Ticketcounter/Ticketcounter'
import "./Main.scss"
import team from '../../assets/data/data'
const Main = () => {

    const ticketCardJSX = team.map((member)=>{
        return (
            <div key={member.id}>
            <Ticketcard name={member.name} role ={member.role}/>
            </div>
        )
    })


  return (
    <div className='main'>
       {ticketCardJSX}
       

    </div>
  )
}

export default Main