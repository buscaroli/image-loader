import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const ActionImage = (props) => {
   

    return (
            <figure className='figure'>
                <FaCloudUploadAlt className="figure__icon" size="5rem" color="#ff8c00" />
                <img className='figure__img' alt={`${props.alt_description}`} src={`${props.url}`} />
                <figcaption className='figure__caption' >{props.description || props.alt_description}</figcaption>
            </figure>
    )
}

export default ActionImage