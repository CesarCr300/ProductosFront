import SearchBar from "@mkyy/mui-search-bar";
import { useEffect, useState } from "react";

export interface ITableSearchBar {
  rows: any;
  setRows: (p: any) => void;
  paramToSearch: string;
}

export const TableSearchBar = ({
  rows,
  setRows,
  paramToSearch,
}: ITableSearchBar) => {
  const [originalRows, setOriginalRows] = useState(rows);
  const [searched, setSearched] = useState<string>("");

  const handleSearch = () => {
    if (searched == "") {
      setRows(originalRows);
      return;
    }
    const filteredRows = originalRows.filter((row: any) => {
      return row[paramToSearch].toLowerCase().includes(searched.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    setRows(originalRows);
  };

  useEffect(() => {
    if (originalRows.length !== 0) return;
    setOriginalRows(rows);
  }, [rows]);

  return (
    <SearchBar
      value={searched}
      onChange={(newValue) => setSearched(newValue)}
      onSearch={handleSearch}
      onCancelResearch={cancelSearch}
    />
  );
};
