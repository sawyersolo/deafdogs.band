import React from 'react'
import { useCart } from '../../store/CartContext.jsx'
import { redirectToStripeCheckout } from '../../lib/stripe.js'

export default function CartModal({ onClose }) {
  const { items, removeItem, updateQuantity, clear, summary } = useCart()

  const handleCheckout = async () => {
    if (!items.length) return
    const lineItems = items.map(i => ({
      price: i.stripePriceId,
      quantity: i.quantity,
    }))
    await redirectToStripeCheckout(lineItems)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        className="surface"
        style={{
          height: '100%',
          width: '100%',
          maxWidth: 420,
          borderRadius: '0',
          borderLeft: '1px solid rgba(255,255,255,0.12)',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '.9rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Cart</div>
            <div style={{ fontSize: '.8rem', opacity: 0.7 }}>{summary.count} items</div>
          </div>
          <button className="icon-btn" onClick={onClose}>✕ Close</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '.4rem' }}>
          {!items.length && <div style={{ opacity: 0.7, fontSize: '.85rem' }}>Nothing in the ritual yet.</div>}

          {items.map(item => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr auto',
                gap: '0.8rem',
                marginBottom: '1rem',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div style={{ fontSize: '.8rem' }}>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ opacity: 0.7 }}>{item.variant}</div>
                <div style={{ marginTop: '.2rem' }}>${(item.priceNumber ?? 0).toFixed(2)}</div>
                {typeof item.inventory === 'number' && (
                  <div style={{ fontSize: '.7rem', opacity: 0.6 }}>
                    {item.inventory} in stock
                  </div>
                )}
              </div>
              <div style={{ textAlign: 'right', fontSize: '.75rem' }}>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))}
                  style={{
                    width: 56,
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(5,5,15,0.9)',
                    color: 'inherit',
                    padding: '.2rem .4rem',
                    textAlign: 'center',
                    marginBottom: '.3rem',
                  }}
                />
                <div>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '1rem', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', marginBottom: '.6rem' }}>
            <div>Total</div>
            <div>${summary.total.toFixed(2)}</div>
          </div>
          <div style={{ display: 'flex', gap: '.7rem' }}>
            <button className="btn-ghost" style={{ flex: 1 }} onClick={clear}>
              Clear
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={handleCheckout} disabled={!items.length}>
              Proceed to Checkout
            </button>
          </div>
          <div style={{ fontSize: '.65rem', opacity: 0.6, marginTop: '.4rem' }}>
            Stripe Checkout wiring required. See <code>.env.example</code> and <code>src/lib/stripe.js</code>.
          </div>
        </div>
      </div>
    </div>
  )
}
