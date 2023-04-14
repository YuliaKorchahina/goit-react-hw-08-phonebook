import PropTypes from 'prop-types';

import { ContactsList } from './Contacts';
import { Phonebook } from 'components/Phonebook';
import { Filter } from 'components/Filter';

export const PhonebookPage = () => {
  return (
    <>
      <Phonebook />
      <Filter />
      <ContactsList />
    </>
  );
};

PhonebookPage.propTypes = {
  isDublicate: PropTypes.func,
  onAddContact: PropTypes.func,
};
