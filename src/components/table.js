import React, { Component } from 'react'

import colors from "../colors";

export default class Table extends Component {
  render() {

    let { data } = this.props;

    return (
      <div style={styles.container}>
        <table>
            <tbody>
                {
                    data.map( (row) => (
                        <tr>
                            {
                                row.map( (entry) => (
                                    <td style={entry.b ? styles.bold: {}}>{entry.t}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

const styles = {
    bold: {
        fontWeight: "bold",
        backgroundColor: colors.gold,
    },
    container: {
        borderRadius: 8,
        overflow: "hidden"
    }
}