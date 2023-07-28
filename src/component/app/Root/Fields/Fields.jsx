import React from 'react';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Content from './InputFildGroup/Content';

const Fields = () => {
    const [feilds, setFeilds] = useState([]);
    return (
        <div class="grid grid-cols-3 gap-4">

            <div class="...">
            <Sidebar feilds={feilds} setFeilds={setFeilds} />
            </div>
            <div class="col-span-2 ...">
                <Content feilds={feilds} />
            </div>
        </div>
    );
};

export default Fields;