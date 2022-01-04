import SearchForm from "./search-form";
import PropTypes from 'prop-types';
import { Container } from "@mui/material";

const SearchBox = ({ searchQuery, setSearchQuery, handleSearchForm }) => {
    return (
        <Container>
            <h3>Search Result</h3>
            <SearchForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearchForm={handleSearchForm}
            />
        </Container>
    )
}

SearchBox.PropTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    handleSearchForm: PropTypes.func
};

SearchBox.defaultProps = {
    searchQuery: '',
    setSearchQuery: () => null,
    handleSearchForm: () => null
};

export default SearchBox