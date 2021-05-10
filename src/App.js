import logo from './logo.svg';
import Home from './pages/Home';
import Login from './components/layouts/login';
import SignUp from './components/layouts/signup';
import Footer from './components/common/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InteriorDesignerSignUp from './components/layouts/InteriorDesignerSignUp';
import Professional from './pages/Professional';
import Rooms from './pages/Rooms';
import DesignerDetail from './pages/DesignerDetail';
import Team from './pages/Team';
import ImgDetail from './pages/ImgDetail';
import DesignerProfile from './pages/DesignerProfile';
import MyProfile from './components/layouts/myProfile';
import ChangePassword from './components/layouts/changePassword';
import AddProjectProfile  from './components/AddProject';
import MessagePanel from './components/layouts/MessagePanel';



function App() {
  return (
    <Router basename={'/'}>
        <div className="App">
          {/* <Header /> */}
          {/* <Header3 />*/}
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
            <Route path={`${process.env.PUBLIC_URL}/change-password`} component={ChangePassword} />
            <Route path={`${process.env.PUBLIC_URL}/InteriorDesigner-signup`} component={InteriorDesignerSignUp} />
            <Route path={`${process.env.PUBLIC_URL}/Professional`} component={Professional} />
            <Route path={`${process.env.PUBLIC_URL}/Rooms`} component={Rooms} />
            <Route path={`${process.env.PUBLIC_URL}/Designer-detail`} component={DesignerDetail} />
            <Route path={`${process.env.PUBLIC_URL}/Img-detail`} component={ImgDetail} />
            <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
            <Route path={`${process.env.PUBLIC_URL}/view-profile`} component={DesignerProfile} />
            <Route path={`${process.env.PUBLIC_URL}/my-profile`} component={MyProfile} />
            <Route path={`${process.env.PUBLIC_URL}/add-project`} component={AddProjectProfile} />
            <Route path={`${process.env.PUBLIC_URL}/msg-panel`} component={MessagePanel} />
          
          
            


          </Switch>

        </div>
        <Footer />

      </Router>

  );
}

export default App;
