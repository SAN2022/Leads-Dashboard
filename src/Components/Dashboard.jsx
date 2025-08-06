import TopNavBar from "./TopNavbar";
import LeadsHeader from "./LeadsHeader";
import Status from "./Statusbar";
import Toolbar from "./Toolbar";
import LeadsTable from "./LeadsTable";
import '../Index.css';

const Dashboard = () =>{
    return (
        <>
            <div className='w-full ml-8 md:ml-12 font-inter bg-gray-50'>
                <TopNavBar/>
                <LeadsHeader/>
                <Status/>
                <Toolbar/>
                <LeadsTable/>   
            </div>
        </>
    )
}
export default Dashboard;