import React from 'react'
import axios from 'axios'

import InputBar from './InputBar'
import ImageList from './ImageList'


const reqPics = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID bS0yZO5AIA_63xuYrp6J_bgJHn44x6YUrMP0l7bCs20'
    }
})

class App extends React.Component {
    
    // State will keep an array of the images to be displayed.
    // Images imported from Unsplash.
    // Initial state empty.
    state = {
        images: [],
        text: ''
    }


    onSearchSubmit = async (term) => {
        // console.log(this.state.text)
        try {
            const response = await reqPics.get(
                'https://api.unsplash.com/search/photos',
                {
                    params: {
                        query: term
                    }
                }
            )
            // console.log(response.data.results)
            this.setState({
                images: response.data.results
            })
            console.log(this.state.images)
        }
        catch (e){
            console.log('Error: ', e)
        }
    }
     

    render() {
        return(
            <div>
                <InputBar text={this.state.text} onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                {/* <Image 
                    alt_description='litter of dogs fall in line beside wall' 
                    url='https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=621&q=80' 
                    description='Pink Wall Full of Dogs'
                /> */}
                
            </div>
        )
    }
}

export default App