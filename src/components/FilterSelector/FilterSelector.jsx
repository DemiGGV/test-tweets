import { statusFilters } from 'pages/Tweets';
import React from 'react';
import { Label } from './FilterSelector.styles';

export const FilterSelector = ({ setFilter, filter }) => {
  return (
    <Label title="Choosing the filter">
      <span>Choose filter:</span>
      <select
        onChange={e => {
          setFilter(e.target.value);
        }}
        name="filters"
        defaultValue={filter}
      >
        <option value={statusFilters.all}>All</option>
        <option value={statusFilters.follow}>Follow</option>
        <option value={statusFilters.following}>Following</option>
      </select>
    </Label>
  );
};
