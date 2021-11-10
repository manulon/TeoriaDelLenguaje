// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./TableFactory.sol";

contract Gambler {

    address gamblerAccount;
    uint number;

    constructor(){
        number = 0;
        //recibo por parametro el account???
    }

    event joinTable(uint tableId, address gamblerAccount, uint amount);
    
    function _joinTable(uint tableId, address tableAddress) public returns(bool){
        (bool success, bytes memory data) = tableAddress.call(abi.encodeWithSignature('_addPlayer(uint)',tableId));
        require (success, "Error");
        (bool playerAdded) = abi.decode(data, (bool));
        
        return playerAdded;
    }


} 