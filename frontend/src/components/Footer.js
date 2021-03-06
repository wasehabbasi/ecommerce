import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col-sm-4 col-xs-6">
            <h4>Customer Services</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={`/Contact`}>Contact Us</Link>
              </li>
              {/* <li>
                <a href="#">Report Abuse</a>
              </li>
              <li>
                <a href="#">Submit a Dispute</a>
              </li> */}
              <li>
                <Link to={`/Privacy`}> Policies And Rules</Link>
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col-sm-4 col-xs-6">
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={`/About`}> About us </Link>
              </li>
              {/* <li>
                <a href="#">Sitemap</a>
              </li> */}
            </ul>
          </div>
          {/* column 3 */}
          <div className="col-sm-4 col-xs-6" id="app">
            <h4>Download</h4>
            <ul className="list-unstyled">
              <li className="android-btn btn">
                <a href="#">
                  Available on <br />
                  <small>
                    <b>Google Play</b>
                  </small>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm d-flex justify-content-center">
            &copy; {new Date().getFullYear()} flicky | All rights reserved |{' '}
            <Link to={`/Privacy`}> Terms of services </Link> |{' '}
            <Link to={`/Privacy`}> Privacy </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
