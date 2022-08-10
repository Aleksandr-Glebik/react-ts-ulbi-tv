import React, {FC, useState} from 'react'

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler}/>
            <button onClick={clickHandler}>Click me!</button>
        </div>
    )
}

export default EventExample
