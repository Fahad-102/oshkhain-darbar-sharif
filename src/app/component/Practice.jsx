import Image from 'next/image';
import React from 'react';

const Practice = () => {
    return (
        <div className=' border-2 m-50 h-50 border-red-500'>
            <Image
            src="/majar.jpg"
            alt='majar'
            width='50'
            height='50'
            />
        </div>
    );
};

export default Practice;