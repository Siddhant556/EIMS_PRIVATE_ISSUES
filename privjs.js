const stateData = [
    { id: 1, name: "Rajasthan", cities: ["Jaipur", "Ajmer", "Jodhpur", "Bikaner", "Kota"] },
    { id: 2, name: "Uttar Pradesh", cities: ["Mathura", "Lucknow", "Sahranpur", "Kanpur", "Gorakhpur", "Tundla", "Agra", "Bundelkhand", "Hathras"] },
    { id: 3, name: "Gujarat", cities: ["Dholera", "Ahemdabad", "Valsad", "Surat", "Vadodra"] },
    { id: 4, name: "Punjab", cities: ["Chandigarh", "Ludhiana", "Bhatinda", "Amritsar", "Patiala"] },
]

let selectedState = 1

const classListContainer = document.querySelector(".stateList")
const cityListContainer = document.querySelector(".cityList")

const foo = stateData.map((item) => {
    const eachOption = document.createElement("option")
    eachOption.value = item.id
    eachOption.textContent = item.name
    return eachOption
})

foo.forEach((item) => {
    classListContainer.appendChild(item)
})

classListContainer.addEventListener("change", (e) => {
    const selectedCities = stateData.find(item => item.id === +e.target.value).cities
    const cities = selectedCities.map((item) => {
        const eachOption = document.createElement("option")
        eachOption.value = item
        eachOption.textContent = item
        return eachOption
    })

    cityListContainer.innerHTML = ""

    cities.forEach((item) => {
        cityListContainer.appendChild(item)
    })
})

const selectedCities = stateData.find(item => item.id === selectedState).cities
const cities = selectedCities.map((item) => {
    const eachOption = document.createElement("option")
    eachOption.value = item
    eachOption.textContent = item
    return eachOption
})

cityListContainer.innerHTML = ""

cities.forEach((item) => {
    cityListContainer.appendChild(item)
})



