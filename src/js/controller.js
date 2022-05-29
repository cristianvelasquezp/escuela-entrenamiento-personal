import ViewHome from './view/viewHome'
import ViewHeader from './view/viewHeader'
import ViewVideos from './view/viewVideos'
import * as model  from "./model"
import * as helper from "./helpers"
import viewVideos from "./view/viewVideos";
import viewHeader from "./view/viewHeader";

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
}

const controlVideosByCategory = async function (categoryId, currentCategory = 'all') {
    model.setPage('category');
    viewVideos.renderSpinner();
    await model.loadVideosByCategory(categoryId, currentCategory);
    ViewVideos.render(model.state.workout)

}

export default function init () {
    ViewHome.addHandlerRender(controlHome);
    ViewHome.addHandlerClick(controlClickCard);
    ViewHeader.addHandlerClick(controlVideosByCategory);
}