import { useState } from "react";
import Contact from "..";

function List({contact}){
    const[filterText, setFilterText] = useState("");
    
    const filtered = contact.filter((item)=>{
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        );
    });
    

    return(
    <div>
        <input placeholder="Filter contact" value={filterText} onChange = {(e) => setFilterText(e.target.value)}/>
       <ul className="list">
        {filtered.map((cont, i)=>(
                <li key={i}>
                    <span>{cont.fullname}</span>
                    <span>{cont.phone_number}</span>
                </li>
        ))}
       </ul>

       <p>
        Total Contacts: {filtered.length}
       </p>
    </div>
    )
}

export default List