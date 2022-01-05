import React from 'react';

import Card from '../Card/Card';

const CardList = ({userList}) => {
    const cardsToDisplay = () => {
        return userList.map(({name, company, id, avatar_url}) => (
            <Card name={name} company={company} key={id} avatarUrl={avatar_url}/>
        ))
    }
    
    return (
        <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {cardsToDisplay()} 
        </div>
    )
} 

export default CardList