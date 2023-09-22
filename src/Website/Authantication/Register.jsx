import React, { useState } from 'react'

const Regsiter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mob_no: '',
        address: '',
        password: '',
        cpassword: ''
    })

    const onInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        fetch('https://vsmart.ajspire.com/api/userregister', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }
    return (
        <div className="container pt-5 border" style={{ marginTop: '40px' }}>
            <div className='row '>
                <div className="text-center">
                    <h2 className="section-title px-5 text-danger"><span className="px-2">Welcome To D-Mart</span></h2>
                    <h4 className=" px-5 text-dark"><span className="px-2">Join Now!</span></h4>
                    <p>
                        setup a new account in few clicks
                    </p>
                </div>
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-4 mb-5">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form autoComplete='off'>
                                <div className="control-group mt-5">
                                    <lable classNameName='ml-2'>Name:</lable>
                                    <input type="text" className="form-control" name='name' id="name" placeholder="Enter Your Name here.." onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <lable classNameName='ml-2'>Email:</lable>
                                    <input type="email" className="form-control " name="email" id="email" placeholder="Enter your email" onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <lable classNameName='ml-2'>Mobile Number:</lable>
                                    <input type="email" className="form-control " name="mob_no" id="mob_no" placeholder="Enter your Mobile Number" onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <lable classNameName='ml-2'>Address:</lable>
                                    <input type="email" className="form-control " name="address" id="address" placeholder="Enter Your Address" onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <lable classNameName='ml-2'>Password:</lable>
                                    <input type="email" className="form-control " name="password" id="password" placeholder="Enter Password" onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <lable classNameName='ml-2'>Confirm Password:</lable>
                                    <input type="email" className="form-control " name="cpassword" id="cpassword" placeholder="Confirm the Password" onChange={(event) => onInputChange(event)}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">

                                    <button className="btn btn-danger ml-2 py-2 px-4" type="submit" id="sendMessageButton" onClick={(event) => onSubmit(event)}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div classNameName='text-center'>
                    <p>already have an account? <a href=
                    ".." classNameName='text-danger'>Login Here</a></p>
                </div>
            </div>
        </div>
    )

}
export default Regsiter