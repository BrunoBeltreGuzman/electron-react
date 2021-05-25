import React from "react";
import { Link } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "../../../public/css/styles.css";

export default function Nav() {
       React.useEffect(() => {
              nprogress.start();
              nprogress.done();
       }, []);
       /*
                            <li>
                                          <Link to="/">Index</Link>
                                   </li>
*/
       return (
              <div>
                     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                            <div class="container">
                                   <Link to="/" className="navbar-brand item">
                                          App
                                   </Link>
                                   <button
                                          className="navbar-toggler item"
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#navbarNav"
                                          aria-controls="navbarNav"
                                          aria-expanded="false"
                                          aria-label="Toggle navigation"
                                   >
                                          <span class="navbar-toggler-icon"></span>
                                   </button>
                                   <div
                                          class="collapse navbar-collapse"
                                          id="navbarNav"
                                   >
                                          <ul class="navbar-nav ml-auto">
                                                 <li class="nav-item">
                                                        <Link
                                                               to="/"
                                                               className="navbar-brand item"
                                                        >
                                                               Index
                                                        </Link>
                                                 </li>

                                                 <li class="nav-item">
                                                        <Link
                                                               to="/page"
                                                               className="navbar-brand item"
                                                        >
                                                               Page
                                                        </Link>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </nav>

                     <br />
                     <br />
              </div>
       );
}
