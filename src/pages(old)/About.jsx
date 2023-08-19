import React, { PureComponent } from "react";
// 使用react-redux包里的 connect函数将store和文件连接起来
import { connect } from "react-redux";
// import store from "../store";
import { addNumberAction, subNumberAction } from "../store/actionCreators";

export class About extends PureComponent {
    calcNumber(num, isAdd) {
        if (isAdd) {
            console.log("+", num);
            // store.dispatch(addNumberAction(num))
            this.props.addNumer(num);
        } else {
            console.log("-", num);
            this.props.subNumber(num);
        }
    }
    render() {
        const { counter, banners, recommends } = this.props;
        return (
            <div>
                <h2>About: {counter}</h2>
                <div>
                    <button onClick={(e) => this.calcNumber(6, true)}>
                        +6
                    </button>
                    <button onClick={(e) => this.calcNumber(6, false)}>
                        -6
                    </button>
                    <button onClick={(e) => this.calcNumber(88, true)}>
                        +88
                    </button>
                    <button onClick={(e) => this.calcNumber(88, false)}>
                        -88
                    </button>
                </div>
                <div className="banner">
                    <h2>Carousel: </h2>
                    <ul>
                        {banners.map((item, index) => {
                            return <li key={index}>{item.title}</li>;
                        })}
                    </ul>
                </div>
                <div className="recommend">
                    <h2>recommends</h2>
                    <ul>
                        {recommends.map((item, index) => {
                            return <li key={index}>{item.title}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
// connect()的返回值是一个高阶组件
// 第一个参数是将state中的数据映射到对应组件的props里面
// 第二个参数是将state中的数据映射到对应组件的props里面

// function mapStateToProps(state) {
//     return {
//         counter: state.counter,
//     };
// }
function fn2(dispatch) {
    return {
        addNumer(num) {
            dispatch(addNumberAction(num));
        },
        subNumber(num) {
            dispatch(subNumberAction(num));
        },
    };
}
const mapStateToProps = (state) => ({
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
    addNumer: function (num) {
        dispatch(addNumberAction(num));
    },
    subNumber: function (num) {
        dispatch(subNumberAction(num));
    },
});
// 第一个小括号是执行connect函数，并返回一个高阶组件之后再执行一次并传入另外一个组件进行劫持操作，
export default connect(mapStateToProps, mapDispatchToProps)(About);
