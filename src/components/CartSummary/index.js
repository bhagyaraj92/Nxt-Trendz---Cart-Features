import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="order-value-heading">
              <span className="order-value-span">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items-count">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button small-screen">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button large-screen">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
