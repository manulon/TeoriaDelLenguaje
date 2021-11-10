// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract TableFactory {
    address contractAddress;

    constructor(address _address){
        contractAddress = _address;
    }

    event NewTable(uint id, uint randomNumber, uint8 maxPlayers);

    struct Table {
        uint tableId;
        uint8 maxPlayers;
        uint number;
        uint8 playersJoined;
    }
    
    Table[] private tables;

    function _createTable(uint randomNumber, uint8 maxPlayers) internal {
        uint id = tables.length;
        
        tables.push(Table(id, maxPlayers, randomNumber, 0));
    
        emit NewTable(id, randomNumber, maxPlayers);
    }

    function _addPlayer(uint tableId) public returns(bool) {
        // tiro excepcion ???
        uint lastId = tables.length;
        if( tableId > lastId ){
            return false;
        }

        if ( (tables[tableId].playersJoined + 1) <= tables[tableId].maxPlayers ){
            tables[tableId].playersJoined ++;
            return true;
        }
        return false;
    }

    function getAddress() view external returns(address){
        return contractAddress;
    }
}
