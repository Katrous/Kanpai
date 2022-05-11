import './index.scss';
import Home from './Home.js';
import Menu from './Menu.js';
import Contact from './Contact.js';

// react condition statements, page shows depending on router!
const Content = () => {
    return (
       <main className="main-section">
           {/* Call To Action */}
           <Home />
           {/* Menu Items */}
           <Menu />
           {/* Contact Page */}
           <Contact/>
           {/* Reservations Coming Soon Page! */}
           <div className="stars"></div>
           <div className="stars2"></div>
           <div className="stars3"></div>
       </main>
    )
}

export default Content;