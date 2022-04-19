import ViewHome from './view/viewHome'
import * as model  from "./model"

const controlHome = () => {
    ViewHome.render( model.state )
}

export default function init () {
    ViewHome.addHandlerRender(controlHome());
}