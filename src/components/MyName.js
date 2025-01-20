import React, { Component } from "react";

class MyName extends Component {
    // static defaultProps = {
    //     name: '기본이름'
    // }
    render() {
        return (
            <div>
                안녕하셔요 제 이름은 <span>{this.props.name}</span>입니다.
            </div>
        )
    }
}

MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;