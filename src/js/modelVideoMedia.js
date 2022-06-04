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
    console.log(video.duration);
    state.data.duration = video.duration * 1;
    state.data.currentTime = video.currentTime;
    console.log(state.data.duration);
}

export const HandlerClick = function (btn) {

    if (btn === 'play'){
        play();
    }

}

const play = function () {
    if (state.video.paused) {
        state.video.play();
    }else {
        state.video.pause();
    }
}

export const setProgressBar = function (progressBar) {
    state.data.currentTime = ( state.video.currentTime/state.video.duration ) * 100;
    progressBar.style.width = `${state.data.currentTime}%`;
    console.log(state.data.currentTime);
}

export const getVideo = function (id) {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('popup--active');
}