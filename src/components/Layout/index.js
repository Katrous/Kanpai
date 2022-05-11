import Sidebar from '../Sidebar/sidebar';
import Content from '../Content/'
import './index.scss';

const Layout = () => {
    return (
    <div class='main-section-div'> 
        <Sidebar />
        <Content />
    </div>
    )
}

export default Layout