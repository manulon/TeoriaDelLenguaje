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

    function _closeTable(address betsAddress) public returns(bool){
        (bool success1, bytes memory data1) = 
                            betsAddress.call(abi.encodeWithSignature
                            ('tableIsFull()'));
        require (success1, "Error");
        (bool tableIsFull) = abi.decode(data1, (bool));

        if (!tableIsFull){
            return tableIsFull;
        }

        (bool success2, bytes memory data2) = 
                            betsAddress.call(abi.encodeWithSignature
                            ('closeBets(address)', contractAddress));
        require (success2, "Error");
        (bool betsClosed) = abi.decode(data2, (bool));
        require(betsClosed, "Ha ocurrido un error al momento de cerrar las apuestas");

        return tableIsFull;
    }

    function getWinnerNumber(uint id) public view returns(uint){
        return tables[id].number;
    }
}
