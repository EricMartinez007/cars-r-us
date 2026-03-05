import { setWheelChoice } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
   if (changeEvent.target.id === "wheel") {
      const chosenOption = parseInt(changeEvent.target.value)
      setWheelChoice(chosenOption)
   }
}

document.addEventListener("change", handleWheelChoice)

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    const wheelDropDown = wheels.map((wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    ).join("")


    return `
        <div>
            <select id="wheel">
                <option value="0">Select a wheel style...</option>
                ${wheelDropDown}
            </select>
        </div>
    `
}