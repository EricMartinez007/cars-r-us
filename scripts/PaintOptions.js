import { setPaintChoice } from "./TransientState.js"

//This is used to track the choice made in the dropdown list and update which choice was made to the transient state object
const handlePaintChoice = (changeEvent) => {
   if (changeEvent.target.id === "paint") {
      const chosenOption = parseInt(changeEvent.target.value)
      setPaintChoice(chosenOption)
   }
}

document.addEventListener("change", handlePaintChoice)

//Just to make a dropdown list of paint options
export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    const paintDropDown = paints.map((paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    ).join("")


    return `
        <div>
            <select id="paint">
                <option value="0">Select a paint color...</option>
                ${paintDropDown}
            </select>
        </div>
    `
}