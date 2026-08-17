import React from "react";
import { EllipsisVertical } from "lucide-react";

function TransactionTable() {
  return (
    <table className="table table-md">
      <thead className="text-primary-text">
        <tr>
          <th>No.</th>
          <th>Checkbox</th>
          <th>Expense Name</th>
          <th>Expense Type</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Total Price</th>
          <th>Date Added</th>
          <th>Due Date</th>
          <th></th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody className="text-primary-text">
        <tr>
          <td className="">
            <p>1</p>
          </td>
          <td className="">
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <p>Expense 1</p>
          </td>
          <td>
            <p>Home</p>
          </td>
          <td className="text-text-pending">
            <p>Pending</p>
          </td>
          <td>
            <p>10</p>
          </td>
          <td>
            <p>$10.00</p>
          </td>
          <td>
            <p>2023-10-15</p>
          </td>
          <td>
            <p>2023-10-15</p>
          </td>
          <td>
            <button className="button-base">Paid</button>
          </td>
          <td>
            <EllipsisVertical />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionTable;
