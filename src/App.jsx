import Home from './Routing/Home';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LawyerDashboard from './pages/LawyerDashboard';
import { CaseProvider } from './components/CaseContext';
import LawyerMeetings from './pages/LawyerMeetings';
import LawyerMessage from './pages/LawyerMessage';
import LawyerProfile from './pages/LawyerProfile';
import LawyerSettings from './pages/LawyerSettings';
import LawyerConsultations from './pages/LawyerConsultations';
import LawyerCases from './pages/LawyerCases';
import LawyerDocument from './pages/LawyerDocument';
import ClientDashboard from './pages/ClientDashboard';
import LawyerList from './pages/LawyerList';
import ClientProfile from './pages/ClientProfile';
import ClientConsultation from './pages/ClientConsultation';
import ClientMessage from './pages/ClientMessage';
import ClientMycases from './pages/ClientMycases';
import ClientRegisterCase from './pages/ClientRegisterCase';
import ClientSettings from './pages/ClientSettings';
import LawyerFilecase from './pages/LawyerFilecase';
import ClientUploadDoc from './pages/ClientUploadDoc';

function App() {
  return (

  <>
  <CaseProvider>
    <Router>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/Services' element = {<Services/>}/>
      <Route path = '/About' element = {<About/>}/>
      <Route path = '/Contact' element = {<Contact/>}/>
      <Route path = '/lawyer-dash' element = {<LawyerDashboard/>}/>
      <Route path = '/lawyer-dash/lawyerMeetings' element = {<LawyerMeetings/>}/>
      <Route path = '/lawyer-dash/lawyerMessages' element = {<LawyerMessage/>}/>
      <Route path = '/lawyer-dash/lawyerProfile' element = {<LawyerProfile/>}/>
      <Route path = '/lawyer-dash/lawyerSettings' element = {<LawyerSettings/>}/>
      <Route path = '/lawyer-dash/lawyerConsultations' element = {<LawyerConsultations/>}/>
      <Route path = '/lawyer-dash/lawyerCases' element = {<LawyerCases/>}/>
      <Route path = '/lawyer-dash/lawyerFileCase' element = {<LawyerFilecase/>}/>
      <Route path = '/lawyer-dash/lawyerDocuments' element = {<LawyerDocument/>}/>
      <Route path = '/client-dash' element = {<ClientDashboard/>}/>
      <Route path = '/client-dash/search-lawyers' element = {<LawyerList/>}/>
      <Route path = '/client-dash/clientProfile' element = {<ClientProfile/>}/>
      <Route path = '/client-dash/clientConsultation' element = {<ClientConsultation/>}/>
      <Route path = '/client-dash/clientMessage' element = {<ClientMessage/>}/>
      <Route path = '/client-dash/clientCases' element = {<ClientMycases/>}/>
      <Route path = '/client-dash/clientRegisterCase' element = {<ClientRegisterCase/>}/>
      <Route path = '/client-dash/clientSetting' element = {<ClientSettings/>}/>
      <Route path = '/client-dash/clientDocument' element = {<ClientUploadDoc/>}/>
      <Route path = '/dashboard-lawyer' element = {<LawyerDashboard/>}/>
      <Route path = '/dashboard-client' element = {<ClientDashboard/>}/>


    </Routes>
    </Router>
    </CaseProvider>
    </>    
  );
}

export default App