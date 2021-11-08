import React from "react";
import {  Menu } from "semantic-ui-react";
import { SideBarItems } from "./SideBarItems/SideBarItems.components";
import './SideBar.css'


export const SideBar = () => {

    return <Menu borderless fixed="left" vertical className="side_bar">
<SideBarItems  />
    </Menu>

}