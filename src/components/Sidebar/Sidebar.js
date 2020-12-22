import {SidebarHeader, ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import "./Sidebar.scss";
import bgImage from "./bg.jpg";
import {FaFileAlt, FaAlignJustify, FaRegLaughWink, FaHeart} from 'react-icons/fa';
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar__container">
            <ProSidebar
                image={bgImage}
            >

                <SidebarHeader>
                    <div className='sidebar__header__text'
                         style={{}}
                    >
                        Space News
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaAlignJustify/>}> <Link to="/home"> Home </Link> </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaAlignJustify/>}> <Link to="/articles"> News </Link> </MenuItem>
                        <MenuItem icon={<FaAlignJustify/>}> <Link to="/blog"> Blog </Link> </MenuItem>

                        <SubMenu
                            title='Reports'
                            icon={<FaFileAlt/>}
                        >
                            <MenuItem> 1</MenuItem>
                            <MenuItem> 2</MenuItem>
                            <MenuItem> 3</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{textAlign: 'center'}}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="#"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >

                            <span> Contact me </span>
                        </a>
                    </div>
                </SidebarFooter>

            </ProSidebar>
        </div>
    );
}