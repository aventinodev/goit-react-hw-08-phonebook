import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onSetFilter}
      />
    </label>
  );
};

export default Filter;
