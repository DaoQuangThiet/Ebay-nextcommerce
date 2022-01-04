import React from 'react';

import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// import images 
import bgEmail from '../assets/img/bg-home1-newleter.jpg';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Email Sent Successfully ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const styles = {
            formemail: {
                marginTop: 50,
                backgroundImage: `url(${bgEmail.src})`,
                backgroundPosition: "center !important",
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "cover !important",
                marginBottom: -21,
                paddingTop: 70,
                paddingBottom: 52,
                "@media  (max-width: 768px)": {
                    formemail: {
                        textAlign: 'center',
                    },
                }
            },
            form: {
                display: "flex",
                position: "relative",
                "@media  (max-width: 768px)": {
                    form: {
                        display: 'inline-blockunset !important',
                    }

                }
            },
            text: {
                lineHeight: '35px',
                fontSize: 30,
                fontWeight: 700,
                fontFamily: 'Merriweather,sans-serif',
                color: '#323232',
            },

            formInput: {
                width: "70%",
                paddingLeft: 20,
                paddingRight: 20,
                border: "none",
                borderRadius: 0,
                height: 45,
                '&:focusVisible': {
                    outline: ['none']
                },

            },

            formFields: {
                marginTop: 40,
            },
            formButton: {
                width: "20%",
                float: "right",
                borderRadius: 24,
                color: "#fff",
                background: "#59ccfc",
                border: "none",
                height: 45,
                '&:hover': {
                    background: '#38acdd!important',
                }
            },



        }

        return (

            <div style={styles.formemail} >
                <Container maxWidth="lg" container spacing={2}  >

                    <div style={styles.form} noValidate autoComplete="off" >
                        <Grid item lg={3} md={4} >
                            <h3 style={styles.text} >
                                Subscribe to our newsletter
                            </h3>
                        </Grid>
                        <Grid item lg={9} md={8}  >
                            <form onSubmit={this.handleSubmit} style={styles.formFields}>
                                <div>
                                    <input style={styles.formInput} type="email" name="EMAIL" value={this.state.value} onChange={this.handleChange} placeholder="Enter your email" validate />
                                    <Button style={styles.formButton} type="submit" color="primary">Subscribe</Button>
                                </div>
                            </form>
                        </Grid>
                    </div>

                </Container>

            </div>
        )
    }
}
export default NameForm;