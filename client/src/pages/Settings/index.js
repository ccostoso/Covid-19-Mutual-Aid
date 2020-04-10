import React, { Component } from "react";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Settings extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        jsonMessage: '',
        languages: ["English", "Spanish", "French"]
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
            email: this.state.email,
            password: this.state.password,
        }

        API.signUp(newUser)
            .then(res => {
                console.log(res);
                
                if (!res.data.success) {
                    this.setState({
                        jsonMessage: res.data.message,
                        displayName: '',
                        email: '',
                        password: '',

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
                            <Input 
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                placeholder="required"
                                type="email"
                                label="Email"
                            />
                            <Input 
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                placeholder="required"
                                type="password"
                                label="Password"
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
                            <p className='fontSize'>Brightness</p>
                            <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value="50" 
                            class="slider" 
                            id="myRange">
                            </input></div>
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