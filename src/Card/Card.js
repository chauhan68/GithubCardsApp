import React, { PureComponent } from 'react';

class Card extends PureComponent {
    render() {
        return (
            <div className="profile-container">
                <img src={this.props.avatarUrl} alt="User Profile"/>
                <div className='profile-info'>
                    <div className='name'>{this.props.name}</div>
                    <div className='company-name'>{this.props.company}</div>
                </div>
            </div>
        )
    }
}

export default Card