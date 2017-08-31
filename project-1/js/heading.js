
import Button2 from './button2.js'
import Card from './card.js'
import Gif from './gif.js'

let texts = [
    "iudghsoidgniuzngosjdgoungdsnhgnkzxgn",
    "sdigokmbmojcbokijgodsjgdjsgojsdoigjoidsjgo",
    "kjsdhngoisdjgoijsogjosdjgojsdgoijo",
    "sdgoosjdgojjsidjgoisjdgihsogj",
    "lksjdgoijsdogjejsogiudshjgoisdjgoeiejsgosdgoj",
    "jdsigjpsdojgohaosjgoasgohasogo",
    "ndsgjsdjgpajgoajsjogjaisivjaijhgasijhgaisu"
]

let gifs = [
    "gif-1",
    "gif-2",
    "gif-3",
    "gif-4",
    "gif-5",
    "gif-6",
    "gif-7",
    "gif-8",
]

let hqg = false

let heading = () => {
    document.querySelector('.nosupport').innerHTML = "Your browser supports ES6/ES2015!"

    /*
    let button = new Button2("Click Me To Remove Me", "small", "ajbdgbiag")
    render('.nosupport', button)
    */

    /*
    fetch('https://api.giphy.com/v1/gifs/search?api_key=f4918aa4cf96468c9bce3bddc8e1645e&q=r/all&limit=8&offset=0&rating=G&lang=en', {
        method: 'get',
    }).then((res) => { return res.json() })
    .then(({data}) => {
        console.log(data)
        data.map((gif) => {
            render('.gifs', new Gif(gif))
        })
        for (let i = 0; i < 8; i++) {
            //console.log(`ID: ${gifs[0]}, data.url: ${JSON.stringify(data[i].fixed_width_downsampled_url)}`)
            console.log(gifs[i])
            console.log(data[i].images.fixed_width_downsampled.url)
            document.getElementById(gifs[i]).src = data[i].images.fixed_width_downsampled.url
        }
    }).catch((err) => {
        console.error(err)
    })
    */

    /*
    document.getElementById("gif-1").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-2").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-3").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-4").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-5").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-6").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-7").addEventListener('click', (event) => { console.log(event.target)})
    document.getElementById("gif-8").addEventListener('click', (event) => { console.log(event.target)})
    */

    document.getElementById('hqg-button').addEventListener('click', () => {
        replaceGifAll('hqg')
    })

    gifs.map((id) => {
        let element = document.getElementById(id)
        replaceGif(element)
        element.addEventListener('click', (event) => {
            event.target.src = './static/loading.gif'
            console.log(event.target)
            replaceGif(event.target)
        })
    })
}

let replaceGif = (node) => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=f4918aa4cf96468c9bce3bddc8e1645e&tag=&rating=G', {
        method: 'get',
    }).then((res) => { return res.json() })
    .then(({data}) => {
        console.log(data)
        node.src = `https://i.giphy.com/${data.id}.gif`
    }).catch((err) => {
        console.error(err)
    })
}

let replaceGifAll = (query) => {
    let elements = Array.from(document.getElementsByClassName('gif'))
    console.log(elements)
    elements.map((element) => {
        element.src = './static/loading.gif'
    })
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=f4918aa4cf96468c9bce3bddc8e1645e&q=${query}&limit=8&offset=0&rating=G&lang=en`, {
        method: 'get',
    }).then((res) => { return res.json() })
    .then(({data}) => {
        for (let i = 0; i < 8; i++) {
            console.log(gifs[i])
            console.log(data[i])
            //document.getElementById(gifs[i]).src = data[i].images.original_mp4.mp4.replace(".mp4", "-preview.webm")
            document.getElementById(gifs[i]).src = `https://i.giphy.com/${data[i].id}.gif`
        }
    }).catch((err) => {
        console.error(err)
    })
}

let render = (node, child) => {
    document.querySelector(node).innerHTML += child.render()
    child.activate()
}

export { heading }
