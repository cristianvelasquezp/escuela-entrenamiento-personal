import ViewHome from './view/viewHome'
import ViewHeader from './view/viewHeader'
import * as model  from "./model"
import * as helper from "./helpers"

const controlHome = async function() {
    await model.loadWorkoutsVideo();
    await model.loadWorkoutCategories();
    ViewHeader.render(model.state );
    ViewHome.render( model.state );
}

const controlCategory = async function() {
    await model.loadWorkoutCategories();

}

export default function init () {
    ViewHome.addHandlerRender(controlHome());
}