const prev = document.getElementById ('prev-btn')
const prev = document.getElementById ('next-btn')
const prev = document.getElementById ('item-list')

const itemWidth = 150
const pad = 50

prev.addEventListener('click', ()=>{
    FileList.scrollLeft -= itemWidth + padding
})
