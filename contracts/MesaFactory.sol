// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

// hay que ver que es esto
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract MesaFactory is Ownable {

contract TableFactory {

    event NewTable(uint id, uint randomNumber, uint8 maxPlayers);

    struct Table {
        uint tableId;
        uint8 maxPlayers;
        uint number;
    }
    
    Table[] public tables;

    /*
    mapping (uint => address) public cartaAPersona;
    mapping (address => uint) personaCantidadCartas;
    */

    function _createTable(uint randomNumber, uint8 maxPlayers) internal {
        uint id = tables.length - 1;
        
        tables.push(Table(id, maxPlayers, randomNumber));
        
        /*cartaAPersona[id] = msg.sender;
        personaCantidadCartas[msg.sender] ++;*/
        
        emit NewTable(id, randomNumber, maxPlayers);
    }

}
