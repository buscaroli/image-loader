import React from 'react'


class InputBar extends React.Component  {

    

    state = {
        text: ''
    }

    handleSubmit = (term) => {
        term.preventDefault()
        this.props.onSearchSubmit(this.state.text)
    }

    handleInputChange = (event) => {
        this.setState({text: event.target.value})
    }


    render() {
        return(
            <div className='form-container'>
                <form 
                className='form'
                onSubmit={this.handleSubmit}> 
                    <label className='form__label' htmlFor='form-text'>
                        Enter your Search below
                    </label>
                    <input 
                        className='form__text'
                        onChange={this.handleInputChange} 
                        type='text' 
                        name='form-text' 
                        placeholder='puppies'/>
                    <button 
                        className='form__btn'
                        onSubmit={this.handleSubmit}>
                        Search
                    </button> 
                </form>
            </div>
        )
    }
    
}

export default InputBar