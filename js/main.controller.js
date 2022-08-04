

function onInit() {
    getPosition()
    setColors()
    renderHoursToNextBd()
}


function onSubmit(ev) {
    ev.preventDefault()
    const elForm = document.querySelector('form')
    const email = elForm.querySelector('[name=email]').value
    const age = elForm.querySelector('[name=age]').value
    const gender = elForm.querySelector('[name=gender]').value
    const bgColor = elForm.querySelector('[name=background-color]').value
    const txtColor = elForm.querySelector('[name=txt-color]').value
    const dob = elForm.querySelector('[name=dob]').value
    const tob = elForm.querySelector('[name=tob]').value

    const userSet = {
        email,
        age,
        gender,
        bgColor,
        txtColor,
        dob,
        tob
    }
    saveToStorage(STORAGE_KEY, userSet)

    setTimeout(() => {
        window.location = 'map.html'
    }, 1000);
}


