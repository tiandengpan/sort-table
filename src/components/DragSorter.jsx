import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items, sortStander }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem
          key={value[sortStander]}
          index={index}
          value={value[sortStander]}
        />
      ))}
    </ul>
  );
});

export default ({ data, onSortEnd, sortStander }) => (
  <SortableList items={data} onSortEnd={onSortEnd} sortStander={sortStander} />
);
