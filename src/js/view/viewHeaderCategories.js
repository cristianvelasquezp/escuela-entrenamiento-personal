import View from './view';
import svg from '../../img/sprite.svg'

class ViewHeaderCategories extends View {

    _parentElement = document.querySelector('.header');

    _generateMarkup() {
        console.log(this._data.categories)
        return `
            <div class="header__categories">
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-todos"></use></svg>
                    <div class="icon-box__title">All</div>
                </div>
                ${this._data.categories.map(category => this._categoryMarkup(category)).join(' ')}
        `
    }

    _categoryMarkup(category){
        return`
            <div class="icon-box">
                <svg class="icon-box__svg"><use href="${svg}#${category.icon}"></use></svg>
                <div class="icon-box__title">${category.name}</div>
            </div>
        `
    }

}

export default new ViewHeaderCategories();