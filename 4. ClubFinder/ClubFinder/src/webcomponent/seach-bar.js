class SearchBar extends HTMLElement{
    
    connectedCallback() {
        this.placeHolder = this.getAttribute("placeHolder") || null;
        this.buttonText = this.getAttribute("buttonText") || null;
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render(){
        this.innerHTML = 
        `<div id="search-container" class="search-container">
            <input placeholder="${this.placeHolder}" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">${this.buttonText}</button>
        </div>`;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);