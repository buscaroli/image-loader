import React from 'react'


const InputBar = (props) => {
    return(
        <div className='form-container'>
            <form className='form'> 
                <label className='form__label' htmlFor='form-text'>
                    Enter your Search below
                </label>
                <input className='form__text' type='text' name='form-text' placeholder='puppies'>
                    
                </input>
                <button 
                    className='form__btn'
                    onClick={props.onButtonClick}>
                        {props.text}
                </button> 
            </form>
        </div>
    )
}

export default InputBar