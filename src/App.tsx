import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card, {CardVariant} from './components/Card'
import EventExample from './components/EventExample'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'


function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to={'users'}>Пользователи</NavLink>
          <NavLink to={'todos'}>Список дел</NavLink>
        </div>
        <Routes>
          <Route path={'todos'} element={ <TodosPage /> } />
          <Route path={'todos'}>
              <Route path={':id'} element={ <TodoItemPage /> } />
          </Route>
          <Route path={'users'} element={ <UsersPage /> } />
          <Route path={'users'}>
              <Route path={':id'} element={ <UserItemPage /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
