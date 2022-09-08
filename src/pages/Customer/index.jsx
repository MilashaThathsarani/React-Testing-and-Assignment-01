import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Customer/style";
import TextField from "@mui/material/TextField";

class Customer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.customer_container}>
                <div className={classes.customer_cover}>
                    <div className={classes.customer_title_container}>
                        <Typography variant="h4">Customer</Typography>
                    </div>
                </div>
            </div>
        )

    }
}

export default withStyles(styleSheet)(Customer)