import { React, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Auth from './Auth';

const Login = () => {
    const notify = (M) => toast.error(M);
    const { http, setToken, token } = Auth();
    const [btnDiseble, setDisebale] = useState(0);
    const navigate = useNavigate()
   
    useEffect(() => {
        if (token != null) {
            navigate("/");
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [navigate, token]);

    const [Login, SetLogin] = useState({ email: '', password: '' });

    const OninputChange = (e) => {
        SetLogin({ ...Login, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        http.post("/user/login", Login)
            .then((res) => {
                console.log(res.data.user_data);
                if (res.data.token) {
                    setToken(res.data.user_data, res.data.token);
                    navigate("/");
                } else {
                    notify(res.data.message);
                }
                setDisebale(0);
            })
            .catch((error) => {
                // notify("The provided credentials are invalid");
                setDisebale(0);
            });
    }

    return (
        <div className="container pt-5 border mt-5">
            <div className='row '>
                <div className="text-center">
                    <h2 className="section-title px-5 text-danger"><span className="px-2">Welcome To D-Mart</span></h2>
                </div>
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-4 mb-5">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate="novalidate" autoComplete='off'>
                                <div className="control-group">
                                    <input type="email" className="form-control mt-5" id="email" name="email" onChange={(e) => OninputChange(e)} placeholder="Username/Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="password" className="form-control " id="password" name="password" onChange={(e) => OninputChange(e)} placeholder="Password"
                                        required="required" data-validation-required-message="Please enter your password" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className=''>
                                    <button className="btn btn-danger py-2 px-4" type="submit" onClick={(e) => onSubmit(e)} id="sendLoginButton">Login</button>

                                    <Link to='/Register'>
                                        <button className="btn btn-danger ml-2 py-2 px-4" type="submit" id="sendRegisterButton">Register</button>
                                    </Link>
                                    <a href=".." className='ml-5 text-danger'>Forgot Password</a>
                                </div>

                                <div className=''>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login