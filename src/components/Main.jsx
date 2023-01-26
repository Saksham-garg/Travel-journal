import React from 'react'
import Location from './Location.png'

export default function Main(props) {
  return (
    <div className='Main--content'>
        <div className='travel--image'>
            <img alt='Place' src={props.item.image}></img>
        </div>
        <div className='travel--details'>
          <div className='travel--location'>
            <img alt='location' src={Location}></img>
            <span>{props.item.location}</span>
            <a target='_blank' href='https://goo.gl/maps/MShuAQ1qEcZfZzYF7'>View on Google Maps</a>
          </div>
          <div className='travel--title'>
            <h1>{props.item.title}</h1>
          </div>
          <div className='travel--date'>
              <h3>{props.item.date}</h3>
          </div>
          <div className='travel--info'>
            <p>{props.item.desc}</p>
          </div>
        </div>
    </div>
  )
}
