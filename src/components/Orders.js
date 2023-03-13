import React from 'react';

export default function Orders({ item, onDelete }) {
    return (
        <div className='order'>
            <img className='order__img' src={"./img/" + item.image} />
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <button className='btn_delete' onClick={() => onDelete(item.id)}><img src='./img/trash.png' className='delete-icon' /></button>
        </div>
    )
}
