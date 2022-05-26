import View from './view';
import svg from '../../img/sprite.svg'

class ViewHeaderCategories extends View {

    _parentElement = document.querySelector('.header');

    _generateMarkup() {
        return `
            <div class="header__categories">
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-todos"></use></svg>
                    <div class="icon-box__title">All</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#image0_604_2308"></use></svg>
                    <div class="icon-box__title">Hit</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-box"></use></svg>
                    <div class="icon-box__title">Box</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-training"></use></svg>
                    <div class="icon-box__title">Training</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-bike"></use></svg>
                    <div class="icon-box__title">Bike</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-specials"></use></svg>
                    <div class="icon-box__title">Specials</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-gym"></use></svg>
                    <div class="icon-box__title">Gym</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-running"></use></svg>
                    <div class="icon-box__title">Running</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-strength"></use></svg>
                    <div class="icon-box__title">strength</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-dance"></use></svg>
                    <div class="icon-box__title">Dance</div>
                </div>
                <div class="icon-box">
                    <svg class="icon-box__svg"><use href="${svg}#icon-meditation"></use></svg>
                    <div class="icon-box__title">Meditation</div>
                </div>          
            </div>
        `
    }

}

export default new ViewHeaderCategories();