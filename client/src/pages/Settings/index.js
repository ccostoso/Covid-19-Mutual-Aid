import React, { Component } from "react";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
//import { Button } from 'react-bootstrap'
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import "./style.css";
import { LOCALES } from '../../i18n';



class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locale: LOCALES.ENGLISH
        }
        // fontSize: 'medium',
        // brightness: 50,
        // jsonMessage: ''

    }

    componentDidMount() {

    }


    handleChange = e => {
        e.persist();
        const { name, value } = e.target;
        console.log(e.target);
        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();

        console.log(e);

        const newUser = {
            locale: this.state.locale,
            // fontSize: this.state.fontSize,
            // brightness: this.state.brightness
        }

        API.signUp(newUser)
            .then(res => {
                console.log(res);
                
                if (!res.data.success) {
                    this.setState({
                        locale: LOCALES.ENGLISH,
                        // fontSize: 'medium',
                        // brightness: 50,
                        // jsonMessage: ''

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
                            <div>
                            <p className='languages'>Languages</p>
                            <button onClick={() => this.setState(LOCALES.ENGLISH)}>English</button>
                            <button onClick={() => this.setState(LOCALES.FRENCH)}>French</button>
                            </div>

                            <br></br>
{/* 
                            <div>
                            <p className='fontSize'>Font Size</p>
                            <input id="typeinp"
                             type="range"
                              min="0" max="5" value={this.state.fontSize} onChange={this.handleChange} step="1"/>
                            </div>

                            <br></br>

                            <div>
                            <p className='brightness'>Brightness</p>
                            <input id="typeinp" type="range" min="0" max="5" defaultValue="3" step="1"/>
                            </div>

                            <br></br> */}

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





//objectives:  Built event handlers at the top level  component.(routes makes the most sense)
//Learn how to pass props throught react routes. (hint: easier to passprops to compoenents you invoke in the route)
//bind the handlers and values to the state of the container component
//Set the values to match that of the sliders, buttons, and text inputs they are effecting.
//Once values are passed around your app as props set them as the style values or as a function that adds or subtracts from the defaulte style values in your CSS
//REemmber in React you can set variables as style values using JSX
//  If you need help message me on slack, you got this, its gonan be a lot of small typing.  If you are confused by terminology reach out to any of us but show this to Anthony me or Anna
