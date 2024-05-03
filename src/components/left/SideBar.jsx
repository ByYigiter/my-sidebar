import React from "react";
import { FcHome,FcContacts} from 'react-icons/fc';
import { FcManager,FcViewDetails,FcServices} from 'react-icons/fc';
import "./SideBar.scss"


function SideBar() {
	return <>
  <header className="side-bar">

    <div className="side-bar_logo">
   
      <a href="#" > By Yigiter</a>
    </div>


    <nav className="side-bar_menu">
      <ul className="side-bar_menu_list">
        <li className="side-bar_menu_list_item">   
          <FcHome/>
          <a href="#">Home</a></li>
        <li className="side-bar_menu_list_item">   

          <FcManager/>
          <a href="#">About</a></li>
          <li className="side-bar_menu_list_item">   

          <FcServices/>
          <a href="#">Service</a></li>
          <li className="side-bar_menu_list_item">   

          <FcViewDetails/>
          <a href="#">Portfolio</a></li>
          <li className="side-bar_menu_list_item">   

          <FcContacts/>
          <a href="#">Contact</a></li>
      </ul>
    </nav>

  </header>
  
  </>;

}

export default SideBar;
