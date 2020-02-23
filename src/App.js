import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import ShopPage from './pages/shop/shop';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import {auth, createUserProfilDoc} from './firebase/firebase';


class App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null
      }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfilDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state);
        });
      } 
      
      this.setState({currentUser: userAuth});
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
      </div>
    );
  }
}

export default App;
