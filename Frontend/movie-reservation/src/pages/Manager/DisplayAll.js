import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './Manager.css';
import Navbar from '../../components/dashboard/Navbar';
import Sidebar from '../../components/dashboard/Sidebar';

const DisplayAll = () => {

    const [manager, setManager] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const [count, setCount] = useState([]);

    //Fetch All Managers
    const fetchManager = () => {
        axios.get("http://localhost:8081/manager/")
            .then(response => {
                console.log(response)
                setManager(response.data)
                setCount(response.data.length);
            })
            .catch(error => alert("Error Fetching Managers"));
    }

    //Delete Manager by ID
    const deleteManager = (id) => {
        Swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Manager!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios
                        .delete(`http://localhost:8081/manager/${id}`)
                        .then(response => {
                            // alert(response.data.message);
                            Swal("The Manager is Deleted!", {
                                icon: "success",
                            });
                            fetchManager();
                        })
                        .catch(error => Swal('Error deleting Manager'));

                } else {
                    Swal("Manager didn't deleted!");
                }
            });
    }

    //Filter Staff Member
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8081/manager/")
            .then(response => {
                console.log(response)
                const newFilter = manager.filter((response) => {
                    return response.nic.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.firstName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.middleName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.lastName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.type.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.email.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.mobileNumber.toString().toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchManager();
                } else {
                    setManager(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchManager();
    }, [])

    return (
        <div>
            <Navbar />
            <Sidebar />

            <div style={{ marginLeft: "90px", position: "absolute" }}>
                <div className="card scrollable-div" style={{ width: "1240px", height: "590px" }}>
                    <div className="card-body">
                        <h1 align="center">Managers</h1>
                        <br />
                        <div>
                            <center>
                                <div
                                    className="border border-info"
                                    style={{
                                        width: "100%",
                                        backgroundColor: "white",
                                        borderRadius: "10px",
                                        borderColor: "#00408C",
                                        padding: "20px 20px 20px 20px",
                                        margin: "10px 0px 0px 0px",
                                        align: "center"
                                    }}
                                >
                                    <div className="row">
                                        <div className="col">
                                            <span style={{ color: "blue" }}><h3>{count}</h3></span>
                                            <span><h3>Number of Managers</h3></span>
                                        </div>
                                        {/* <div className="col">
                                        <i
                                            class="fa  fa-hourglass-end"
                                            aria-hidden="true"
                                            style={{
                                                color: "blue",
                                                fontSize: "30px",
                                                marginTop: "10px",
                                            }}
                                        ></i>
                                    </div> */}
                                    </div>
                                </div>
                                <form style={{ marginTop: '40px', marginLeft: '20px', marginRight: '40px', width: "100%" }}>
                                    <div className="col-lg-3 mt-2 mb-2">
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Search"
                                            value={wordEntered}
                                            onChange={handleFilter}
                                        />
                                    </div>
                                </form>
                            </center>
                        </div>

                        <div className=" scrollable-div">
                            <center>
                                <a className="btn btn-success btn-lg btn-block" href={`/new-manager`}>
                                    <i class="fas fa-solid fa-plus">&nbsp; New Manager</i>
                                </a>
                                <a>
                                    <ReactHTMLTableToExcel
                                        className='btn btn-outline-success'
                                        table='table'
                                        filename='Movie Excel'
                                        sheet='Sheet'
                                        buttonText='Download Excel Sheet'
                                    />
                                </a>
                            </center>

                            <table id="table" class="table" responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px', width: '95%' }}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Employee ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Employee Type</th>
                                        <th>NIC Number</th>
                                        <th>Email Address</th>
                                        <th>Mobile Number</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {manager.map((manager, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>

                                            <a href={`/singleProfile/${manager.id}`} style={{ textDecoration: 'none' }}>
                                                <td>{manager.id}</td>
                                            </a>

                                            <td>{manager.firstName}</td>
                                            <td>{manager.lastName}</td>
                                            <td>{manager.type}</td>
                                            <td>{manager.nic}</td>
                                            <td>{manager.email}</td>
                                            <td>{manager.mobileNumber}</td>
                                            {/* <td>{staffMembers.createdAt}</td> */}

                                            <td>
                                                <a className="" href={`/update-manager/${manager.id}`}>
                                                    <i className="fas fa-edit"></i>&nbsp;
                                                </a>
                                                &nbsp;
                                                <a className="" href="#" onClick={() => deleteManager(manager.id)}>
                                                    <i className="far fa-trash-alt"></i>&nbsp;
                                                </a>
                                                &nbsp;
                                                {/* <a href={`/attendance/${manager.id}`} style={{ textDecoration: 'none' }}>
                                            <i class="fas fa-calendar-week"></i>&nbsp;
                                        </a> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        {/* <div style={{ marginTop: '', marginLeft: "1030px" }}>
                            <ReactHTMLTableToExcel
                                className='btn btn-outline-success'
                                table='table'
                                filename='Manager Excel'
                                sheet='Sheet'
                                buttonText='Download Excel Sheet'
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )

}

export default DisplayAll;