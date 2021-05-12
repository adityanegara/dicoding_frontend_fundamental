class AppBar extends HTMLElement {
    connectedCallback() {
        this.caption = this.getAttribute("caption") || null;
        this.render();
    }

    render(){
        this.innerHTML = `<div class = "app-bar">
                                <h2>${this.caption}</h2>
                          </div>`
    }
}

customElements.define("app-bar", AppBar);