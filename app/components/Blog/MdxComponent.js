// CustomTable.js
import React from "react";
import "../../style/blog-style.css"; // Optional: import custom CSS if needed

const Table = ({ children }) => (
  <table className="custom-table">{children}</table>
);

const THead = ({ children }) => (
  <thead className="custom-thead">{children}</thead>
);

const TBody = ({ children }) => (
  <tbody className="custom-tbody">{children}</tbody>
);

const Tr = ({ children }) => <tr className="custom-tr">{children}</tr>;

const Th = ({ children }) => <th className="custom-th">{children}</th>;

const Td = ({ children }) => <td className="custom-td">{children}</td>;

export { Table, THead, TBody, Tr, Th, Td };
