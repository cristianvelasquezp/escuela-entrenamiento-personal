import View from './view';
import svg from '../../img/sprite.svg'
import {images} from '../helpers'

class ViewVideoMedia extends View {

    _parentElement = document.querySelector('.popup');
    _video;

    addHandlerLoadVideo(handler) {
        this._video = this._parentElement.querySelector('.video__tag');
        handler(this._video);
    }
    addHandlerClick(handler){
        this._parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            const btn = e.target.closest('.video__btn');

            if (!btn) return;

            const id = btn.id;

            handler(id);
        })
    }

    addHandlerDurationPlayer(handler) {
        const video = this._parentElement.querySelector('.video__tag');
        const progressBar = this._parentElement.querySelector('.video__progress-bar--play');
        video.addEventListener('timeupdate', function(e) {
            handler(progressBar);
        })
    }

    _generateMarkup(){
        return `
            <div class="video">
                <video class="video__tag" src="${images['Punching-the-punching-bag.mp4']}"></video>
                <div class="video__controls">
                    <btn id="reload" class="video__btn video__reload">
                        <svg class="video__svg">
                            <use href="${svg}#icon-reset2"></use>
                        </svg>
                    </btn>
                    <btn id="play" class="video__btn video__rewind">
                        <svg class="video__svg">
                            <use href="${svg}#icon-play"></use>
                        </svg>
                    </btn>
                    <btn id="rewind" class="video__btn video__rewind">
                        <svg class="video__svg">
                            <use href="${svg}#icon-reset"></use>
                        </svg>
                    </btn>
                </div>
                <div class="video__progress-bar">
                    <div class="video__progress-bar--play"></div>
                </div>
            </div>
        `
    }


}

export default new ViewVideoMedia();