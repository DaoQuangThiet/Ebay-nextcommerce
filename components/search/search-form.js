import { Container } from "@mui/material";
import PropTypes from 'prop-types';


const SearchForm = ({ searchQuery, setSearchQuery, handleSearchForm }) => {
    return (
        <Container>
            KET QUA DAY
        </Container>
    )
}


SearchForm.PropTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    handleSearchForm: PropTypes.func
}

SearchForm.defaultProps = {
    searchQuery: '',
    setSearchQuery: () => null,
    handleSearchForm: () => null
}

export default SearchForm