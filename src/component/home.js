import React from "react";
const Home = ({ setuser, userdata }) => {

    return (
        <div className="m-4">

            <div className="card text-center">
                <div className="card-header display-6 fw-bold">
                    Profile
                </div>
                <div className="card-body">
                    <p className="card-text display-7 fw-bold">Name:{userdata.name} </p>
                    <p className="card-text display-7 fw-bold">Email:{userdata.email} </p>
                    <p className="card-text display-7 fw-bold">Mobile:{userdata.mobile} </p>
                </div>
                <div className="card-footer text-muted">
                    <a href="/" className="btn btn-primary">Log Out</a>
                </div>
            </div>

            <div className="container-fluid border text-center  bg-light py-5"  >
                <h1 className="display-5 fw-bold">Welcome to BGMI CUSTOMS</h1>
                <p className="  text-center fs-4"> This Platform Provide you a lot of opportunity in Esport. We have here daily 4pm to 11 pm Customs. Hacker free and high Competition experience at very low cost. Fast result and proper supervision in match to increase user experience & More.. </p>
                <button className="btn btn-primary btn-lg" type="button">See Schedule</button>
            </div>

            <div className="container px-4 py-5 bg-light border" id="featured-3">
                <h2 className="pb-2 border-bottom">How To Join</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
                    <div className="feature col  ">

                        <h3 className="fs-2">STEP 1: Registration </h3>
                        <p> For Registration Click on "Custom" Section. Fill details of Your Squad. Then Make a payment . After Successful payment You receive email and then "Room detail section" open </p>
                        <a href="/" className="icon-link d-inline-flex align-items-center btn btn-danger">
                            Go To Registration
                        </a>
                    </div>
                    <div className="feature col">

                        <h3 className="fs-2">Step 2: Id Pass &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                        <p>After Successful Transaction you will get all room info like slot-list, id-pass in "MyRoom" section. Room Id pass dispaly before 20 minute of match.  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <a href="/" className="icon-link d-inline-flex align-items-center btn btn-danger">
                            See Slot-list & Id-Pass
                        </a>
                    </div>
                    <div className="feature col">

                        <h3 className="fs-2">Step 3: Result &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
                        <p> After Match within 30 minutes Result will be display in "Result" section. After match player can report any issue in "report" section (open for only 30 min).  </p>
                        <a href="/" className="btn btn-danger">
                            See Result
                        </a>
                    </div>
                </div>

            </div>

            <nav class="navbar bg-body-tertiary ">
                <div class="container-fluid ">
                    <a class="navbar-brand display-7 fw-bold" href="/">All Right Reserved To BGMI-CUSTOM</a>
                </div>
            </nav>
        </div>


    );
}
export default Home;