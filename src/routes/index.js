// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';
import Home from '../pages/Home';
import Exercise from '../pages/Exercise';
import Learning from '../pages/Learning';
import Meditation from '../pages/Meditation';
import NewIdea from '../pages/NewIdea';
import Nutrition from '../pages/Nutrition';

export default function Routes({ user }) {
  return (
    <>
      <div>
       <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} />} />
        <Route exact path="/home" component={() => <Home user={user}/>} />
        <Route exact path="/exercise" component={() => <Exercise user={user} />} />
        <Route exact path="/learning" component={() => <Learning user={user}/>} />
        <Route exact path="/meditation" component={() => <Meditation user={user}/>} />
        <Route exact path="/newIdea" component={() => <NewIdea  user={user}/>} />
        <Route exact path="/nutrition" component={() => <Nutrition user={user}/>} />
        </Switch>
      </div>
    </>
  );
}
