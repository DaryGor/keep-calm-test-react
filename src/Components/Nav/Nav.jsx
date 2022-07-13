import './Nav.scss'
import Link from './Link/Link'

const Nav = () => {
    return (
        <nav className="nav container">
            <Link link={"Lorem"} path="/lorem"/>
            <Link link={"Ipsum"} path="/ipsum"/>
        </nav>
    );
}

export default Nav;