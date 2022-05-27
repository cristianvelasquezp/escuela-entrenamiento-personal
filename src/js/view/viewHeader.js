import View from './view';
import ViewHeaderText from './viewHeaderText'
import ViewHeaderCategories from './viewHeaderCategories'

class ViewHeader extends View {

    _parentElement = document.querySelector('.header');

    _generateMarkup(){
        let viewHeader = ViewHeaderCategories;
        if(this._data.workout.page === "home") {
            this.homeHeroBg();
            viewHeader = ViewHeaderText;
        }
        return `
            <div class="container header__container">
                <div class="header__menu">
                    <div class="header__logo">
                        ENTRENAMIENTOS
                    </div>
                    <div class="header__login">
                        <a href="#" class="btn btn--transparent mr-small">Regístrate</a>
                        <a href="#" class="btn btn--green">Iniciar sesión</a>
                    </div>
                </div>
                ${viewHeader.render(this._data.workout,false)}
            </div>
        `
    }

    homeHeroBg() {
        this._parentElement.classList.add('header__home');
    }

}

export default new ViewHeader();