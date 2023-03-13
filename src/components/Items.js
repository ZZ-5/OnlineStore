import React from "react";
import { Item } from "./Item";
import { useState } from "react";

export const Items = ({ items, onAdd, onShowItem }) => {
    return (
        <div className="items">
            {items.map(el => (
                <Item key={el.id} item={el} onAdd={onAdd} onShowItem={onShowItem} />
            ))}
        </div>
    )
}