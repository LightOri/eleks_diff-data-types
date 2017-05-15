import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/page2">Page2</Link>
                        </li>
                        <li>
                            <Link to="/page3">Page3</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
  }
}

export default Header;