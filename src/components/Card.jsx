import React from 'react'





function card(props){
    console.log(props);
    return(

        <div className='card'>
            <div className='image'>
            <img
  src= {props.img }
  //src='/src/assets/images/download.jpg'
  alt='avatar_img'/>
  

            </div>
            <div className='card-FONT'>
            <h2>{props.name}</h2>
  
  
  <div className='lowerfonts'>
  <h3>{props.phone}</h3>
  <p>{props.email}</p>
  </div>
            </div>
  
  </div>
    )
}

export default card;