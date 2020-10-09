import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/homePage';
import CategoryDe from './pages/categoryDetails';
import QuizPage from './pages/quizPage';
import QuizResult from './pages/quizResult';

export default function Routes()
{
return(
  <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:id" exact>
          <CategoryDe/>
        </Route>
        <Route path="/play/:categoryId/:level/:number" exact>
          <QuizPage/>
        </Route>
        <Route path="/result" exact>
          <QuizResult/>
        </Route>
      </Switch>
  </Router>
  </>
)
    
}