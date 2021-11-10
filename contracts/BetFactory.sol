// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

/* nuestro token
import "./ozToken.sol";
import "./IOzToken.sol";
*/

import "./TableFactory.sol";

contract BetFactory {
    uint public id;
    Bet[] public bets;
    // IOzToken ozContract;
    address owner;
    
    constructor(/*address _ozAddress*/){
        id = 0;
        //ozContract = IOzToken(_ozAddress);
        owner = msg.sender;
    }

    struct Bet{
        uint id;
        address casino;         // address del "casino"
        address gambler;        // address del jugador
        bool ended;             // estado de la apuesta: finalizada o no.
        bool gamblerCashOut;    // estado del jugador: si retiro el dinero ganado o no.     
        uint amount;            // precio apostado.
        //mapping(address => uint256)  ofertasLicitadores; //Hash-> licitadores-ofertas
    }

    event makeBet(address casino, uint amount, address gambler);
    event makeWithdraw(address casino, address gambler, uint amount);
    
    function createBet (address _casino) public returns(uint){
        require (_casino != address(0), "Se necesita una cuenta para iniciar una subasta.");
        bets.push();
        uint idNuevaSubasta = id;
        id ++;
        return idNuevaSubasta;
    }

    /* creo que esto no sera necesario. */
    function getIdSubastasDisponibles() view public returns(uint[] memory){}

    /* esto que seria ? */
    /*function setTokenAdress(address _ozAddress) public payable returns(bool){
        require(msg.sender == owner, "Solo el OWNER puede cambiar el Token.");
        ozContract = IOzToken(_ozAddress);
        return true;
    }*/


    function retirarFondos(uint _id , address _account ) public payable betIsEnded(_id) returns (uint){

        address winnerAccount;
        uint amount;

        Bet storage b = bets[_id];
        require ( b.ended , "La apuesta no ha finalizado.");
       
        if(_account == b.gambler){ //el duenio tiene que poder retirar el dinero ganado en la subasta
            winnerAccount = b.gambler;
            amount = b.amount * 2; /* aca duplica su dinero, podria cambiarse. */
            /* es necesario un booleano para ver si retiro el dinero? */
        }

        require ( amount == 0, "No hay dinero disponible para retirar");
        
        return amount;
    }

    modifier betIsEnded(uint _id){
        Bet storage b = bets[_id];
        require (!b.ended, "Esta accion no puede realizarse si la subasta esta en curso");
        _;
    }    
 }
