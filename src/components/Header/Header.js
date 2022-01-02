//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem,
         SidebarHeader, SidebarContent} from "react-pro-sidebar";

//import icons from react icons
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle, 
         FiVideo, FiImage } from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            {/* TODO: The logo section changes sizes between pages */}
          <div className="logo" onClick={menuIconClick}>
              {/* small and big change using menucollapse state */}
              {menuCollapse ? (<FiArrowRightCircle/>) : (<FiArrowLeftCircle/>)}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}><a href="/">Home</a></MenuItem>
              <MenuItem icon={<FiImage/>}><a href="memes">Memes</a></MenuItem>
              <MenuItem icon={<FiVideo/>}><a href="videos">Videos</a></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;