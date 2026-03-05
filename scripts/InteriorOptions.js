import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
   if (changeEvent.target.id === "interior") {
      const chosenOption = parseInt(changeEvent.target.value)
      setInteriorChoice(chosenOption)
   }
}

document.addEventListener("change", handleInteriorChoice)

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    const interiorDropDown = interiors.map((interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    ).join("")


    return `
        <div>
            <select id="interior">
                <option value="0">Select an interior material...</option>
                ${interiorDropDown}
            </select>
        </div>
    `
}