import * as React from "react";
import { getSeverityString } from "./concernApi";

export class ConcernTable extends React.Component {
  render() {
    const data = [
      {
        date: "Jan 10, 2021 9:00AM",
        severity: 3,
        message: "I am having trouble sleeping"
      }
    ];

    return (
      <>
        <h1>Patient Concerns</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Severity</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].date}</td>
              <td>{getSeverityString(data[0].severity)}</td>
              <td>{data[0].message}</td>
              <td>
                <button>Resolve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
