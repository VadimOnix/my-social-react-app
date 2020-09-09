import React from 'react'
import classes from "./Header.module.css"

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span>
          D
        </span>
      </div>
      <nav className={classes.navigate}>
        <ul>
          <li className={classes.listItem}>Главная</li>
          <li className={classes.listItem}>Поиск</li>
          <li className={classes.listItem}>О нас</li>
        </ul>
      </nav>
      <div className="auth">
        войти и зарегистрироваться
      </div>
    </header>
  )
}
