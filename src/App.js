import React from 'react'
import Header from './components/Header';
import Card from './components/Card.jsx';
import Notes from './components/Notes.jsx';
import Footer from './components/Footer.jsx';
import contacts from './components/contacts.jsx';




function App(){
 console.log(contacts);
  return (
    <div>
      <Header/>,
      <Card 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}git 
      email={contacts[0].email}/>,

      <Card name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email} />,

<Card name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}/>
      
      <Notes/>,
    <Footer/>

    </div>
    

  )
}


export default App;