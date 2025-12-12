import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: Math.min(p.quantity + quantity, product.inventory ?? 99) }
            : p
        )
      }
      return [...prev, { ...product, quantity: Math.min(quantity, product.inventory ?? 99) }]
    })
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setItems(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: Math.max(1, Math.min(quantity, p.inventory ?? 99)) } : p))
    )
  }

  const clear = () => setItems([])

  const summary = useMemo(() => {
    const count = items.reduce((acc, p) => acc + p.quantity, 0)
    const total = items.reduce((acc, p) => acc + p.quantity * (p.priceNumber ?? 0), 0)
    return { count, total }
  }, [items])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear, summary }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
