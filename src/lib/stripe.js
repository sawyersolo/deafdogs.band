export async function redirectToStripeCheckout(lineItems) {
  const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  if (!key) {
    alert('Stripe key not configured. See .env.example.')
    return
  }

  try {
    const res = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lineItems })
    })

    if (!res.ok) {
      throw new Error('Failed to create checkout session')
    }

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Checkout URL missing from response.')
    }
  } catch (err) {
    console.error(err)
    alert('Checkout could not be started. Check console/logs.')
  }
}
