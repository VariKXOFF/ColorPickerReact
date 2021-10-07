import React from 'react'

export default class Color extends React.Component {
    render() {
        return <div style={{backgroundColor: this.props.color}} className="color-block">
            {this.props.color}
        </div>
    }
}