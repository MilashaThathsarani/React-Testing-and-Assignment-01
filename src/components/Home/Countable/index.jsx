import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GDSEButton from "../../common/Button";


class Countable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    incrementCount(){
        console.log("increment function calling")
        this.setState({
            count:this.state.count + 1
        })
    }

    decrementCount(){
        console.log("decrement function calling")
        this.setState({
            count:this.state.count - 1
        })
    }

    resetCount() {
        console.log("reset function calling");
        this.setState({
            count: 0
        })
    }

    render() {
        return(
            <div>
                <Typography variant="h4" gutterBottom>
                    Count : {this.state.count}
                </Typography>
                {/*<Button variant="contained"*/}
                {/*onClick={() =>{*/}
                {/*console.log("Clicked")*/}
                {/*    this.incrementCount()*/}
                {/*}*/}
                {/*}>Increase!</Button>*/}

                {/*<Button variant="outlined"*/}
                {/*        onClick={() =>{*/}
                {/*            console.log("Decrease button Clicked")*/}
                {/*            this.decrementCount()*/}
                {/*        }}*/}
                {/*        style={{marginLeft: '15px'}}*/}
                {/*>Decrease!</Button>*/}

                {/*<Button variant="outlined"*/}
                {/*        color="error"*/}
                {/*        onClick={() =>{*/}
                {/*            console.log("reset button Clicked")*/}
                {/*            this.resetCount()*/}
                {/*        }}*/}
                {/*        style={{marginLeft: '15px'}}*/}
                {/*>Reset!</Button>*/}

                <GDSEButton
                label="Increase!"
                varient="contained"
                onClick={() => {
                    console.log("Clicked")
                    this.incrementCount()
                }}
                />

                <GDSEButton
                label="Decrease!"
                varient="outlined"
                onClick={() => {
                    console.log("Clicked")
                    this.decrementCount()
                }}
                />

                <GDSEButton
                    label="Reset!"
                    varient="outlined"
                    color="error"
                    disabled={false}
                    onClick={() => {
                        console.log("Clicked")
                        this.resetCount()
                    }}
                />
            </div>
        )
    }
}

export default Countable;