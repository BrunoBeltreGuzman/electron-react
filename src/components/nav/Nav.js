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

       return (
              <div>
                     <nav>
                            <ul>
                                   <li>
                                          <Link to="/">Index</Link>
                                   </li>
                                   <li>
                                          <Link to="/page">Page</Link>
                                   </li>
                            </ul>
                     </nav>
              </div>
       );
}
