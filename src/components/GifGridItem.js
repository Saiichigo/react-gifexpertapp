import React from 'react'

const GifGridItem = ({url,id,title, images}) => {
    console.log(images)
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={images} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
