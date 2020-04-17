import React, { Component } from "react";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
//import { Button } from 'react-bootstrap'
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import "./style.css";
import { LOCALES } from '../../i18n';
import translate from '../../i18n/translate';



class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locale: LOCALES.ENGLISH,
          theme: { 
            mode: 'light',
            size: 'normal'
          }
        }
    }

    // componentDidMount() {
     
    // }


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

        const settings = {
            locale: this.state.locale,
            theme: this.state.theme
        }

        API.update(settings)
            .then(res => {
                console.log(res);
                
                if (!res.data.success) {
                    this.setState({
                        locale: LOCALES.ENGLISH,
                        theme: { 
                            mode: 'light',
                            size: 'normal'
                          }

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
                                <strong>{translate("Settings")}</strong>
                            </p>
                            <div>
                            <p className='languages'>{translate("Languages")}</p>
                            <button value={LOCALES.ENGLISH} onClick={this.props.setLanguage}>{translate("English")}</button>
                            <button value={LOCALES.FRENCH}  onClick={this.props.setLanguage}>{translate("French")}</button>
                            <button value={LOCALES.CHINESE}  onClick={this.props.setLanguage}>{translate("Chinese")}</button>

                            </div>

                            <br></br>
                            <div>
                            <p className='fontSize'>{translate("Font Size")}</p>
                            <button value={'normal'} onClick={this.props.setFontSize}>{translate("Normal")}</button>
                            <button value={'magnify'} onClick={this.props.setFontSize}>{translate("Magnify")}</button>
                            </div>

                            <br></br>

                            <div>
                            <p className='brightness'>{translate("Brightness")}</p>
                            <button value={'light'} onClick={this.props.setBrightness}>{translate("Light")}</button>
                            <button value={'dark'} onClick={this.props.setBrightness}>{translate("Dark")}</button>
                            </div>

                            <br></br>

                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={this.handleClick}
                            >
                                {translate("Save")}
                            </FormBtn>
                            <p className="my-1">
                                <small>{translate("We won't share your personal information with anyone.")}</small>
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

export default Settings