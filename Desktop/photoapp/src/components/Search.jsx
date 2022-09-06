import React from 'react'

const Search = ({ searchedImage, setSearchedImage, imageList }) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        if (!e.target.value) {
            setSearchedImage(imageList)
            return
        }
        imageList.forEach(element => {
            element.includes(e.target.value) ? setSearchedImage([element]) : setSearchedImage(imageList)
        });

    }
    return (
        <>
            <><nav className="navbar navbar-expand-lg text-secondary">
                <div className="container-fluid p-1 px-5">
                    <div className="icons d-flex">
                        <p className='text-primary fs-1' style={{ fontFamily: "Cormorant Upright" }}>Library</p>
                    </div>


                    <div className="searchBtn">
                        <div className=" p-2 rounded-pill border">
                            <input type="text" name="search" id="search" placeholder='search all photos' className='border-0 bg-dark px-2 text-white' onChange={handleChange} />
                            <i className="fa-solid fa-magnifying-glass px-1" style={{ fontSize: "25px" }}></i>
                        </div>
                    </div>
                </div>
            </nav></>
        </>
    )
}

export default Search