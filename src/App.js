import Header from "./components/Header";
import Footer from "./components/Footer";
import { Items } from "./components/Items";
import { useState, useMemo } from "react";
import { Categories } from "./components/Categories";
import { ShowFullItem } from "./components/ShowFullItem";

function App() {

  const [arr, setArr] = useState([
    {
      id: 1,
      title: 'Стул серый',
      image: 'chair-grey.jpg',
      category: 'chairs',
      description: 'Numquam repellendus a magnam',
      price: '49.99'
    },

    {
      id: 2,
      title: 'Стол в стиле лофт',
      image: 'table-loft.jpg',
      category: 'tables',
      description: 'Ipsam aperiam voluptates qui illum',
      price: '109.00'
    },

    {
      id: 3,
      title: 'Диван',
      image: 'sofa-loft.jpg',
      category: 'sofas',
      description: 'Repellendus sunt dolores architecto voluptatum',
      price: '219.99'
    },

    {
      id: 4,
      title: 'Светильник лофт',
      image: 'light-loft.jpg',
      category: 'lights',
      description: 'Excepturi deleniti adipisci voluptatem et neque optio illum',
      price: '59.99'
    },

    {
      id: 5,
      title: 'Диван лофт',
      image: 'divan-loft3.jpg',
      category: 'sofas',
      description: 'Pariatur et magnam ea doloribus similique voluptatem rerum quia',
      price: '250.00'
    },

    {
      id: 6,
      title: 'Стул красный',
      image: 'chair-red.jpg',
      category: 'chairs',
      description: 'Reiciendis est magnam amet nemo iste recusandae impedit',
      price: '55.00'
    },
  ])

  const [orders, setOrders] = useState([])
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('')
  const [bagCount, setBagCount] = useState(0)

  const filtered = useMemo(() => {
    const search = arr.filter(p => {
      return category === 'all'
        ? p.title.toLowerCase().includes(filter.toLowerCase()) && arr
        : p.title.toLowerCase().includes(filter.toLowerCase()) && p.category.includes(category)
    })
    return search
  }, [arr, category, filter])

  function addToOrder(item) {

    const id = orders.length === 0 ? 1 : orders[orders.length - 1].id + 1;

    const newItem = {
      id: id,
      title: item.title,
      image: item.image,
      category: item.category,
      description: item.description,
      price: item.price
    }
    setOrders([...orders, newItem])
    setBagCount(bagCount + 1)
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id))
    setBagCount(bagCount - 1)
  }

  const chooseCategory = (category) => {
    setCategory(category)
  }

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }

  return (
    <div className="wrapper">

      <Header orders={orders} onDelete={deleteOrder} cartOpen={cartOpen} setCartOpen={setCartOpen} setFilter={setFilter} bagCount={bagCount} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={filtered} onAdd={addToOrder} arr={arr} setBagCount={setBagCount} />
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder}
        onShowItem={onShowItem} setShowFullItem={setShowFullItem} />}
      <Footer />
    </div>
  );
}

export default App;
