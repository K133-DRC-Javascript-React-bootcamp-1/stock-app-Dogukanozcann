import {useState, useEffect} from 'react';
import List, {} from './list';
import Form, {} from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: 'Alvares',
      number: "15"
    },
    {
      name: 'Dolarex',
      number: "125"
    },
    {
      name: 'Majezik',
      number: "235"
    },
    {
      name: 'Rupafin',
      number: "119"
    },
    {
      name: 'Apranax',
      number: "1102"
    },

  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id='conteiner'>
      <h1>Homerwork 2</h1>
      <List contacts={contacts} />
      <Form  addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts