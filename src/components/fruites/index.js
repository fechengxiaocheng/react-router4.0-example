import React from 'react';

class Woman extends React.Component {
    render() {
        console.log('fruites template...', this.props);
        return (
            <div className="">
                {this.props.match.params.type}
            </div>
        )
    }
}

export default Woman;