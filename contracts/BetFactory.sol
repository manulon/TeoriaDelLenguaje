// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./TableFactory.sol";

contract BetFactory {
    uint public id;
    Bet[] public bets;
    // IOzToken ozContract;
    address casino;

    constructor(address _casinoAddress){
        casino = _casinoAddress;
    }

    struct Bet{
        uint id;
        address gambler;        // address del jugador
        bool ended;             // estado de la apuesta: finalizada o no.
        bool gamblerCashOut;    // estado del jugador: si retiro el dinero ganado o no.     
        uint amount;            // precio apostado.
        uint number;            // numero que se aposto.
    }

    event makeBet(address casino, uint amount, address gambler);
    //event makeWithdraw(address casino, address gambler, uint amount);
    
    function createBet (address gamblerAddress, uint amount, uint n) public returns(uint){
        require (casino != address(0), "Se necesita una cuenta para iniciar una subasta.");
        
        uint newBetId = id;
        id ++;
    
        bets.push(Bet(newBetId, gamblerAddress, false, false, amount, n));

        // saco la guita 
        emit makeBet(casino, amount, gamblerAddress);

        return newBetId;
    }



    /* esto que seria ? */
    /*function setTokenAdress(address _ozAddress) public payable returns(bool){
        require(msg.sender == owner, "Solo el OWNER puede cambiar el Token.");
        ozContract = IOzToken(_ozAddress);
        return true;
    }*/

    function getAddress() view external returns(address){
        return casino;
    }

    function tableIsFull() public view returns(bool){
        if (bets.length >= 4){
            return true;
        }
        return false;
    }

    function makeWithdraw(uint _id, address tableAddress) public {
        address winnerAccount;
        uint amount;

        Bet storage b = bets[_id];
        require ( b.ended , "La apuesta no ha finalizado.");
       
        (bool success, bytes memory data) = 
                            tableAddress.call(abi.encodeWithSignature
                            ('getWinnerNumber(uint)', _id));
        require (success, "Error");
        (uint winnerNumber) = abi.decode(data, (uint));

        if (b.number == winnerNumber) {
            winnerAccount = b.gambler;
            amount = b.amount * 2; /* aca duplica su dinero, podria cambiarse. */
            /* es necesario un booleano para ver si retiro el dinero? */
        }
        /* pagar */
        /* evento */
    }

    function closeBets(address tableAddress) public returns(bool){
        for (uint i=0; i<bets.length; i++){
            makeWithdraw(i, tableAddress);
        }
        return true;
    }
}
