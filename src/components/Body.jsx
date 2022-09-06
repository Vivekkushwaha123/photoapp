import React from 'react'

const Body = ({ imageList, searchedImage }) => {
    console.log(!searchedImage)
    const date = new Date();
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return (
        <div className='row py-1 px-5'>
            <div className="col-3" style={{ fontFamily: "Cormorant Upright" }}>
                <p className='text-primary fs-1 m-0'>Today</p>
                <p className='text-secondary fs-5'>{daysArr[date.getDay()]} , {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</p>
            </div>

            {searchedImage ? <div className="col-9 row">
                {imageList?.map((images, index) => {
                    return (<div className="col-2 p-3 my-3" key={images + index} >
                        <img src={images} alt={images} height="100%" width="100%" style={{ objectFit: "contain", overflow: "hidden" }} className="rounded" />
                    </div>)
                })}
            </div> : <div className="col-9 row">
                {searchedImage?.map((images, index) => {
                    return (<div className="col-2 p-3 my-3" key={images + index} >
                        <img src={images} alt={images} height="100%" width="100%" style={{ objectFit: "contain", overflow: "hidden" }} className="rounded" />
                    </div>)
                })}
            </div>}
            
            

        </div>
    )
}

export default Body