const getPuzzleOld = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}
 
const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    
    return country
}

const getCountryOld = (countryCode) => {
    return fetch('//restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getLocationOld = () => {
    return fetch('//ipinfo.io/json?token=b985c3b6e0d539').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data
    })
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=b985c3b6e0d539')

    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

export { getPuzzle as default }