import { setTechChoice } from "./TransientState.js"

const handleTechChoice = (changeEvent) => {
   if (changeEvent.target.id === "tech") {
      const chosenOption = parseInt(changeEvent.target.value)
      setTechChoice(chosenOption)
   }
}

document.addEventListener("change", handleTechChoice)

export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    const techDropDown = technologies.map((tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    ).join("")


    return `
        <div>
            <select id="tech">
                <option value="0">Select a technology package...</option>
                ${techDropDown}
            </select>
        </div>
    `
}