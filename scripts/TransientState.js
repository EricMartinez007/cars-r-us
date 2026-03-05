const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechChoice = (chosenTech) => {
    transientState.technologyId = chosenTech
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const placeOrder = async () => {
    if (transientState.paintId > 0 && transientState.interiorId > 0 && transientState.technologyId > 0 && transientState.wheelId > 0) {
        const postOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transientState)
        }

        const response = await fetch("http://localhost:8088/orders", postOptions)

        const newOrderEvent = new CustomEvent("newOrderCreated")
        document.dispatchEvent(newOrderEvent)
    }
    else {
        alert("Need to complete the form before submitting!")
    }
}