import { Component } from "react"
import PropTypes from "prop-types"

class GDSESnackBar extends Component{
    static propTypes = {
        open: PropTypes.bool,
        className: PropTypes.string,
        anchorOrigin : PropTypes.string,
        children:PropTypes.node,
        severity:PropTypes.string,
        autoHideDuration: PropTypes.number
    }

}

export default GDSESnackBar