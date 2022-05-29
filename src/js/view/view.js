import svg from '../../img/sprite.svg'

export default class View {

    _data;

    render(data, render = true){
        this._data = data;
        const markup = this._generateMarkup();

        if( render === false) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    renderSpinner() {
        const markup = `
              <div class="wrapper">
                <div class="spinner spinner3"></div>
              </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}