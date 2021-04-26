import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores } from './pages';
import { Header, Footer } from './layout';

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route exact path = "/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz /></Route>
                    <Route path="/highscores"><Highscores /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App ;
