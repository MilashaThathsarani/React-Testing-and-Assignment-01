import React, { Component,Fragment } from "react"
import Greeting from "../../components/Home/Greeting";
import Countable from "../../components/Home/Countable";
import Divider from '@mui/material/Divider';

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Greeting name="Milasha"/>
                <Divider light/>
                <Countable count=""/>
            </Fragment>
        )
    }
}

export default HomePage;