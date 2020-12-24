import React from "react";
import {Row} from "reactstrap";
import "./ReportItem.scss";

export const ReportItem = ({id, title, url, imageUrl, newsSite, summary, publishedAt, updatedAt}) => {

    const createData = (dateData) => {
        const date = new Date(dateData);

        return (`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`);
    }

    return (
        <div className="reports-item">

                    <li className="table-row">
                        <div className="col col-1" data-label="iss">Report</div>
                        <div className="col col-2" data-label="from">{newsSite}</div>
                        <div className="col col-3" data-label="date">{createData(publishedAt)}</div>
                        <a target="_blank" href={url} className="report-link col col-4" data-label="source">Read...</a>
                    </li>

        </div>
    )

}

