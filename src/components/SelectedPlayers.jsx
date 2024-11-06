const SelectedPlayers = ({ selectedPlayers, removePlayer, setShowAvailable }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 mb-5 px-3 md:px-0">
      {selectedPlayers.map(player => (
        <div key={player.playerId} className="flex items-center justify-between mb-4 bg-gray-100 py-2 px-3 rounded-md border-y-2 border-lime-300 shadow-md">
          <div className="flex items-center gap-5">
            <img src={player.image} alt="img" className="w-16 h-16 rounded-full md:w-20 md:h-20" />

            <div className="flex flex-col">
              <p className="text-base md:text-lg font-bold">{player.name}</p>
              <p className="text-xs md:text-base font-medium text-gray-600">{player.role}</p>
              <p className="text-xs md:text-base font-medium text-gray-600">Price: {player.bidding_price}</p>
            </div>
          </div>

          <div>
            <i 
              className="fa-regular fa-trash-can btn bg-red-200 text-red-500 rounded-full cursor-pointer" 
              onClick={() => removePlayer(player.playerId)} 
            ></i>
          </div>
        </div>
      ))}
      <button 
        className="btn bg-lime-500 border-none hover:text-lime-500 text-white text-xs md:text-base font-normal" 
        id="add" 
        onClick={() => setShowAvailable(true)}
      >
        Add More Player
      </button> 
    </div>
  );
};

export default SelectedPlayers;
