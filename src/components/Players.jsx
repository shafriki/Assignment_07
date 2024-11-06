import React, { useEffect, useState } from 'react';

const Players = ({addPlayer}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-3 md:px-0'>
            {players.map(player => (

                <div key={player.playerId} className="card bg-base-100 shadow-xl border-2 rounded-xl">
                    <figure className="px-5 pt-5">
                        <img src={player.image} alt="players" className="w-full h-52 rounded-lg" />
                    </figure>

                    <div className="px-5 py-5">
                        <h2 className="text-base md:text-xl font-semibold mb-2">
                            <i className="fa-solid fa-user"></i> {player.name}
                        </h2>

                        <div className='flex items-center justify-between'>
                            <p className='text-xs md:text-base text-gray-500'>
                                <i className="fa-solid fa-flag"></i> {player.country}
                            </p>
                            <p className='text-sm bg-gray-200 py-1 px-2 rounded-lg'>{player.role}</p>
                        </div>
                        
                        <hr className="border-t-2 border-gray-300 my-2" />
                        <p className='text-xs md:text-base font-bold mb-2'>Rating</p>

                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-xs md:text-base font-semibold'>{player.batting_type}</p>
                            <p className='text-xs md:text-base font-normal text-gray-500'>{player.bowling_type}</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-xs md:text-base font-semibold'>Price: {player.bidding_price}</p>
                            <button className='btn text-xs md:text-sm font-medium bg-sky-400 text-white' onClick={() => addPlayer(player)}> Choose Player</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Players;
