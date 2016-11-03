class CatSays extends HTMLElement {

  static get is () {
    return 'cat-says'
  }

  static get template () {
    if (!this._template) {
      let currentDoc = document.currentScript.ownerDocument

      if (currentDoc === document) {
        currentDoc = document._currentScript.ownerDocument
      }
      this._template = currentDoc.querySelector('#template')
    }
    return this._template
  }

  static get observedAttributes () {
    return ['cat-name', 'saying']
  }

  constructor () {
    super()

    this._root = this.attachShadow({mode: 'open'})
    this._root.appendChild(CatSays.template.content.cloneNode(true))

    this._updateName = this._updateName.bind(this)
  }

  connectedCallback () {
    this.name = this.getAttribute('name')
    this.saying = this.getAttribute('saying')
    this._text = this._root.querySelector('.text')

    this._updateName()
  }

  disconnectedCallback () {

  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'cat-name') {
      this.name = newValue
      this._updateName()
    }

    if (name === 'saying') {
      this.saying = newValue
      this._updateName
    }
  }

  _updateName () {
    this._text.textContent = `${this.name} says: ${this.saying}`
  }
}

window.customElements.define(CatSays.is, CatSays);
ShadyCSS.prepareTemplate(CatSays.template, CatSays.is);
