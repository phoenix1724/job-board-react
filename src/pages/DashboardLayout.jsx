import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import {BigSidebar, SmallSidebar } from '../components';
const Dashboard = () => {
    return (
        <Wrapper>
            <main className='dashboard'>
                <SmallSidebar />
                <BigSidebar />
                <div>
                    {/* <Navbar /> */}
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};
export default Dashboard;