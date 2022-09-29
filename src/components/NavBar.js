import React from 'react';
import '../input.css';

export default function NavBar() {
  const menu1 ='menu1';
  const [column1, setColumn1] = React.useState([menu1]);
  const handleShowColumn1 = () =>{
    setColumn1(menu1.puch('liste1', 'liste2', 'liste3'))
  }
  return (
    <div className='chat-notification-title flex'>{column1}</div>
  );
}
