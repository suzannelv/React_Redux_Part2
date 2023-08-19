import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/actionCreators";

export class Category extends PureComponent {
    componentDidMount() {
        this.props.fetchHomeMultidata();
    }
    render() {
        return (
            <div>
                <h2>Category</h2>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchHomeMultidata() {
        dispatch(fetchHomeMultidataAction());
    },
});

export default connect(null, mapDispatchToProps)(Category);
