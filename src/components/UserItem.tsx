import React, { FC } from 'react'
import {IUser} from '../types/types'

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '10px', border: '1px solid gray'}}>
            {user.id}. {user.name} проживает в городе: {user.address.city}
            на улиые {user.address.street}
        </div>
    )
}

export default UserItem
