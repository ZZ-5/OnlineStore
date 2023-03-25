import React from 'react';

export default function Orders({ item, onDelete, decreaseOrder, increaseOrder }) {

    return (
        <div className='order'>
            <img className='order__img' src={"./img/" + item.image} />
            <h2>{item.title}</h2>
            <div className='order__quantity'>
                <button className='btn_order'>-</button>
                <div className='order__count'>{item.count}</div>
                <button className='btn_order' onClick={() => increaseOrder(item)}>+</button>
            </div>
            <p>{item.price}$</p>
            <button className='btn_delete' onClick={() => onDelete(item.id)}><img src='./img/trash.png' className='delete-icon' /></button>
        </div>
    )
}
