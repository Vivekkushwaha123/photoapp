import React from 'react'
import { categoryArr } from './constant';
import { useState } from 'react';

const Category = () => {

    const [newCategory, setNewCategory] = useState()

    const addNewCategory = () => {
        categoryArr.push(newCategory)
    }

    const handleChange = (e) => {
        setNewCategory(e.target.value)
    }

    const AllCategory = ({ props }) => {
        return (
            <span className='text-secondary pe-4 fs-5'>{props}</span>
        )
    }

    return (
        <div className="px-5 row">
            <div className='d-flex justify-content-between'>
                <div className="d-flex col-10">
                    {categoryArr.map((event, index) => {
                        return (
                            <AllCategory props={event} key={event + index} />
                        )
                    })}
                </div>

                <div className="addCategory col-2">
                    <button className='btn btn-secondary rounded-pill' data-bs-toggle="modal" data-bs-target="#newCategory">
                        <i className="fa-solid fa-plus px-2 fs-6"></i>
                        <span className='fs-6'> New Category</span>
                    </button>
                </div>
            </div>
            <div className='bg-secondary  my-2 ' style={{ height: "1px" }} />

            <div className="modal fade" id="newCategory" tabIndex="-1" aria-labelledby="addCategoryModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCategoryModal">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Add New Category</h5>
                            <input type="text" onChange={handleChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={addNewCategory}> Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Category