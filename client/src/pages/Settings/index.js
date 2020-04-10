import React, { Component } from "react";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import "./style.css";


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

class Settings extends Component {
    state = {
        displayName: '',
        jsonMessage: '',
        languages: ["English", "Spanish", "French"],
        fontSize: [0-100],
        brightness: [0-100],
        status: ["Active", "Not-Active"],
        themes: []

    }

    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();

        console.log(e);

        const newUser = {
            displayName: this.state.displayName,
            languages: this.state.languages,
            fontSize: this.state.fontSize,
            brightness: this.state.brightness,
            status: this.state.status,
            themes: this.state.themes
        }

        API.signUp(newUser)
            .then(res => {
                console.log(res);
                
                if (!res.data.success) {
                    this.setState({
                        jsonMessage: res.data.message,
                        displayName: '',
                        languages: ["English", "Spanish", "French"],
                        fontSize: [0-100],
                        brightness: [0-100],
                        status: ["Active", "Not-Active"],
                        themes: []

                    })
                }
            });
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <p className="text-center">
                                <strong>Settings</strong>
                            </p>
                            <Input 
                                value={this.state.displayName}
                                onChange={this.handleChange}
                                name="displayName"
                                placeholder="required"
                                label={"Display Name"}
                            />
                            <div>
                            <p className='languages'>Languages</p>
                            <FormBtn
                                btntype="outline-success"
                                btnsize="md"
                                onClick={this.handleClick}
                            >English</FormBtn>
                                  <FormBtn
                                btntype="outline-success"
                                btnsize="md"
                                onClick={this.handleClick}
                            >Français</FormBtn>
                                <FormBtn
                                btntype="outline-success"
                                btnsize="md"
                                onClick={this.handleClick}
                            >Español</FormBtn>
                            </div>
                            <br></br>
                            <div>
                            <p className='fontSize'>Font Size</p>
                            <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value="50" 
                            class="slider" 
                            id="myRange">
                            </input></div>
                            <br></br>
                            <div>
                            <p className='brightness'>Brightness</p>
                            <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value="50" 
                            class="slider" 
                            id="myRange">
                            </input></div>
                            <br></br>
                            <div>
                            <p className='status'>Active Status</p>
                                <label class="switch">
                                <input type="checkbox" checked></input>
                                <span class="slider round"></span>
                                </label>
                            </div>
                            <br></br>
                            <div>
                            <p className='theme'>Themes</p>
                            <div class="dropdown">
                                <button onclick="myFunction()" class="dropbtn">Choose</button>
                                <div id="myDropdown" class="dropdown-content">
                                    <a href="#">Option 1</a>
                                    <a href="#">Option 2</a>
                                    <a href="#">Option 3</a>
                                </div>
                            </div>
                            </div>
                            <br></br>
                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={this.handleClick}
                            >
                                Save
                            </FormBtn>
                            <p className="my-1">
                                <small>We won't share your personal information with anyone.</small>
                            </p>
                        </form>
                        {this.state.jsonMessage && <Alert>
                            {this.state.jsonMessage}
                        </Alert>}
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Settings;