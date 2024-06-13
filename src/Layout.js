import { Outlet, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar'


const Layout = () => {

    const location = useLocation();

    return (
        <div>
            <header>
                {location.pathname === '/' ? <Navbar Home={true} /> : <Navbar Home={false} />}
            </header>
            <main className="App">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout