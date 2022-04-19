import View from "./view";

class ViewCard extends View {

    _parentElement = document.querySelector('workout-sections .container');

    _generateMarkup() {
        console.log(this._data);
        return `
            <div class="card">
                <img class="card__img" src="${this._data.image}">
                <div class="card__content">
                    <h3 class="card__title">${this._data.name}</h3>
                </div>
            </div>
        `;

    }
}

export default new ViewCard();