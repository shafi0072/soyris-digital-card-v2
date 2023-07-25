import React from 'react';
import CardName from './CardName';
import Personalised from './Personalised';
import CardStatus from './CardStatus';
import DuplicateCard from './DuplicateCard';
import DeleteCard from './DeleteCard';

const Settings = () => {
    return (
        <div>
            <CardName/>
            <Personalised/>
            <CardStatus/>
            <DuplicateCard/>
            <DeleteCard/>
        </div>
    );
};

export default Settings;