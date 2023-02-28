import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const history = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", password: "", mobile: ""
    })

    const HandleRegister = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/register", user).then((res) => {
            console.log(res)
        }, history("/login"))
    }

    return (
        <div>
            <section className="vh-100" style={{ backgroundcColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" value={user.name} onChange={(e) => {
                                                            setUser({ ...user, "name": e.target.value })
                                                        }} className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" value={user.email} onChange={(e) => {
                                                            setUser({ ...user, "email": e.target.value })
                                                        }} className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="mobile" value={user.mobile} onChange={(e) => {
                                                            setUser({ ...user, "mobile": e.target.value })
                                                        }} className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Mobile</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" value={user.password} onChange={(e) => {
                                                            setUser({ ...user, "password": e.target.value })
                                                        }} className="form-control" />
                                                        <label className="form-label" for="form3Example4cd">Password</label>
                                                    </div>
                                                </div>



                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submits" className="btn btn-primary btn-lg" onClick={HandleRegister}>Sign Up</button>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submits" className="btn btn-primary btn-lg" onClick={(e) => {

                                                        history('/login')
                                                    }}> Existing User ?</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="img" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )

}
export default Register;