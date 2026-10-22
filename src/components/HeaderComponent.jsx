import "./HeaderComponent.css"
import {Link} from "react-router-dom"


function HeaderComponent () {
    return (
      <header className="header">
        <h1 className="link">Welcome!</h1>
        <nav>
            <ul className="link-list">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className="link" to="/Test">Test</Link>
                </li>
            </ul>
        </nav>
      </header>
    )
}

export default HeaderComponent;
