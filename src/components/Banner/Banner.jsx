import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16'>
            <div>
                <h1 className='text-4xl mb-10'>Books to freshen up <br />your bookshelf</h1>
                <button className="btn btn-primary">View The List</button>
            </div>
            <div className='w-3/10 '>
                <img src={bookImg} className='rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default Banner;