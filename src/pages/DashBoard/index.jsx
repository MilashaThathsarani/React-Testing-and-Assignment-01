import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../DashBoard/style";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/common/Button";


class DashBoard extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.nav_container}>
                    <div className={classes.title_name}>
                        <Typography variant="h4">DashBoard</Typography>
                    </div>
                    <div className={classes.btn_customer}>
                        <GDSEButton variant="contained" label="Customer"/>
                    </div>
                    <div className={classes.btn_item}>
                        <GDSEButton variant="contained" label="Item"/>
                    </div>
                </div>
                <div className={classes.main_container}></div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(DashBoard)