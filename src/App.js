import Header from './components/common/app/Header';
import UsersBlock from './components/common/app/Users/UsersBlock';
import UserBlock from './components/common/app/Users/UserBlock';
import UserPosts from './components/common/app/Users/UserPosts';
import { Switch, Route } from 'react-router';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>

      <Switch>
        <Route exact path='/' component={UsersBlock}/>
        <Route path='/users' component={UserBlock}/>
        <Route path='/posts' component={UserPosts}/>
      </Switch>
    </div>
  );
};

export default App;
