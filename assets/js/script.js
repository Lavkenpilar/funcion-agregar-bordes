
const image1 = document.querySelector('#cerezo')
console.log ('cerezo')
const image2 = document.querySelector('#metaverso')
console.log ('metaverso')
const image3 = document.querySelector ('#pintura')
console.log ('pintura')

const agregarBordes = (ref, color = 'black') => {
 const img = document.querySelector ('#' +  ref)
 img.style.border = `18px solid ${color}`
}

image1.addEventListener ("click", ()=>{
    agregarBordes ('cerezo', 'blue')
    
})
image2.addEventListener ("click", ()=>{
    agregarBordes ('metaverso', '#3399CC')
})
image3.addEventListener ("click", ()=>{
    agregarBordes('pintura', '#FF00CC')
})