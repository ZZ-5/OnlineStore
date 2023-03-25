import React from "react";

export const Item = ({ item, onAdd, onShowItem }) => {

    return (
        <div className="item">
            <img src={"./img/" + item.image} onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="item__price">
                <b>{item.price}$</b>
                <button className="btn_add-to-cart" onClick={() => onAdd(item)}>+</button>
            </div>

        </div >
    )
}
