import { PaintOptions } from './PaintOptions.js'
import { InteriorOptions } from './InteriorOptions.js'
import { TechOptions } from './TechOptions.js'
import { WheelOptions } from './WheelOptions.js'
import { OrderButton } from './OrderButton.js'
import { Orders } from './OrderList.js'

const container = document.querySelector("#container")

const render = async () => {
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const techOptionsHTML = await TechOptions()
    const wheelOptionsHTML = await WheelOptions()
    const buttonHTML = OrderButton()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${techOptionsHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()