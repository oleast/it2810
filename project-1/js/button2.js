
import Button from './button.js'

export default class button2 {
    constructor(inner, size) {
        this.inner = inner
        this.size = size
        this.id = Math.random()
    }

    activate() {
        document.getElementById(this.id).addEventListener('click', () => {
            console.log('button ' + this.id + " clicked")
            let button = new Button("Click Me To Remove Me", "small", "ajbdgbiag")
            document.querySelector('.nosupport').innerHTML += button.render()
            button.activate()
        })
    }

    render() {
        return (
            "<button id=\"" + this.id + "\" class=\"button\">" + this.inner + "</button>"
        )
    }
}
