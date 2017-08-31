
export default class gif {
    constructor({id, caption, embed_url, images}, height, width) {
        
        this.caption = caption
        this.height = images.fixed_width_downsampled.height || 300
        this.width = images.fixed_width_downsampled.width || 200
        this.url = images.fixed_width_downsampled.url
        this.id = id
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
            <div id="${this.id}" class="gif">
                <img class="gif-view" src="${this.url}" height="${this.height}" width="${this.width}"/>
                <!--p class="gif-caption">${this.caption}</p-->
            </div>
            `
        )
    }
}
