import React, { useState, Fragment } from "react";
import { Table, Button } from "antd";
import SortOrderIndicator from "./SortOrderIndicator";
import sortByColumnIndex from "../helper/Utils";
import DragSorter from "./DragSorter";


const sortStander = "title";

export default ({ columns, dataSource, ...resProps }) => {
  const [sortedColumns, setSortedColumns] = useState(columns);
  //0:default，　1:asc 2:desc
  const [sortOrder, setSortOrder] = useState(0);

  const reSort = () => {
    const newOrder = (sortOrder + 1) % 3;
    const newColumns = sortByColumnIndex(columns, newOrder, sortStander);
    setSortedColumns(newColumns);
    setSortOrder(newOrder);
  };

  const onSortEnd = ({oldIndex, newIndex}) => {
    const newcolumns = sortedColumns.slice();
    const [itemToMove] = newcolumns.splice(oldIndex,1);
    newcolumns.splice(newIndex,0,itemToMove);
    setSortedColumns(newcolumns);
  };

  return (
    <Fragment>
      <Button onClick={reSort} type="primary">
        <SortOrderIndicator sortOrder={sortOrder} />
      </Button>
      <DragSorter data={sortedColumns} onSortEnd={onSortEnd} sortStander={sortStander}/>
      <Table columns={sortedColumns} dataSource={dataSource} {...resProps} />
    </Fragment>
  );
};
