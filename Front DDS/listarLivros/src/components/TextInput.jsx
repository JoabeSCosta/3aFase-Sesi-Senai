import "./TextInput.css";

const TextInput = props => {
    const {label, handleChange} = props; 

    return (
        <div className='campo-formulario'>
            <label>{label}:</label>
            <input type='text' onChange={handleChange} className='input-formulario'/>
        </div>
    )
}

export default TextInput;