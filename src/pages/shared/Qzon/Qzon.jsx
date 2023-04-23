import React from 'react';
import qzon1 from '../../../assets/qZone1.png'
import qzon2 from '../../../assets/qZone2.png'
import qzon3 from '../../../assets/qZone3.png'

const Qzon = () => {
    return (
        <div className='my-5'>
            <h4>Q-Zon</h4>

            <div className='text-center my-3'>
                <img src={qzon1} alt="" />
                <img src={qzon2} alt="" />
                <img src={qzon3} alt="" />
            </div>

        </div>
    );
};

export default Qzon;