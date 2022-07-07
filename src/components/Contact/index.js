import { useState, useEffect } from "react";
import List from "./List";
import Form from "../Form";
import "./style.css";

function Contact() {
  const [contact, setContact] = useState([
    {
      fullname: "Mehmet",
      phone_number: "+905554443322"
    },{
      fullname: "Ayşe",
      phone_number: "+905553332211"
    },{
      fullname: "Nazlı",
      phone_number: "+905556667788"
    }
  ]);

  useEffect(() => {
    console.log(contact);
  }, [contact])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contact = {contact}/>
      <Form addContact={setContact} contact= {contact}/>
    </div>
  );
}

export default Contact;
