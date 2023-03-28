import React, { } from 'react'
import Orders from './Orders';

const showOrders = (orders, onDelete, decreaseOrder, increaseOrder) => {

    let Sum = orders.reduce((sum, el) => {
        return +el.totalPrice + sum;
    }, 0)

    return (<>
        {orders.map(el => (
            <Orders key={el.id} item={el} onDelete={onDelete} decreaseOrder={decreaseOrder} increaseOrder={increaseOrder} orders={orders} />
        ))}
        <div className='sum'>Сумма заказа:<span className='sum-value'>{new Intl.NumberFormat().format(Sum)}$</span></div>
    </>)
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

export default function Header({ orders, onDelete, cartOpen, setCartOpen, decreaseOrder, increaseOrder, setOrders }) {

    let sumCountOrders = orders.reduce((sum, el) => {
        return sum + +el.count;
    }, 0)

    return (
        <header>
            <div className='header'>
                <span className='logo'>House Stuff</span>

                <ul className='nav'>
                    <button onClick={() => setCartOpen(cartOpen = !cartOpen)}
                        className={`btn_bag ${cartOpen && 'btn_bag-active'}`}>
                        {/* <img className='nav__img nav__item' src="./img/cart.png" alt='Корзина' /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill={orders.length === 0 ? 'black' : 'green'} className="bi bi-cart4"
                            viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        {sumCountOrders === 0
                            ? null
                            : <div className='bag__count'>{sumCountOrders}</div>
                        }
                    </button>
                    {cartOpen && (
                        <div className='shop-cart'>
                            {orders.length > 0 ?
                                showOrders(orders, onDelete, decreaseOrder, increaseOrder, setOrders) : showNothing()}
                        </div>
                    )}
                    <li className='nav__item'>О нас</li>
                    <li className='nav__item'>Контакты</li>
                    <li className='nav__item'>Личный кабинет</li>
                </ul>
            </div>
            <div className='presentation'></div>
        </header >
    )
}
