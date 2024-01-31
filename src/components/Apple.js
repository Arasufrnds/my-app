import React from "react";

class Apple extends React.Component{
    render() {
        const { appleDetail } = this.props;
        const {type, color } = appleDetail;
        return(
            <h1>Im class {color} {type}</h1>
        )
    }
}

export default Apple;