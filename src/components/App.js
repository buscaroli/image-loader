import React from 'react'
import axios from 'axios'

import InputBar from './InputBar'
import ImageList from './ImageList'


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
            const response = await axios.get(
                'https://api.unsplash.com/search/photos',
                {
                    params: {
                        query: term,
                        per_page: 12
                    },
                    headers: {
                        Authorization: 'Client-ID bS0yZO5AIA_63xuYrp6J_bgJHn44x6YUrMP0l7bCs20'
                    }
                }
            )
            // console.log(response.data.results)
            this.setState({
                images: response.data.results
            })
            // console.log(this.state.images)
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
            </div>
        )
    }
}

export default App