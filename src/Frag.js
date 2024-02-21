import { Fragment } from "react"
import Row from "./Row"

function Frag() {
    return (

        <table>
            <tbody>
                <tr>
                    <td>roll no</td>
                    <td>name</td>
                    <td>marks</td>
                </tr>
                <tr>
                    <Row></Row>
                </tr>
            </tbody>
        </table>
    )
}
export default Frag