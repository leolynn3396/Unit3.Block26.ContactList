import './App.css'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails';
import { useState, useEffect } from 'react'
import { ReactDOM } from 'react';

function App() {  // Create state variables for selectedContactId and setSelectedContactId and set its default value to null.
  const [detailedContact, setDetailedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/" + selectedContactId);
        const result = await response.json();
        setDetailedContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    if (selectedContactId) {
      fetchSelectedContact()
    }
  }, [selectedContactId])


  return (
    <>
      {detailedContact ? (<ContactDetails detailedContact={detailedContact}/>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
  )
}

export default App