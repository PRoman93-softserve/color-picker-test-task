import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {COLOR_PICKER_PAGE, ERROR_PAGE, MAIN_PAGE} from '../accets/constants';
import './App.css';
import {ErrorPage} from './errorPage/errorPage';
import {StartPage} from './startPage/startPage';


const ColorPickerContainer = React.lazy(() => import('./colorPickerPage/colorPickerPageContainer') as any);

function App() {
    return (
        <>
            <div className="App">
                <Switch>
                    <Route exact path={'/'} component={StartPage}/>
                    <Route exact path={MAIN_PAGE} component={StartPage}/>
                    <Route exact path={COLOR_PICKER_PAGE} render={() => <React.Suspense fallback={<h1>Loading...</h1>}>
                        <ColorPickerContainer/>
                    </React.Suspense>}
                    />
                    <Route exact path={ERROR_PAGE} component={ErrorPage}/>
                </Switch>
            </div>
        </>
    )
        ;
}

export default App;
