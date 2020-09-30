import React from 'react'

import ActionImage from './ActionImage'


const ImageList = (props) => {

    const list = props.images.map(img => 
        <ActionImage 
            key={img.id}
            descripton={img.description}
            alt_description={img.alt_description}
            url={img.urls.regular}
        />
    )

    return(
        <div className='imageList'>
            {list}
        </div>
    )


}

export default ImageList