import React from "react";
import { Container, Box, Grid } from '@mui/material';

// import icon
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AppProvider } from "./context/Appcontext";
// import logo
import LogoeBay from '../assets/img/ebaylogo.png';
import arrow_down from '../assets/img/arrow_down.png';

// makestyle
import { makeStyles } from "@material-ui/core";
import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import SearchForm from "./search/search-form";
import SearchBox from "./search/search-box";
import PropTypes from 'prop-types';
import { useState } from "react";
import Search from "../pages/search";
import { useLazyQuery } from "@apollo/client";
//import { GET_SEARCH_RESULTS_WITH_TOTAL_PAGES } from "../libs/queries/search/get-search-result";

const Item = () => { };
const useStyle_searchHeader = makeStyles({

    HeaderMidItem: {
        borderBottom: '1px solid #eee',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    logo: {
        '@media (max-width: 899px)': {
            margin: '15px 0px',
            textAlign: 'center',
        }
    },
    SearchHeader: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        '& select': {
            width: ' 25%',
            float: 'left',
            height: '36px',
            paddingLeft: '15px',
            border: '1px solid #d1d3d4',
            borderRight: 'none',
            borderRadius: '50px 0 0 50px',
            color: '#666',
            minWidth: '187px',
            appearance: 'none',
            backgroundImage: `url(${arrow_down.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px top 14px',
            fontSize: '15px',
            fontFamily: "Mulish,'sans-serif'",
            fontWeight: 400,
            '&:focus': {
                outline: 'none',
            },
            '@media (max-width: 599px)': {
                display: 'none',
            }
        },
        '& input': {
            height: '36px',
            width: ' 100%',
            padding: '0px 95px 0px 15px',
            border: '1px solid #d1d3d4',
            borderRadius: '0px 50px 50px 0px',
            color: '#666',
            fontSize: '15px',
            fontFamily: "Mulish,'sans-serif'",
            fontWeight: 400,
            '&:focus': {
                outline: 'none',
            },
            '@media (max-width: 599px)': {
                borderRadius: '50px',
            }
        },
        '& button': {
            position: 'absolute',
            right: '10px',
            top: '0px',
            border: 'none',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            width: '60px',
            height: '36px',
            padding: 0,
            borderLeft: '1px solid #d1d3d4',
            zIndex: 10,
            '&:hover': {
                cursor: 'pointer',
            },
            '& svg': {
                fontSize: '25',
                margin: '7px -9px 0px 0px',
                color: '#444',
            }
        }
    },
    boxCart: {
        textAlign: 'right',
    },
    cartHeader: {
        position: 'relative',
        display: 'inline-block',
        width: '30px',
        height: '30px',
        '& svg': {
            fontSize: '30px',
        }

    }
});



const HeaderMid = (props, handleSearchForm) => {


    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const [queryResultPosts, setQueryResultPosts] = useState({});
    const [showResultInfo, setShowResultInfo] = useState(false)

    // const [fetchPosts, { loading }] = useLazyQuery(GET_SEARCH_RESULTS_WITH_TOTAL_PAGES, {
    //     notifyOnNetworkStatusChange: true,
    //     onCompleted: (data) => {
    //         setQueryResultPosts(data?.posts ?? {});
    //         setShowResultInfo(true);
    //     },
    //     onError: (error) => {
    //         setSearchError(error?.graphQLErrors ?? '');
    //     }
    // });

    const classes = useStyle_searchHeader();
    console.log('searchQuery', searchQuery);
    return (
        <AppProvider>
            <div className={classes.HeaderMidItem}>
                <React.Fragment>
                    <Container maxWidth="lg">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={3}>
                                    <div className={classes.logo}>
                                        <Link href='/'>
                                            <a>
                                                <img src={LogoeBay.src} />
                                            </a>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid item xs={9} sm={10} md={8}>
                                    <form className={classes.SearchHeader} id="searchform">
                                        <select name="">
                                            <option value="">Shop by category</option>
                                            <option value="">Uncategorized</option>
                                            <option value="">Beauty, Health</option>
                                            <option value="">|---Body medicine</option>
                                            <option value="">|---Paint</option>
                                            <option value="">|---Part</option>
                                            <option value="">|---Tonic</option>
                                            <option value="">Books</option>
                                            <option value="">|---Bookse</option>
                                            <option value="">|---Kid books</option>
                                            <option value="">|---Movies &amp; TV</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="What are you looking for..."
                                            value={searchQuery}
                                            onChange={(event) => setSearchQuery(event?.target?.value)}
                                        />
                                        <button type="submit" onClick={handleSearchForm}><SearchOutlinedIcon /></button>
                                    </form>
                                </Grid>
                                <Grid item xs={3} sm={2} md={1}>
                                    <div className={classes.boxCart}>
                                        <a className={classes.cartHeader}>
                                            <CartIcon />
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
        </AppProvider>
    );
};

HeaderMid.PropTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    handleSearchForm: PropTypes.func
}

HeaderMid.defaultProps = {
    searchQuery: '',
    setSearchQuery: () => null,
    handleSearchForm: () => null
}

export default HeaderMid;