import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-links" style={{ fontSize: 35 }}>
          IN N OUT
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/notice" className="nav-links">
              공지사항
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/question_list" className="nav-links">
              1:1 문의
            </Link>
          </li>
          <div className="login">
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links" id="login">
                로그인
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
