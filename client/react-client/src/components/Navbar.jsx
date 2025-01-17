import React from 'react';
// import {Link} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { }
  }

  render() {
    return (
      <Router>
      <div className="top">
      <div className="topLeft">
      <img className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg_8wFuqGPaekTW9jqmMMJPGfDxcCSHhRBw&usqp=CAU"
              alt=""
            />
      </div>
      <div className="topCenter">
        <ul className="topList">

          <li className="topListItem">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>


          <li className="topListItem"> 
            <Link className="link" to="/AllMovies">
            MOVIES
            </Link>
          </li>

          <li className="topListItem">
          <Link className="link" to="/Watch">
           
            WATCH 
            </Link> 
                    
          </li>
         

        </ul>
      </div>
      <div className="topRight">
      
         
            <img className="img"
              
              src="data:image/png;base64,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"
              alt=""
            />
       
       
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/Login" >
                LOGIN
                </Link> 
            </li>
            <li className="topListItem">
            <Link className="link" to="/Sign_in">
                Sign_in
             </Link> 
            </li>
          </ul>
      
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    </Router>
    );
  }
}
export default Navbar;
