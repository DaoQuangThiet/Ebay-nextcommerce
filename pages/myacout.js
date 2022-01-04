import * as React from "react";
import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Banner from '../assets/img/banner_page.png';


const useStyles = makeStyles({
  pageAccout:{
    marginBottom: "60px",
    minHeight:"200px",
    backgroundImage:`url(${Banner.src})`,
    backgroundSize: "cover"
  },


  titlePage:{
    display: "flex",
    paddingTop: "75px",
    paddingBottom: "75px",
    '@media (max-width: 768px)': {
      display:"block",
  }
    
  },


  rightTextPage:{
    float:"right",
    '@media (max-width: 768px)': {
      float:"inherit",
  }
  },
  inputAccout:{
    width: "100%",
    minHeight: "40px",
    paddingLeft: "10px",
    marginTop: "10px"
  },
  formPage:{
    display: "flex", 
    border:"1px solid #ccc",
    padding:"30px",
    '@media (max-width: 768px)': {
      display:"block",
  }
  },
  loginPage:{
    '@media (max-width: 768px)': {
      marginBottom:"40px",
  }
  }
  });

export default function MyAccout() {
  const [checked, setChecked] = React.useState(false);
  const [isChecked, setStatusChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleOnclickShow = () => {
    setStatusChecked((item) => true);
  };
  const handleOnclickHidden = () => {
    setStatusChecked((item) => false);
  };
  const classes = useStyles();
  return (
    <>
    <Box className={classes.pageAccout}>
      <Container>
        <Box className={classes.titlePage} >
          <Grid item lg={6}>
            <Box >
              <Typography sx={{color:"white"}} component="h3" variant="h3">
                My account
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box className={classes.rightTextPage} >
              <Breadcrumbs sx={{color:"white"}} aria-label="breadcrumb">
                <Typography sx={{color:"white"}} component="h6" variant="h6">
                  Home
                </Typography>
                <Typography sx={{color:"white"}} component="h6" variant="h6">
                  My account
                </Typography>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
    <Container>
      
      <Box className={classes.formPage}>
        <Grid item lg={6}>
          <Box className={classes.loginPage}>
            <Typography component="h4" variant="h4">
              Login
            </Typography>
            <Box>
            <FormControl sx={{width:"100%",paddingRight:"40px"}} variant="standard">
                  <Typography sx={{marginBottom:"10px",marginTop:"20px"}}>Username or email address *</Typography>
                  <input className={classes.inputAccout} type="text" name="name"/>
                  <Typography sx={{marginBottom:"10px",marginTop:"20px"}}>Password *</Typography>
                  <input className={classes.inputAccout} type="text" name="password"/>
            </FormControl>
            <Box >
                <Button variant="contained" 
                  sx={{
                    marginTop:"20px",
                    borderRadius: "25px",
                    width: "100px"
                  }}
                >
                  Login
                </Button>
                </Box>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember me"
                  />
                  <Box>
                    <Typography component="span" variant="span">
                      <a href="#"> Lost your password?</a>
                    </Typography>
                  </Box>
               
          </Box>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box className={classes.regisPage}>
            <Typography component="h4" variant="h4">
              Register
            </Typography>

            <FormControl sx={{width:"100%",paddingRight:"40px"}} variant="standard"> 
                <Typography sx={{marginBottom:"10px",marginTop:"20px"}}>Username or email address *</Typography>
                <input className={classes.inputAccout} type="text" name="name"/>
                <Typography sx={{marginBottom:"10px",marginTop:"20px"}}>Password *</Typography>
                <input className={classes.inputAccout} type="text" name="password"/>
            </FormControl>
            <Box>
                  <Button variant="contained" 
                    sx={{
                      marginTop:"20px",
                      borderRadius: "25px",
                      width: "100px"
                    }}
                  >
                    Register
                  </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
    </>
  );
}