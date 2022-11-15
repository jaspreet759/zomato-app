

import { Fragment, useContext} from 'react'
import './Modal.css'
import ReactDom from 'react-dom'
import { detailItemListContext } from '../restaurantsItems/exploreRestuarantItem'

const Backdrop = () => {
    const {hideCart} = useContext(detailItemListContext)
   return  <div className='backdrop ' onClick={ hideCart}>

   </div>

}


const ModalOverlay = props => {
   return <div className='modal'>
    <div className='modal-padding'>{
        props.children
    }</div>

    </div>

}

const portalElement = document.getElementById ('overlays')
const Model = props => {
    return (
        <Fragment>
        {ReactDom.createPortal(<Backdrop/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,
        portalElement)}

    </Fragment>
    )


}
export default Model;