import Container from "@mui/material/Container";
import CartItemsContainer from '../components/cart/cart-page/CartItemsContainer';
import { AppProvider } from "../components/context/Appcontext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';import Banner from '../assets/img/banner_page.png';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    page: {
        marginBottom: "60px",
        minHeight: "200px",
        backgroundImage:`url(${Banner.src})`,
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
    })

const Cart = (props) => {
    const classes = useStyles();

    
    return (
        <AppProvider>
            <Box className={classes.page}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography sx={{ color: "white" }} component="h3" variant="h3">
                  Cart
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
                    Cart
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
            <Container>
                <CartItemsContainer />
                {props.children}
            </Container>
        </AppProvider>
    )
};

export default Cart;