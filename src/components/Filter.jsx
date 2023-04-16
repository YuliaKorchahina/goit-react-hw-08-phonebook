import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { selectFilter } from 'redux/contactsBook/filter/filter-selector';
import { setFilter } from 'redux/contactsBook/filter/filter-slice';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <TextField
        id="outlined-basic"
        label="Find contact by name"
        variant="outlined"
        type="text"
        name="filter"
        onChange={onFilter}
        value={filter}
      />
    </>
  );
};

Filter.filter = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
