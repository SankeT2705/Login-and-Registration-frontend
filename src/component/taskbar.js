import React from "react";
import Tasklabel from './taskbarLabel';

import { useNavigate } from 'react-router-dom';
const TaskBar = () => {
    const history = useNavigate();

    return (
        <div className="m-4 navbar-custom">
            <nav className="navbar rounded navbar-expand-lg text-light bg-dark sticky-top mb-2" data-bs-theme="dark">
                <div className="container-fluid">
                    <Tasklabel class="navbar-brand" name="BGMI-CUSTOM" />
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/" className=" nav-item nav-link active"> Home  </a>
                            <a className=" nav-item nav-link active" onClick={(e) => {
                                e.preventDefault();
                                history('/custom')
                            }} >Custom</a>
                            <Tasklabel class=" nav-item nav-link active" name="MyRoom" />
                            <Tasklabel class=" nav-item nav-link active" name="Result" />
                            <div className="nav-item dropdown">

                                <a href="\" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Esport</a>
                                <div className="dropdown-menu">
                                    <Tasklabel class="dropdown-item" name="BGMI championship 2023" />
                                    <Tasklabel class="dropdown-item" name="PMGC 2023" />
                                    <Tasklabel class="dropdown-item" name="PMPL 2023" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TaskBar;