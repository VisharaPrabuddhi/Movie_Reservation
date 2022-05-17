import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css';
import Navbar from '../../components/dashboard/Navbar';
import Sidebar from '../../components/dashboard/Sidebar';

const DisplayAll = () => {

    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    // Fetch All Movies
    const fetchMovies = () => {
        axios.get("http://localhost:8081/movie/")
            .then(response => {
                console.log(response)
                setMovies(response.data)
                setCount(response.data.length);
            })
            .catch(error => {
                console.log(error);
                // alert("Error Fetching Staff Members")
            });
    }

    //Filter Movies
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8081/movie/")
            .then(response => {
                console.log(response)
                const newFilter = movies.filter((response) => {
                    return response.name.toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchMovies();
                } else {
                    setMovies(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div>


            <Navbar />
            <Sidebar />

            <div style={{ marginLeft: "90px", position: "absolute" }}>
                {/* <div class="container-fluid" id="main">
                <div class="row row-offcanvas row-offcanvas-left">
                    
                </div>
            </div> */}
                <div className="card scrollable-div" style={{ width: "1200px", height: "590px" }}>
                    <div className="card-body ">
                        <h1 align="center">Movies</h1>
                        <br />
                        <div>
                            <center>
                                <div
                                    className="border border-info "
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
                                            <span><h3>Number of Available Movies</h3></span>
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


                        <div className="scrollable-div">

                            <table id="table" class="table scrollable-div " responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px', width: '95%' }}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Movie Name</th>
                                        <th>Description</th>
                                        <th>Genre</th>
                                        <th>Rating</th>
                                        <th>Released Date</th>
                                        <th>Language</th>
                                        <th>Type</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map((movies, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>

                                            <a href={`/singleProfile/${movies._id}`} style={{ textDecoration: 'none' }}>
                                                <td>{movies.name}</td>
                                            </a>

                                            <td>{movies.description}</td>
                                            <td>{movies.genre}</td>
                                            <td>{movies.rating}</td>
                                            <td>{movies.releaseDate}.{toString}</td>
                                            <td>{movies.language}</td>
                                            <td>{movies.tags.join("/")}</td>
                                            {/* <td>{movies.createdAt}</td> */}

                                            <td>
                                                <a className="" href={`/updateStaffMember/${movies.employeeId}`}>
                                                    <i className="fas fa-edit"></i>&nbsp;
                                                </a>
                                                &nbsp;
                                                {/* <a className="" href="#" onClick={() => deleteStaffMember(movies.employeeId)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;
                                        </a> */}
                                                &nbsp;
                                                <a href={`/attendance/${movies.employeeId}`} style={{ textDecoration: 'none' }}>
                                                    <i class="fas fa-calendar-week"></i>&nbsp;
                                                </a>
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
                            filename='Staff Member Excel'
                            sheet='Sheet'
                            buttonText='Download Excel Sheet'
                        />
                    </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisplayAll;