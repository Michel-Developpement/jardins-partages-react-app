import React from 'react';
import '../input.css';

export default function NavBar() {
  const menu1 = ['menu1'];
  const [column1, setColumn1] = React.useState([menu1]);
  // const handleShowColumn1 = () =>{
  //   setColumn1(menu1.puch('liste1', 'liste2', 'liste3'))
  // }
  return (
    <div className='bg-gray-800 h-10 text-white'><p>{column1}</p></div>
  );
}
