import ViewHome from './view/viewHome'
import * as model  from "./model"
import * as helper from "./helpers"

const controlHome = async function() {
    await model.loadWorkoutsVideo();
    ViewHome.render( model.state );
}

export default function init () {
    ViewHome.addHandlerRender(controlHome());
}