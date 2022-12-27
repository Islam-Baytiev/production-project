import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {toogleTheme, theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toogleTheme}>TOGGLE</button>
            <AppRouter />
        </div>
    );
};

export default App;
