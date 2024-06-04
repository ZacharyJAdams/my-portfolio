import { Outlet, useLocation, Link } from 'react-router-dom';

const Layout = () => {

    const location = useLocation();

    const renderNavbar = () => {

        if (location.pathname === '/projects' || location.pathname === '/Contact') {
          return (
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </nav>
          );
        } else {
          return (
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          );
        }

    };

    return (
        <div>
            <header>
                {renderNavbar()}
            </header>
            <main className="App">
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 Zachary Adams</p>
            </footer>
        </div>
    )
}

export default Layout