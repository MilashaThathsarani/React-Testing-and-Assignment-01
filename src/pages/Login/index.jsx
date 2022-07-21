import React,{Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";

class Login extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="Outlined" label={"User Name"} variant="outlined" />
                        <TextField id="outlined-basic" type={"password"} label="Outlined" label={"Password"} variant="outlined" />
                    </div>
                    <div className={classes.btn_container}>
                        <GDSEButton variant={"contained"} label={"Login"}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)