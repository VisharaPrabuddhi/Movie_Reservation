/*
    Created by - Isuru Pathum Herath
    Name - Sidebar
 */

import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ position: 'absolute', display: 'flex', height: '100vh' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/movie" className="text-decoration-none" style={{ color: 'inherit' }}>
                        X-trem Movie Hub
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/movie" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Movie</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/theater" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Theater</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/manager" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Manager</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        @isuru
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;