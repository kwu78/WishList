import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Container, Header, TextArea, Form, Button, Item } from 'semantic-ui-react'
import { Card } from "@material-ui/core"


function App(props) {
    const [input, setInput] = useState("");
    function handleSubmit(event) {
        console.log(props.items.length);
        // the items list cannot be empty to submit
        if (props.items.length == 0) {
            alert("Wish List Cannot be empty");
        }
        // reset the list to the initial state when submitted
        else {
            alert("Wish list submitted to Santa");
            props.reset(props.items);
        }
        setInput("");
    }
    function handleChange(event) {
        setInput(event.target.value);
    }
    // add the current input to the list container
    function add() {
        props.add(input);
        setInput("");
    }

    return (
        <div className="wishlist">
            <div className="card">
                <h1 className="header">My Wishlist</h1>
                <Card className="innercontainer">
                {/* iterate the item list and display the items */}
                    <ul>
                        {props.items.map((wish, index) => {
                            {/* delete an item by clicking on the item */}
                            return <li content={wish} key={index} onClick={() => props.delete(index)}>{wish}</li>
                        })}
                    </ul>
                </Card>
                <Form method="post" onSubmit={handleSubmit} size="large">
                    <div className="input" >
                        <Form.Input style={{ borderRadius: "10px", borderStyle: "solid" }} onChange={handleChange} type="text" value={input} id="title" name="title" />
                    </div>
                    {/* add the input text to the wishlist container by clicking the add button */}
                    <div className="buttonGroup">
                        <Button style={{ color: "black", margin: "2% auto", display: "block" }} size="massive" type="button" positive onClick={add} >Add</Button>
                        <Button type="submit" style={{ color: "black", margin: "2% auto", display: "block" }} size="huge" fluid positive >Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: items => dispatch(actions.addItem(items)),
        delete: items => dispatch(actions.deleteItem(items)),
        reset: items => dispatch(actions.reset(items))
    }
};
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);