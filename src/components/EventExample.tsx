import React, {FC, useState} from 'react'

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag');

    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('Drop');

    }

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler}/>
            <button onClick={clickHandler}>Click me!</button>
            <div onDrag={dragHandler}
                 draggable
                 style={{
                    width: '200px',
                    height: '200px',
                    background: 'red'
                }}></div>
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={dragWithPreventHandler}
                 style={{
                    width: '200px',
                    height: '200px',
                    background: isDrag
                      ? 'blue'
                      : 'red',
                    marginTop: '15px'
                 }}></div>
        </div>
    )
}

export default EventExample
