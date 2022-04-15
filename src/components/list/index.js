import {useState} from 'react'

function List({contacts}) {
  const[filterText, setFilterText] = useState ("");
  
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    );
  });
    
  return (
    <div>
      <input placeholder="Find Medic" value={filterText} onChange={(e) =>setFilterText(e.target.value)}></input>
      <ul className="list">
        {filtered.map((contacts, i) => (
            <li key={i}>
              <span>{contacts.name}</span>
              <span>{contacts.number}</span>
            </li>
          ))}
      </ul>
      <p>
        All Medic ({filtered.length})
      </p>
    </div>
  )
}

export default List;