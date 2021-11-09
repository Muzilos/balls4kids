import './App.css';
import { Home, HomePage } from './pages/HomePage';
import { About, AboutPage } from './pages/About';
import { Contact, ContactPage } from './pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import { DonatePage } from './pages/Donate';
import { GetABallPage } from './pages/GetABall';
import { AmplifySignOut } from '@aws-amplify/ui-react'
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Route exact path="" component={HomePage} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/donate" component={DonatePage} />
        <Route path="/get" component={GetABallPage}/>
        <Route path="/admin" component={AdminPage} />
      </BrowserRouter>
      {/* <Home /> */}
      {/* < About /> */}
      {/* < Contact /> */}
    </>
  );
}

export default App;
