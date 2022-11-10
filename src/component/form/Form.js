import React, {useState} from 'react';
import './Form.css'

export default function FormComp() {
    
    const [newval, setNewVal] = useState('');

    const handleChange = (e) => {
        setNewVal(e.target.value);
    }

    const handleSubmit = () => {
        alert(`Entered value is ${newval}`);
    }

    return(
        <>
            <form className='form'>
                <label>new field</label>
                <input type="text" value={newval} onChange={handleChange}></input>
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </>
    );
}