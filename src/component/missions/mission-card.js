import React from "react";
import PropTypes from 'prop-types'

export default function missionItem({itemDetail}) {
    return (
        <tr>
            <td>
                <strong>
                    {itemDetail.mission_name}
                </strong>
            </td>
            <td>{itemDetail.description}</td>
            <td className="btnDataBox">
                <button type="button">Not a member</button>
            </td>
            <td className="btnDataBox">
                <button type="button" className="rightBtn">Join Mission</button>
            </td>
        </tr>
    )
}