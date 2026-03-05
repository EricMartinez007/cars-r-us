import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        console.log(placeOrder())
    }
}

export const OrderButton = () => {
    document.addEventListener("click", handlePlaceOrder)

    return `
    <article class="order">
    <button id='order-button'>Place Order</button>
    </article>
    `
}