const deleteBtn = document.querySelectorAll('.del')
const placeItem = document.querySelectorAll('span.not')
const placeVisited = document.querySelectorAll('span.visited')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePlace)
})

Array.from(placeItem).forEach((el)=>{
    el.addEventListener('click', markVisited)
})

// Array.from(placeComplete).forEach((el)=>{
//     el.addEventListener('click', marktoVisit)
// })

async function deletePlace(){
    const placeId = this.parentNode.dataset.id
    try{
        const response = await fetch('places/deletePlace', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'placeIdFromJSFile': placeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function markComplete(){
//     const placeId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('places/markVisited', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'placeIdFromJSFile': placeId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

async function marktoVisit(){
    const placeId = this.parentNode.dataset.id
    try{
        const response = await fetch('places/marktoVisit', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'placeIdFromJSFile': placeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}