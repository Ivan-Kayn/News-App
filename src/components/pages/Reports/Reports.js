import React, {useEffect} from "react";
import {connect} from "react-redux";
import gotService from "../../../services/gotService";
import {reportsLoaded} from "../../../actions/index";
import "./Reports.scss";
import {Row} from "reactstrap";
import _ from "lodash";
import {ReportItem} from "../../ReportItem/ReportItem";
import {Spinner} from "../../Spinner/Spinner";
import BlogItem from "../../BlogItem/BlogItem";

class Reports extends React.Component {

    service = new gotService()

    componentDidMount() {
        const service = new gotService();
        service.getAllReports().then(result => {
                this.props.reportsLoaded(result);
            }
        )
    }

    render() {
        if (this.props.reports[0] === undefined) {
            return (
                <Spinner/>
            )
        } else {
            return (
                <div className="reports">
                    <div className="container">
                        <h1>Reports List</h1>
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="col col-1">ISS</div>
                                <div className="col col-2">FROM</div>
                                <div className="col col-3">Date</div>
                                <div className="col col-4">SOURCE</div>
                            </li>
                        {this.props.reports.map(item => {
                            return (
                                <ReportItem
                                    id={item.id}
                                    title={item.title}
                                    url={item.url}
                                    imageUrl={item.imageUrl}
                                    newsSite={item.newsSite}
                                    summary={item.summary}
                                    publishedAt={item.publishedAt}
                                    updatedAt={item.updatedAt}
                                />
                            )
                        })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.reports,
    }
}

const mapDispatchToProps = {
    reportsLoaded: reportsLoaded,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);