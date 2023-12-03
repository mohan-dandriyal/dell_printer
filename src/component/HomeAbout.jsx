

import React from 'react'
import { Link } from 'react-router-dom'

function HomeAbout() {
  return (
    <>
        <div className="container">
            <div className="row mb-5 align-items-center" style={{rowGap : '30px'}}>
                <div className="col-lg-6">
                    <h3 className='pb-3'>Lorem ipsum dolor sit.</h3>
                    <p className='pb-3' style={{lineHeight : '1.6'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore maiores assumenda earum perferendis nobis ab dicta voluptas voluptates tempora voluptate dignissimos, iusto nulla molestiae? Id inventore, iusto, impedit aspernatur assumenda mollitia officia vitae facilis nobis quaerat obcaecati? Molestias, laboriosam. Repellat in ea impedit quas libero ducimus velit eos quae est?</p>
                    <Link className=" btn-loc py-2" to="/about">Read More</Link>
                </div>
                <div className="col-lg-6 ">
                    <img src="https://img.freepik.com/free-photo/printer-with-white-sheets_1232-570.jpg?w=826&t=st=1701611036~exp=1701611636~hmac=689f079102d44501abbd1ea0154899cd6845857353dd66745cd75b23a26fbe02"  className='w-100 rounded' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeAbout