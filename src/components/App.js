import React from 'react'

import InputBar from './InputBar'


const API_KEY = '384899453488353'
const API_SECRET = 'Uu8k905qC0xNkxHNObktO_qQiNM'
const API_BASE_URL = 'https://api.cloudinary.com/v1_1/mmontyy'

class App extends React.Component {
    
    // State will keep an array of the images to be displayed.
    // Images imported from Unsplash.
    // Initial state empty.
    state = {
        images: [],
    }


    onButtonClick = (e) => {
        e.preventDefault()
        console.log('Clicked')
    }
     

    render() {
        return(
            <div>
                <InputBar text="Search" onButtonClick={this.onButtonClick}/>
            </div>
        )
    }
}

export default App