import * as React from "react"
import { graphql } from "gatsby"

export default function Component(props) {
  console.log(props.data)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hair Color</th>
          </tr>
        </thead>
        <tbody>
          {props.data.allAirtable.nodes.map((node) => {
            return (
              <tr>
                <td>{node.data.Name}</td>
                <td>{node.data.Hair_Color}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allAirtable(sort: { fields: data___Name }) {
      nodes {
        data {
          Name
          Hair_Color
        }
      }
    }
  }
`
