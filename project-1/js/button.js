
export default class button {
    constructor(inner, size) {
        this.inner = inner
        this.size = size
        this.id = Math.random()
    }

    activate() {
        document.getElementById(this.id).addEventListener('click', () => {
            document.getElementById(this.id).remove()
        })
    }

    render() {
        return (
            "<button id=\"" + this.id + "\" class=\"button\">" + this.inner + "</button>"
        )
    }
}
