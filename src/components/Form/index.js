import { useState } from 'react';

function Form({ addContacts, contacts}) {
    const [form, setForm] = useState ({ name: "", number:""});
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    
    };

    const submit = (e) => {
        e.preventDefault();
        if(form.name === '' || form.number === ''){
          return false;
        }
        addContacts([...contacts, form]);
        setForm({name: "", number:""});
    };

  return (
    <form >
     <div> <input name="name" placeholder="Medic" value={form.name} onChange={onChangeInput} /> </div>   
     <div> <input name="number" placeholder="Stock" value={form.number} onChange={onChangeInput} /> </div> 
     <div className='btn'> <button onClick={submit}>Add Medic and Stock</button> </div> 
     {/* <div> <input type="text" pattern="[0-9]*"
     onInput={this.handleChange.bind(this)} value={this.form.number}/> </div>  */}
     <div className='btn'> <button onClick={submit}>Add Stock</button> </div>
    </form>
  )
}

export default Form;