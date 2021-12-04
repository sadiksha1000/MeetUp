import React from 'react'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <main className={classes.main}>
                {/* props.children le chai layout ko tag bhitra ko sabai element load garxa */}
                {props.children}
            </main>
        </div>
    )
}

export default Layout
