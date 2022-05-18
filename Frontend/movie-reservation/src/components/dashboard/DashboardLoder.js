/*
    Created by - Isuru Pathum Herath
    Name - DashboardLoder
 */

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function DashboardLoder() {

    return (
        <div>


            <div class="container-fluid" id="main">
                <div class="row row-offcanvas row-offcanvas-left">
                    <Navbar />
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default DashboardLoder