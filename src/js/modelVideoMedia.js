import {getDate, getJSON} from "./helpers";
import {API_URL} from "./config";

export const state = {
    video: '',
    data: {
        name: 'no name',
        paused: true,
        duration: 0,
        currentTime: 0,
        videoUrl: 'http://127.0.0.1:3000/img/Punching-the-punching-bag.mp4',
    }
}

export const loadVideoState = async function (id) {
    try {
        const res = await getJSON(`${API_URL}workout/${id}`);
        state.data.videoUrl = res.data.workout.videoUrl;
        state.data.name = res.data.workout.name;
        state.data.paused = true;
        state.data.currentTime = 0;
    } catch (err) {
        console.log(err);
        throw err;
    }
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

export const setVideoState = function (video) {
    state.video = video;
}

export const toggleVideo = function () {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('popup--active');
}