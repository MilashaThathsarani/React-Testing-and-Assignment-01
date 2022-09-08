import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Customer/style";

class Customer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.customer_container}>
                <div className={classes.customer_nav_container}>
                    <div className={classes.customer_title}>
                        <Typography variant="h4">Customer</Typography>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Customer)