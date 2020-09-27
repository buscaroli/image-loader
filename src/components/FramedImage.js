import React from 'react'

const FramedImage = (props) => {
    return (
        <div className='container'>
            <figure className='figure'>
                <img className='figure__img' alt={`${props.alt_description}`} src={`${props.url}`}></img>
                <figcaption className='figure__caption' >{props.description}</figcaption>
            </figure>
        </div>
    )
}

export default FramedImage