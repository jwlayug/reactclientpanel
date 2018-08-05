import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Clients extends Component {
  render() {
    const clients = [
      {
        id: "435453",
        firstName: "James",
        lastName: "Bow",
        email: "jamesbow@gmail.com",
        phone: "444-444-4444",
        balance: "10"
      },
      {
        id: "435453",
        firstName: "Wil",
        lastName: "Bow",
        email: "jamesbow@gmail.com",
        phone: "444-444-4444",
        balance: "101.431"
      }
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <i className="fas fa-users" /> Clients{" "}
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Blance</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.firstName} {client.lastName}</td>
                        <td>{client.email}</td>
                        <td>PHP {parseFloat(client.balance).toFixed(2)}</td>
                        <td>
                            <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                <i className="fas fa-arrow-circlie-right"/> Details
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

export default Clients;
