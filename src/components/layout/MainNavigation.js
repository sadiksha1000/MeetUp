import React from 'react'
// Link is used for loading page without making extra requests and without requesting for extra pages.
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const FavoritesCtx=useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    {/* Linking the routes to navigation */}
                    <li>
                        <Link to='/'>All MeetUps</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New MeetUp</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites
                        <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
