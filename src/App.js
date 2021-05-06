import logo from './logo.svg';
import Home from './pages/Home';
import Login from './components/layouts/login';
import SignUp from './components/layouts/signup';
import Footer from './components/common/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router basename={'/'}>
        <div className="App">
          {/* <Header /> */}
          {/* <Header3 />*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
            {/* 
            <Route path={`${process.env.PUBLIC_URL}/check-otp`} component={OTP} />
            
            <Route path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgotPassword} />
            <Route path={`${process.env.PUBLIC_URL}/change-password`} component={ChangePassword} />
            <Route path={`${process.env.PUBLIC_URL}/my-profile`} component={MyProfile} />
            <Route path={`${process.env.PUBLIC_URL}/ads-listing`} component={AdsListing} />
            <Route path={`${process.env.PUBLIC_URL}/ads-detail`} component={AdsDetail} />
            <Route path={`${process.env.PUBLIC_URL}/submit-ad`} component={SubmitAd} /> */}


          </Switch>

        </div>
        <Footer />

      </Router>

  );
}

export default App;
