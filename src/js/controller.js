import ViewHome from './view/viewHome'
import ViewHeader from './view/viewHeader'
import ViewVideos from './view/viewVideos'
import viewVideos from "./view/viewVideos";
import viewVideoMedia from "./view/viewVideoMedia";
import * as model  from "./model"
import * as modelVideoMedia from "./modelVideoMedia"

const controlHome = async function() {
    await model.loadWorkoutsVideo();
    await model.loadWorkoutCategories();
    ViewHeader.render(model.state );
    ViewHome.render( model.state );
}

const controlCategory = async function() {
    await model.loadWorkoutCategories();

}

const controlClickCard = function (id, type, currentCategory = 'all'){
    if(type==='category') controlVideosByCategory(id, currentCategory);
    if(type==='video') controlShowVideo(id);
}

const controlVideosByCategory = async function (categoryId, currentCategory = 'all') {
    viewVideos.renderSpinner();
    model.setPage('category');
    model.setCurrentCategory(currentCategory);
    ViewHeader.render(model.state );
    await model.loadVideosByCategory(categoryId);
    ViewVideos.render(model.state.workout)
}

const controlShowVideo = function(id) {
    modelVideoMedia.getVideo(id);
}

const controlLoadVideo = function (video) {
    modelVideoMedia.loadVideoState(video);
}

const controlClickVideo = function (btn) {
    modelVideoMedia.HandlerClick(btn)
}

const controlProgressBar = function(progressBar) {
    modelVideoMedia.setProgressBar(progressBar);
}

export default function init () {
    ViewHome.addHandlerRender(controlHome);
    ViewHome.addHandlerClick(controlClickCard);
    ViewHeader.addHandlerClick(controlVideosByCategory);
    viewVideoMedia.render();
    viewVideoMedia.addHandlerLoadVideo(controlLoadVideo);
    viewVideoMedia.addHandlerClick(controlClickVideo);
    viewVideoMedia.addHandlerDurationPlayer(controlProgressBar);
}