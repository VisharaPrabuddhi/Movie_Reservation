import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import Select from 'react-select';

import './Movie.css';
import Navbar from '../../components/dashboard/Navbar';
import Sidebar from '../../components/dashboard/Sidebar';
import firebase from './firebase';
import 'firebase/storage'

const storage = firebase.storage();

const UpdateStaffMember = props => {

    const { id } = useParams();

    // state
    const [file, setFile] = useState(null);
    const [movieURL, setURL] = useState("");
    const [cast, setSelectedCast] = useState("");
    const [tags, setSelectedTag] = useState("");

    const [state, setState] = useState({
        name: "",
        description: "",
        genre: "",
        rating: "",
        releaseDate: "",
        language: "",
        director: "",
        available: null,
    });

    //destructure values from state
    const {
        name,
        description,
        genre,
        rating,
        releaseDate,
        language,
        director,
        available,
    } = state;

    console.log(`PROP TEST: ${id}`)

    const dataTag = [
        {
            value: "Action",
            label: "Action"
        },
        {
            value: "Adventure",
            label: "Adventure"
        },
        {
            value: "Animation",
            label: "Adventure"
        },
        {
            value: "Biography",
            label: "Biography"
        },
        {
            value: "Comedy",
            label: "Comedy"
        },
        {
            value: "Documentary",
            label: "Documentary"
        },
        {
            value: "Drama",
            label: "Drama"
        },
        {
            value: "Family",
            label: "Family"
        },
        {
            value: "Fantasy",
            label: "Fantasy"
        },
        {
            value: "Film-Noir",
            label: "Film-Noir"
        },
        {
            value: "Game-Show",
            label: "Game-Show"
        },
        {
            value: "History",
            label: "History"
        },
        {
            value: "Horror",
            label: "Horror"
        },
        {
            value: "Music",
            label: "Music"
        },
        {
            value: "Musical",
            label: "Musical"
        },
        {
            value: "Mystery",
            label: "Mystery"
        },
        {
            value: "Romance",
            label: "Romance"
        }
    ];

    const dataCast = [
        {
            value: "Action",
            label: "Action"
        },
        {
            value: "Adventure",
            label: "Adventure"
        },
        {
            value: "Animation",
            label: "Adventure"
        },
        {
            value: "Biography",
            label: "Biography"
        },
        {
            value: "Comedy",
            label: "Comedy"
        },
        {
            value: "Documentary",
            label: "Documentary"
        },
        {
            value: "Drama",
            label: "Drama"
        },
        {
            value: "Family",
            label: "Family"
        },
        {
            value: "Fantasy",
            label: "Fantasy"
        },
        {
            value: "Film-Noir",
            label: "Film-Noir"
        },
        {
            value: "Game-Show",
            label: "Game-Show"
        },
        {
            value: "History",
            label: "History"
        },
        {
            value: "Horror",
            label: "Horror"
        },
        {
            value: "Music",
            label: "Music"
        },
        {
            value: "Musical",
            label: "Musical"
        },
        {
            value: "Mystery",
            label: "Mystery"
        },
        {
            value: "Romance",
            label: "Romance"
        }
    ];

    function handleChangeImage(e) {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8081/movie/${id}`)
            .then(response => {
                console.log(response)
                const { name,
                    description,
                    genre,
                    rating,
                    releaseDate,
                    language,
                    tags,
                    director,
                    cast,
                    available,
                    movieURL,
                } = response.data

                setState({
                    ...state, name,
                    description,
                    genre,
                    rating,
                    releaseDate,
                    language,
                    director,
                    available,
                });

                setSelectedCast(cast);
                setSelectedTag(tags);

                setURL(movieURL);
                console.log(movieURL)
            })
            .catch(error => alert('Error Loading Update Movie'));
    }, []);

    const dropHandleChangeCast = (e) => {
        setSelectedCast(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const dropHandleChangeTag = (e) => {
        setSelectedTag(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            </div>
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Movie Name</label>
                        <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="Enter the Movie Name" required />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
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
                    </div>
                </div>
            </div>
            <br />
            <div className="form-group">
                <label className="text-muted">Movie Description</label>
                <textarea onChange={handleChange("description")} value={description} type="text" className="form-control" placeholder="Enter the Movie Description" pattern="{1,300}" required />
            </div>
            <br />
            <div class="row">
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
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Released Date</label>
                        <input type="date" onChange={handleChange('releaseDate')} value={releaseDate} className="form-control" placeholder="Enter the Release Date" required />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Director</label>
                        <input onChange={handleChange("director")} value={director} type="text" className="form-control" placeholder="Enter the Director" pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters." required />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Avalability</label>
                        <select id="available" value={available} onChange={handleChange("available")} className="form-control">
                            <option value="" disabled selected>Select an Avalability</option>
                            {/* <option value="true">Coming Soon</option> */}
                            <option value="true">Available</option>
                            <option value="false">Unavailable</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted"> Tags</label>
                        <Select
                            className="dropdown"
                            placeholder="Select Option"
                            value={dataTag.filter(obj => tags.includes(obj.value))} // set selected values
                            options={dataTag} // set list of the data
                            onChange={dropHandleChangeTag} // assign onChange function
                            isMulti
                            isClearable
                        />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted"> Cast</label>
                        <Select
                            className="dropdown"
                            placeholder="Select Option"
                            value={dataCast.filter(obj => cast.includes(obj.value))} // set selected values
                            options={dataCast} // set list of the data
                            onChange={dropHandleChangeCast} // assign onChange function
                            isMulti
                            isClearable
                        />
                    </div>
                </div>
            </div>


            <br />
            <div>
                <button className="btn btn-primary btn-lg btn-block">Update Movie</button>
            </div>
            <br />
        </form>
    )

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    // Save Image
    function handleUpload(e) {
        e.preventDefault();
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    setURL(url);
                });
        });
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({
            name,
            description,
            genre,
            rating,
            releaseDate,
            language,
            tags,
            director,
            cast,
            available,
        })
        axios
            .put(`http://localhost:8081/movie/${id}`, {
                name,
                description,
                genre,
                rating,
                releaseDate,
                language,
                tags,
                director,
                cast,
                available,
                movieURL,
            })
            .then(response => {

                console.log(response)
                const { name,
                    description,
                    genre,
                    rating,
                    releaseDate,
                    language,
                    tags,
                    director,
                    cast,
                    available,
                } = response.data

                //empty state
                setState({
                    ...state,
                    name,
                    description,
                    genre,
                    rating,
                    releaseDate,
                    language,
                    tags,
                    director,
                    cast,
                    available,
                });

                //show success alert
                // alert(`Staff Member ${firstName} is Updated`);
                Swal.fire(
                    `Movie ${name} is Updated`,
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
            <div className="container card">
                <div className="card-body">
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h1 align="center">Update Movie</h1>
                            <center>
                                <div class="row container ">
                                    <div class="col">
                                        <label className="text-muted"> <b>Upload Movie Image (This is Optional)</b></label><br /><br />
                                        <div >
                                            <form onSubmit={handleUpload}>
                                                <input type="file" onChange={handleChangeImage} />
                                                <button disabled={!file}>upload to firebase</button>
                                            </form>
                                            <br />
                                            <img src={movieURL} alt="" style={{ width: "250px", height: "300px" }} />
                                        </div>
                                    </div>
                                </div>
                            </center>
                            <br />
                            {showUpdateForm()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateStaffMember;