import React from 'react';
import './PrintableBox.css';
import {FaPlusCircle} from 'react-icons/fa'

function PrintableBox () {
    return (
        <>
            <div className='newprint-btn'>
                <FaPlusCircle className='new-btn' />
                <p>New</p>
            </div>
            <div className='my-printables'>
                <div className='printing-box'>
                    <ul className='printbox-switch'>
                        <li className='switch-item active'>Awaiting</li>
                        <li className='switch-item'>Finished</li>
                    </ul>
                    <div className='print-box'>
                        <div className='print-list'>
                            <ul className='prints'>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                                <li className='printable'>Bruh</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrintableBox;