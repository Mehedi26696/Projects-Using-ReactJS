
function getImageURL(name){
    return new URL(`./Images/${name}`, import.meta.url).href
}

export {getImageURL};