import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        console.log(placeOrder())
    }
}

document.addEventListener("click", handlePlaceOrder)

export const OrderButton = () => {
    return `
    <article class="order">
    <button id='order-button'>Place Order</button>
    </article>
    `
}