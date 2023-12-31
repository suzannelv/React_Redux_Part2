import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/home";

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
const mapStateToProps = (state) => ({
    counter: state.counter.coutner,
});

const mapDispatchToProps = (dispatch) => ({
    fetchHomeMultidata() {
        dispatch(fetchHomeMultidataAction());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
