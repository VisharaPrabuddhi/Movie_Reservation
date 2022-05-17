import React, { useState } from 'react';

const Navbar = () => {
    const [collapse2, setCollapse2] = useState(false);

    const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark" style={{ position: 'static' }}>
                <a class="navbar-brand" href="/movie" style={{ marginLeft: "46%" }}>Admin Dashboard</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent" style={{ marginLeft: "90%", height: '60px' }}>
                    <ul class="navbar-nav" >
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">
                                <i class="fa fa-home"></i>
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-feather"></i>
                                Features
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">
                                <i class="fa fa-dollar"></i>
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">
                                <i class="fa fa-cogs">&nbsp;</i>&nbsp;
                                Settings
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;