import s from "../SearchBox/SearchBox.module.scss";

export const SearchBox = ({ setSearchValue, searchValue }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter contact name..."
      />
    </div>
  );
};
export default SearchBox;
