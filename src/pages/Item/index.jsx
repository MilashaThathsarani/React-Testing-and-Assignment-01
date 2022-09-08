import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Item/style";

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.item_container}>
                <div className={classes.item_cover}>
                    <div className={classes.item_nav_container}>
                        <div className={classes.item_title_container}>
                            <Typography variant="h4">Item</Typography>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default withStyles(styleSheet)(Item)