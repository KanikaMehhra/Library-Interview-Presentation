import * as React from 'react';
import TextField from "@material-ui/core/TextField";

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBar = ({ titles, authors,updateTitleSearch, updateAuthorSearch }) => {
    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={titles}
                onChange={(e)=>updateTitleSearch(e.target.value)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Title" />}
            />
            <Autocomplete
                onChange={(e)=>updateAuthorSearch(e.target.value)}
                disablePortal
                id="combo-box-demo"
                options={authors}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Author" />}
            />
        </div>
    );
}

export default SearchBar;