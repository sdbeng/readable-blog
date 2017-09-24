import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
      <header className='App'>
        <h1>Readable</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> |
        <NavLink to="/category1" activeClassName="is-active">Category-1</NavLink> |
        <NavLink to="/category2" activeClassName="is-active">Category-2</NavLink> |
        {/* <NavLink to="/edit/:id" activeClassName="is-active">Edit Expense</NavLink> | */}
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </header>
    )

export default Header
