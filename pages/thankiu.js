import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";




const useStyles = makeStyles({
    viewOrder: {
        borderRadius: '20px',
        backgroundColor: 'green',
        height: '40px',
        lineHeight: '34px',
        padding: '0px 30px',
        color: '#fff',
        border: 'none',
        textTransform: 'uppercase',
        fontSize: '16px',
        marginTop: '20px',
        '&:hover': {
            cursor: 'pointer',
        }
    }

})
export default function About() {
    const classes = useStyles();
    
    return (
        <>
        <Container>
            <Box sx={{textAlign:"center"}}>
                <Typography component="h4" variant="h4">Payment success</Typography>
                <Typography component="h6" variant="h6">Thank you and see you again</Typography>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Link href="/orders" >
                    <a>
                        <button variant="contained" className={classes.viewOrder}>View Order</button>
                    </a>
                </Link>
            </Box>
        </Container>
        </>
    );
}