import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from '../components/List'
import axios from 'axios'
import UserItem from '../components/UserItem'
import { useNavigate } from 'react-router-dom'

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    useEffect( () => {
      fetchUsers()
    }, [])

    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (error) {
        console.log('error', error);
      }
    }

    return (
        <List items={users} renderItem={(user: IUser) =>
          <UserItem
            onClick={(user) => navigate(`/users/${user.id}`, { replace: true })} user={user} key={user.id}/>}
          />
    )
}

export default UsersPage
