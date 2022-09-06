/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { categoryArr } from './constant';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { projectStorage } from '../firebase/config';
import { useEffect } from 'react';

const Navbar = ({ setImageList }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const imagesListRef = ref(projectStorage);

    const uploadFile = () => {
        if (imageUpload == null) return;
        console.log({ imageUpload })
        const storageRef = ref(projectStorage, file.name);
        uploadBytes(storageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prevState) => [...prevState, url]);
                });
            });
        });
    }, []);

    const handleChange = (e) => {
        console.log(e)
        const file = e.target.files[0]
        console.log(file)
        if (file && types.includes(file.type)) {
            setFile(file);
            setImageUpload(file);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const CategoryDropdown = () => {
        return (
            <select name="" id="">
                {categoryArr.map((value, index) => (
                    <option value={value} key={value + index}>{value}</option>
                ))}
            </select>
        )
    }
    return (
        <><nav className="navbar navbar-expand-lg text-secondary">
            <div className="container-fluid py-1 px-5">
                <div className="icons d-flex">
                    <div className="px-3">
                        <i className="fa-solid fa-gear" style={{ fontSize: "25px" }}></i>
                    </div>
                    <div className="px-3">
                        <i className="fa-solid fa-bell" style={{ fontSize: "25px" }}></i>
                    </div>
                </div>

                <div className="menu">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="collapse navbar-collapse rounded-pill px-2 p-1" style={{ backgroundColor: "black" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? 'bg-secondary rounded-pill nav-link text-white' : "bg-black nav-link text-secondary"} to="#">Timeline</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="#">Album</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="#">Events</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="#">Favorites</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="addBtn">
                    <button className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-circle-plus p-1"></i>
                        <span>Upload photos</span>
                    </button>
                </div>
            </div>
        </nav>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="title p-2">
                                <h5>Select Image</h5>
                                <div className="">
                                    <input type='file' onChange={handleChange} />
                                </div>
                            </div>
                            {error && <div className="error">{error}</div>}
                            {file && <div>{file.name}</div>}
                            <div className="category p-2 my-2">
                                <h5>Select Category</h5>
                                <CategoryDropdown />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={uploadFile}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar