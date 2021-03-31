import { Component } from "react";
// import './xyz.css'
import '../public/RightBar.css'


class RightBar extends Component {
    render() {
        return (
            <div className="rightbar">
                <div class="row gutters-sm">
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body bg-primary">
                               <h1 class="bg-white">Programming language </h1>
                               <hr></hr>
                               <p1 >C</p1>
                               <hr></hr>
                               <p1>C++</p1>
                               <hr></hr>
                               <p1>python</p1>
                               <hr></hr>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body bg-danger">
                               <h1 class="bg-white"> Tools and Technology </h1>
                               <hr></hr>
                               <p1 >Machine learning</p1>
                               <hr></hr>
                               <p1>Web Dev</p1>
                               <hr></hr>
                               <p1>Data Analysis</p1>
                               <hr></hr>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gutters-sm">
                    <div class="col-sm-12">
                        <div class="card h-100">
                            <div class="card-body bg-secondary">
                               
                               <h1 class="bg-white">Project </h1>
                               <hr></hr>
                               <p1 >House price prediction</p1>
                               <hr></hr>
                               <p1>Large Number Calculator</p1>
                               <hr></hr>
                               <p1>Online Tutor finder website</p1>
                               <hr></hr>
                               
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RightBar