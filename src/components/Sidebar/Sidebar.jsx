import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul>
        <li className={classes.listItem}>
          <NavLink to="/" activeClassName="selected">
            Моя страница
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink to="/messages" activeClassName="selected">
            Сообщения
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink to="/galery" activeClassName="selected">
            Галерея
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
