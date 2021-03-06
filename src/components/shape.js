/**
 * This component renders a background shape.
 */

import React from 'react'

class Shape extends React.Component {

    constructor(props)
    {
        super(props);
        this.props = props;
    }

    render() {

        let file;
        switch (this.props.color) {
            case "purple":
                file = "PurpleShape";
                break;
            case "gold":
                file = "GoldShape";
                break;
            default: 
                file = "PurpleShape";
        }

        return (
            <div style={styles.shape}>
                <object data={require(`../images/${file}.svg`)} type="image/svg+xml" style={{float: this.props.color === "gold" ? "right" : "left"}}>
                    <img alt={this.props.color} src={require(`../images/${file}.png`)} />
                </object>
            </div>
        )
    }
}


const styles = {
    shape: {
        overflow: "hidden"
    }
};

export default Shape;