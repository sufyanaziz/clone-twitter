import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import styled from "styled-components";

const Search = ({ onChange, fullWidth }) => {
  return (
    <SearchComponent fullWidth={fullWidth}>
      <input
        type="text"
        placeholder="Search Twitter"
        className="search__input"
        onChange={onChange}
      />
      <div className="search__icon">
        <SearchIcon className="search__icon__icon" />
      </div>
    </SearchComponent>
  );
};

const SearchComponent = styled.div`
  width: ${(props) => props.fullWidth && "100%"};
  .search__input {
    width: 100%;
    padding: 14px 2.5rem;
    border-radius: 2rem;
    border: 1px solid #e7ecf0;
    background: #e7ecf0;
    color: #7e8790;
    outline: none;
    font-size: 16px;
  }
  .search__icon {
    position: absolute;
    top: 22.5px;
    margin-left: 10px;
    color: #7e8790;
  }
  .search__input:focus {
    background-color: white;
    border: 1px solid var(--primaryBlue);
  }
  .search__input:focus + .search__icon {
    color: var(--primaryBlue);
  }
`;

export default Search;
