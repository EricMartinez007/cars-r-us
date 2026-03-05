export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=interior&_expand=wheel")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.technology.price + order.interior.price + order.wheel.price
            return `
                <section class="survey-order-container">
                    <div>${order.paint.color} car with ${order.wheel.type} wheels, ${order.interior.type}, and the ${order.technology.package} for a total cost of $${orderPrice}</div>
                </section>
            `
        }
    )
    .join("")

    return ordersHTML
}