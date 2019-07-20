import { NavLink } from 'react-router-dom';
import React from 'react';
const assets = require.context('../../public/assets');
const links = assets('./content/navLinks.json');
// const Jobs = lazy(() => import('./routes/Jobs'));

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <ul className="header -flex">
            {mapObject(links, function (index, link) {

                return (
                <li className="block">
                    <NavLink exact={link.exact} activeClassName='is-active' to={link.to}>
                        <span className="title">{link.title}</span>
                        <span className="description">{link.description}</span>
                    </NavLink>
                </li>
                )
            })}
        </ul>
        );
    }
}

export default Header;