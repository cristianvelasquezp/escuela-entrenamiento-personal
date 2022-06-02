import ViewHome from './view/viewHome'
import ViewHeader from './view/viewHeader'
import ViewVideos from './view/viewVideos'
import * as model  from "./model"
import viewVideos from "./view/viewVideos";

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
    viewVideos.renderSpinner();
    model.setPage('category');
    model.setCurrentCategory(currentCategory);
    ViewHeader.render(model.state );
    await model.loadVideosByCategory(categoryId);
    ViewVideos.render(model.state.workout)

}

export default function init () {
    ViewHome.addHandlerRender(controlHome);
    ViewHome.addHandlerClick(controlClickCard);
    ViewHeader.addHandlerClick(controlVideosByCategory);
}