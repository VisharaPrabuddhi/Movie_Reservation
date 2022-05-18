/*
    Created by - Isuru Pathum Herath
    Name - Update Theaters
 */

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

import './Theater.css';
import Navbar from '../../components/dashboard/Navbar';
import Sidebar from '../../components/dashboard/Sidebar';

const UpdateTheater = props => {

    const { id } = useParams();

    const [state, setState] = useState({
        name: "",
        address: "",
        genre: "",
        city: "",
        close: "",
        noOfSeat: "",
    });

    //destructure values from state
    const {
        name,
        address,
        city,
        close,
        noOfSeat,
    } = state;

    console.log(`PROP TEST: ${id}`)

    useEffect(() => {
        axios
            .get(`http://localhost:8081/theater/${id}`)
            .then(response => {
                console.log(response)
                const {
                    name,
                    address,
                    city,
                    close,
                    noOfSeat,
                } = response.data

                setState({
                    ...state, name,
                    name,
                    address,
                    city,
                    close,
                    noOfSeat,
                });
            })
            .catch(error => alert('Error Loading Update Theater'));
    }, []);

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            </div>
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Theater Name</label>
                        <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="Enter the Theater Name" required />
                    </div>
                </div>
                <div class="col">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">City</label>
                            <input type="text" onChange={handleChange('city')} value={city} className="form-control" placeholder="Enter the Release Date" required />
                        </div>
                    </div>
                    {/* <div className="form-group">
                                            <label className="text-muted">Genre</label>
                                            <select id="type" value={genre} onChange={handleChange("genre")} className="form-control">
                                                <option value="" disabled selected>Select a Genre</option>
                                                <option value="Action">Action</option>
                                                <option value="Adventure">Adventure</option>
                                                <option value="Animation">Animation</option>
                                                <option value="Biology">Biology</option>
                                                <option value="Comedy">Comedy</option>
                                                <option value="Romance">Romance</option>
                                                <option value="Documentary">Documentary</option>
                                                <option value="Drama">Drama</option>
                                                <option value="Horror">Horror</option>
                                            </select>
                                        </div> */}
                </div>
            </div>

            {/* <div className="form-group">
                                    <label className="text-muted">Movie Description</label>
                                    <textarea onChange={handleChange("description")} value={description} type="text" className="form-control" placeholder="Enter the Movie Description" pattern="{1,300}" required />
                                </div> */}

            {/* <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted"> Movie Language</label>
                                            <select id="type" value={language} onChange={handleChange("language")} className="form-control">
                                                <option value="" disabled selected>Select a Language</option>
                                                <option value="Sinhala">Sinhala</option>
                                                <option value="English">English</option>
                                                <option value="Tamil">Tamil</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Rating</label>
                                            <select id="type" value={rating} onChange={handleChange("rating")} className="form-control">
                                                <option value="" disabled selected>Select a Rating</option>
                                                <option value="1">Star 1</option>
                                                <option value="2">Star 2</option>
                                                <option value="3">Star 3</option>
                                                <option value="4">Star 4</option>
                                                <option value="5">Star 5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
            <br />
            <div className="form-group">
                <label className="text-muted">Theater Address</label>
                <textarea onChange={handleChange("address")} value={address} type="text" className="form-control" placeholder="Enter the Theater Address" pattern="{1,300}" required />
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Close</label>
                        <select id="type" value={close} onChange={handleChange("close")} className="form-control">
                            <option value="" disabled selected>Select an Option</option>
                            <option value="true">Open</option>
                            <option value="false">Close</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Number of Seats</label>
                        <input type="text" onChange={handleChange('noOfSeat')} value={noOfSeat} className="form-control" placeholder="Enter the Release Date" pattern="[0-9]+" title="Please enter only numbers" required />
                    </div>
                </div>
            </div>
            <br />

            <br />
            <div>
                <button className="btn btn-primary btn-lg btn-block">Update Theater</button>
            </div>
            <br />
        </form>
    )

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({
            name,
            address,
            city,
            close,
            noOfSeat,
        })
        axios
            .put(`http://localhost:8081/theater/${id}`, {
                name,
                address,
                city,
                close,
                noOfSeat,
            })
            .then(response => {

                console.log(response)
                const {
                    name,
                    address,
                    city,
                    close,
                    noOfSeat,
                } = response.data

                //empty state
                setState({
                    ...state,
                    name,
                    address,
                    city,
                    close,
                    noOfSeat,
                });

                //show success alert
                // alert(`Staff Member ${firstName} is Updated`);
                Swal.fire(
                    `Theater ${name} is Updated`,
                    'Click Ok to continue',
                    'success'
                )
            })
            .catch(error => {
                console.log(error.Response)
                // alert(error.response.data.error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
            })
    };

    return (

        <div>
            <Navbar />
            <Sidebar />
            <div className="container" style={{ marginLeft: "90px", position: "absolute" }}>
                <div className="card scrollable-div" style={{ width: "1240px", height: "590px" }}>
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h1 align="center">Update Theater</h1>
                            <br />
                            {showUpdateForm()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateTheater;