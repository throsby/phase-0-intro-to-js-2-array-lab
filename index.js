// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.splice(-1,1)
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0,1)
}

function appendCat(name) {
    return cats.concat(name)
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0,-1)
}

function removeFirstCat(){
    return cats.slice(1,cats.length)
}