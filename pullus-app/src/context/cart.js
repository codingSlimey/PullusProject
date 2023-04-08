import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		// Use a function to initialize the state with the items from the local storage
		const cart = JSON.parse(localStorage.getItem('cart'))
		return cart || []
	})

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	const addToCart = (item) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)
		if (existingItem) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			)
		} else {
			setCartItems([...cartItems, { ...item, quantity: 1 }])
		}
	}

	const removeFromCart = (itemToRemove) => {
		setCartItems(cartItems.filter((item) => item !== itemToRemove))
	}

	const increaseQuantity = (item) => {
		setCartItems(
			cartItems.map((cartItem) =>
				cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
			)
		)
	}

	const decreaseQuantity = (item) => {
		setCartItems(
			cartItems.map((cartItem) =>
				cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
			)
		)
	}

	const cartTotal = cartItems.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	)

	const cart = {
		items: cartItems,
		total: cartTotal,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
	}

	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}
