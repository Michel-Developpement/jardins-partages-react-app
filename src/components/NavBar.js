import React from "react";
import Item from "./Item";

export default function NavBar() {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [classe, setClasse] = React.useState("inactive");
  const handleShow = () => {
    if (classe === "inactive") {
      // setShow(true);
      setClasse("active");
    } else {
      // setShow(false);
      setClasse("inactive");
    }
  };
  return (
    <div className="bg-gray-800 h-10 text-white flex">
      <ul className="z-50 mt-2">
        <li        >
          <button onClick={()=>{
            if(!show){
              setShow(true)
            }else{
              setShow(false)
            }
          }}>Association</button>
        </li>
        <li
          className={
            !show ? "invisible" : "visible"
          }
        >
          Prochains rendez-vous
        </li>
        <li
          className={
            !show ? "invisible" : "visible"
          }
        >
          Nos activités
        </li>
        <li
          className={
            !show ? "invisible" : "visible"
          }
        >
          Adhérez
        </li>
        <li
          className={
            !show ? "invisible" : "visible"
          }
        >
          Nous contacter
        </li>
      </ul>

      <ul className="z-50 mt-2">
        <li        >
          <button onClick={()=>{
            if(!show2){
              setShow2(true)
            }else{
              setShow2(false)
            }
          }}>Agenda</button>
        </li>
        <li
          className={
            !show2 ? "invisible" : "visible"
          }
        >
          Ateliers Jardin
        </li>
        <li
          className={
            !show2 ? "invisible" : "visible"
          }
        >
          Conférence
        </li>
        
      </ul>

      <ul className="z-50 mt-2">
        <li        >
          <button onClick={()=>{
            if(!show3){
              setShow3(true)
            }else{
              setShow3(false)
            }
          }}>Les Jardins D'Yvonne</button>
        </li>
        <li
          className={
            !show3 ? "invisible" : "visible"
          }
        >
          Présentation
        </li>
        <li
          className={
            !show3 ? "invisible" : "visible"
          }
        >
          La carte
        </li>
        </ul>
    </div>
  );
}
