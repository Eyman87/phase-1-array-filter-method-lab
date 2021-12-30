function findMatching(driversArr, nameStr){
    const found = driversArr.filter(name => {
        return name.toLowerCase() === nameStr.toLowerCase()
    })
    return found
}

function fuzzyMatch(driversArr, nameStr) {
    const matchedArray = driversArr.filter(name => {
        return name.startsWith(nameStr)
    })
    return matchedArray
}

function matchName(arrayOfDriverObj, string){
    const elementMatchesStr = arrayOfDriverObj.filter(person => {
        // console.log(name.hometown === string)
        return person.name.toLowerCase() === string.toLowerCase()
    }) 
    return elementMatchesStr
}
