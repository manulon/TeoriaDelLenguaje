// // SPDX-License-Identifier: GPL-3.0
// pragma solidity ^0.8.0;
// pragma experimental ABIEncoderV2;

// // hay que ver que es esto
// // import "@openzeppelin/contracts/access/Ownable.sol";

// // contract MesaFactory is Ownable {

// contract TableFactory {
//     event NewTable(uint256 id, uint256 randomNumber, uint8 maxPlayers);

//     struct Table {
//         uint256 tableId;
//         uint8 maxPlayers;
//         uint256 number;
//     }

//     Table[] public tables;

//     /*
//     mapping (uint => address) public cartaAPersona;
//     mapping (uint => Table) public tables;
//     mapping (address => uint) personaCantidadCartas;
//     */

//     function _createTable(uint256 randomNumber, uint8 maxPlayers) internal {
//         uint256 id = tables.length;

//         tables.push(Table(id, maxPlayers, randomNumber));

//         /*cartaAPersona[id] = msg.sender;
//         personaCantidadCartas[msg.sender] ++;*/

//         emit NewTable(id, randomNumber, maxPlayers);
//     }
// }
