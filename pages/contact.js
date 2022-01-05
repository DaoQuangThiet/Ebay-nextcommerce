import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";
import Banner from '../assets/img/banner_page.png';


  const useStyles = makeStyles({
  pageAccout: {
    marginBottom: "60px",
    minHeight: "200px",
    background:`url(${Banner.src})`,
    backgroundSize: "cover"
  },

  titlePage: {
    display: "flex",
    paddingTop: "75px",
    paddingBottom: "75px",
    "@media (max-width: 768px)": {
      display: "block"
    }
  },

  rightTextPage: {
    paddingTop:"12px",
    float: "right",
    "@media (max-width: 768px)": {
      float: "inherit"
    }
  },
  inputAccout: {
    width: "100%",
    minHeight: "40px",
    paddingLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius:"5px",
    borderColor:"#d7d7d7",
    backgroundClip:"padding-box"
  },
  inputAccoutMasage: {
    width: "100%",
    height: "200px",
    paddingLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius:"10px",
    borderColor:"#d7d7d7",
    '&:focusVisible':{
      outline:"none"
    }
  },
  formPage: {
    display: "flex",
    padding: "30px",
    "@media (max-width: 768px)": {
      display: "block"
    }
  },
  loginPage: {
    "@media (max-width: 768px)": {
      marginBottom: "40px"
    }
  }
});

export default function ContactUS() {
  const classes = useStyles();
  return (
    
    <>
  
      <Box className={classes.pageAccout}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography sx={{ color: "white" }} component="h3" variant="h3">
                  Contact Us
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPage}>
                <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
                  <Typography
                    sx={{ color: "white" }}
                    component="h6"
                    variant="h6"
                  >
                    Home
                  </Typography>
                  <Typography
                    sx={{ color: "white" }}
                    component="h6"
                    variant="h6"
                  >
                    Contact Us
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className={classes.formPage} >
          <Grid item lg={6}>
            <Box className={classes.loginPage} >
              <Typography component="h4" variant="h4" sx={{marginBottom:"30px"}}>
                Contact us
              </Typography>
              <Box>
                <FormControl
                  sx={{ width: "100%", paddingRight: "40px" }}
                >
                  <input
                    className={classes.inputAccout}
                    type="text"
                    name="name"
                    placeholder="Name*"
                  />

                  <input
                    className={classes.inputAccout}
                    type="text"
                    name="email"
                    placeholder="Your Email*"
                  />
                  <input
                    className={classes.inputAccout}
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                  />
                  <textarea
                    className={classes.inputAccoutMasage}
                    name="your-message"
                    placeholder="Message"
                  ></textarea>
                </FormControl>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      borderRadius: "25px",
                      width: "50%",
                      color:"#fff "
                    }}
                  >
                    SUBMIT NOW
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box className={classes.regisPage} >
              <Typography component="h4" variant="h4" sx={{marginBottom:"30px"}}>
                Location
              </Typography>
              <Box sx={{ display: "flex" }}>
                <LocalPhoneIcon
                  color="primary"
                  sx={{
                    border: "1px solid",
                    borderRadius: "40px",
                    fontSize: "60px",
                    padding: "15px",
                    margin: "10px"
                    
                  }}
                />
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ paddingTop: "25px" }}
                >
                  0-800-12-345-6 880
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <AddLocationIcon
                  color="primary"
                  sx={{
                    border: "1px solid",
                    borderRadius: "40px",
                    fontSize: "60px",
                    padding: "15px",
                    margin: "10px"
                  }}
                />
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ paddingTop: "25px" }}
                >
                  257 Charlington Gates Road Morrison, Nr. 568
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <EmailIcon
                  color="primary"
                  sx={{
                    border: "1px solid",
                    borderRadius: "40px",
                    fontSize: "60px",
                    padding: "15px",
                    margin: "10px"
                  }}
                />
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ paddingTop: "25px" }}
                >
                  info@jruitstemplate.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
  
    </>
  );
}
