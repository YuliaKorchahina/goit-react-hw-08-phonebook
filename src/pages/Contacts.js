import { selectFilter } from 'redux/contactsBook/filter/filter-selector';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectLoading,
  selectContacts,
} from 'redux/contactsBook/contacts/contacts-selector';

import { Loader } from 'components/Loader';

import toast from 'react-hot-toast';

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';

const getFiltredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLocaleLowerCase();
  const filtredData = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return filtredData;
};

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
    toast.success(`Сontact has been deleted`);
  };

  return (
    <ol>
      {loading && <Loader />}
      {!loading &&
        contacts.length > 0 &&
        getFiltredContacts(contacts, filter).map(({ id, name, number }) => (
          <li key={id}>
            {name} : {number}{' '}
            <Button
              type="button"
              onClick={() => onDelete(id)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        ))}
    </ol>
  );
};

ContactsList.propTypes = {
  getFiltredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
