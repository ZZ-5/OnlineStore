import React, { useState } from 'react'

export const Categories = ({ chooseCategory, setFilter }) => {

    const [categories, setCategoris] = useState([
        {
            key: 'all',
            name: 'Всё'
        },
        {
            key: 'chairs',
            name: 'Стулья'
        },
        {
            key: 'tables',
            name: 'Столы'
        },
        {
            key: 'sofas',
            name: 'Диваны'
        },
        {
            key: 'lights',
            name: 'Светильники'
        }
    ])
    return (
        <div className='catigories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
            <input placeholder='Поиск...' className='search' type='text'
                onChange={e => setFilter(e.target.value)}
            />
        </div>
    )
}
