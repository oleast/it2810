
export default class card {
    constructor(title, content) {
        this.title = title
        this.content = content
        this.id = content
    }

    activate() {
        console.log(`Activating ${this.id}`)
        document.getElementById(this.id).addEventListener('click', () => {
            console.log(`Clicking ${this.id}`)
        })
    }

    render() {
        return (
            `
            <div id="${this.id}" class="card">
                <h3 class="card-title">${this.title}</h3>
                <p class="card-content">${this.content}</p>
            </div>
            `
        )
    }
}
