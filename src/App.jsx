import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AvailablePlayers from "./components/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers";
import Players from "./components/Players";
import Footer from "./components/Footer";


const App = () => {
  const [balance, setBalance] = useState(0);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  
  const [showAvailable, setShowAvailable] = useState(true);
  const maxPlayers = 6;

  const addCredit = () => {
    setBalance(balance + 6000000);
    toast.success("Credit Added to your Account");
  };

  const addPlayer = (player) => {
    const playerPrice = parseInt(player.bidding_price.replace(/[^0-9]/g, ''));

    if (selectedPlayers.some(selectedPlayer => selectedPlayer.playerId === player.playerId)) {
      toast.info(`${player.name} Already Selected`);
      return;
    }

    if (balance >= playerPrice) {
      if (selectedPlayers.length < maxPlayers) {
        setSelectedPlayers([...selectedPlayers, player]);
        setBalance(balance - playerPrice);
        toast.success(`Congrats!! ${player.name} is now in your squad`);
      } 
      else {
        toast.warn("Maximum players already selected.");
      }
    } else {
      toast.error(`Not enough money to buy ${player.name}.`);
    }
  };

  const removePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);
    
    if (playerToRemove) {
      const playerPrice = parseInt(playerToRemove.bidding_price.replace(/[^0-9]/g, ''));
      setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
      setBalance(balance + playerPrice);
      toast.success("Player Removed.");
    }
  };

  return (
    <div>
      {/* navbar section */}
      <Header balance={balance}></Header>

      {/* banner section */}
      <Banner addCredit={addCredit}></Banner>

      {/* available player section */}
      <AvailablePlayers selectedPlayers={selectedPlayers} showAvailable={showAvailable}
        setShowAvailable={setShowAvailable}></AvailablePlayers>

      {/* selected player section */}
      {showAvailable ? (
        <Players addPlayer={addPlayer} ></Players>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} 
        setShowAvailable={setShowAvailable}></SelectedPlayers>
      )}

      {/* footer section */}
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={3000}></ToastContainer>

    </div>
  );
};

export default App;
