import React from "react";

export const Item = ({ item, onAdd, onShowItem }) => {

    return (
        <div className="item">
            <img src={"./img/" + item.image} onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price}$</b>
            <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
        </div >
    )
}
