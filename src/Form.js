import React from 'react';
import './App.css';

const Form = (props) => {

    return ( 
        <form className="form">
            <input className="input-field button-primary" value={props.inputText} type='text' onChange={props.onType}/>
            <button className="submit-button button-primary" type ='submit' onClick={props.onSubmit}>Submit</button>
            <div>
                <select className="filter-button button-primary" onChange ={props.onChangeStatus}>
                    <option value='all'>All</option>
                    <option value='completed'>completed</option>
                    <option value='uncompleted'>uncompleted</option>

                </select>
            </div>
        </form>
     );
}
 
export default Form ;