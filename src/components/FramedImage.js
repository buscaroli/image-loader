import React from 'react'

const FramedImage = (props) => {
    return (
            <figure className='figure'>
                <img className='figure__img' alt={`${props.alt_description}`} src={`${props.url}`}></img>
                <figcaption className='figure__caption' >{props.description || props.alt_description}</figcaption>
            </figure>
    )
}

export default FramedImage