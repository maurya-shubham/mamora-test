import * as React from "react";
import { getSeverityString } from "./concernApi";

export function ConcernTable() {
  const data = [
    {
      id: 1,
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
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.date.toString()}</td>
                <td>{getSeverityString(data.severity)}</td>
                <td>{data.message}</td>
                <td>
                  <button>Resolve</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
