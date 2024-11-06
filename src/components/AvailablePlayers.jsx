import React from 'react';

const AvailablePlayers = ({selectedPlayers, showAvailable, setShowAvailable}) => {
    return (
        <div className='max-w-screen-xl mx-auto mt-14 mb-5 px-3 md:px-0'>

            <div className='flex items-center justify-between mb-5'>
                <p className='text-xs md:text-lg font-medium md:font-semibold'>{showAvailable ? "Available Players" : `Selected Players (${selectedPlayers.length} / 6)`}</p>

                <div className='flex item-center'>
                    <button onClick={() => setShowAvailable(true)} className={`border-2 py-1 px-3 rounded-l-lg ${showAvailable ? "bg-yellow-300" : ""}`}>Available
                    </button>
                    <button onClick={() => setShowAvailable(false)} className={`border-2 py-1 px-3 rounded-r-lg ${!showAvailable ? "bg-yellow-300" : ""}`}> Selected ({selectedPlayers.length})</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;
