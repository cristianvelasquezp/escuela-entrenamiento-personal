export const state = {
    video: '',
    data: {
        paused: true,
        duration: 0,
        currentTime: 0,
    }
}

export const loadVideoState = function (video) {
    state.video = video;
}

export const HandlerClick = function (btn) {

    if (btn === 'play'){
        play();
    } else if (btn === 'exit') {
        toggleVideo();
    }

}

const play = function () {
    console.log(state.video)
    if (state.video.paused) {
        state.data.paused = false;
        state.video.play();
    }else {
        state.data.paused = true;
        state.video.pause();
    }
}

export const setProgressBar = function (progressBar) {
    state.data.currentTime = ( state.video.currentTime/state.video.duration ) * 100;
}

export const toggleVideo = function (id) {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('popup--active');
}