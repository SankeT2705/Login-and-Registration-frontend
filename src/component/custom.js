import React, { useState } from "react";
import axios from "axios";
const Custom = ({ userdata }) => {
    const [custom1, setcustom1] = useState({
        userid: userdata._id, player1: "", player2: "", player3: "", player4: "", status: "true"
    })
    const [custom1data, setcustom1data] = useState()

    const enter1 = (event) => {
        event.preventDefault();
        console.log(userdata._id)
        if (userdata._id === undefined) {
            alert("User not register")
        } else {
            setcustom1({ ...custom1, "userid": userdata._id })
            axios.post("http://localhost:9002/enter", custom1).then((res) => {
                setcustom1data(res.data)
                console.log(res.data.info)
                alert(res.data.message)
            })
        }
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 m-4 text-center">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">4pm Erangle Squad</h4>
                    </div>
                    <div className="card-body ">
                        <h1 className="card-title pricing-card-title">$20</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><input type="number" className="form-control" value={custom1.player1} onChange={(e) => {
                                setcustom1({ ...custom1, "player1": e.target.value })
                            }} placeholder="Player1 id" /></li>
                            <li><input type="number" className="form-control" value={custom1.player2} onChange={(e) => {
                                setcustom1({ ...custom1, "player2": e.target.value })
                            }} placeholder="Player2 id" /></li>
                            <li><input type="number" className="form-control" value={custom1.player3} onChange={(e) => {
                                setcustom1({ ...custom1, "player3": e.target.value })
                            }} placeholder="Player3 id" /></li>
                            <li><input type="number" className="form-control" value={custom1.player4} onChange={(e) => {
                                setcustom1({ ...custom1, "player4": e.target.value })
                            }} placeholder="Player4 id" /></li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={enter1}>Enter</button>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">5pm Miramar Squad</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$20 </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><input type="number" className="form-control" placeholder="Player1 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player2 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player3 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player4 id" /></li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Enter</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">6pm Miramar Squad</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$20 </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><input type="number" className="form-control" placeholder="Player1 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player2 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player3 id" /></li>
                            <li><input type="number" className="form-control" placeholder="Player4 id" /></li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Enter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Custom;