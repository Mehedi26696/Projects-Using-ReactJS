function getIconURL(name){
    return new URL(`./svgs/${name}`, import.meta.url).href
}

export {getIconURL};