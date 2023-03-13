import React from 'react'

export const ShowFullItem = ({ item, onShowItem, onAdd, setShowFullItem }) => {

    return (
        <div className='full-item'
            onClick={() => setShowFullItem(false)}>
            <div className='full-item__window'>
                <img src={"./img/" + item.image} onClick={() => onShowItem(item)} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <b>{item.price}$</b>
                <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
            </div>
        </div>
    )
}
