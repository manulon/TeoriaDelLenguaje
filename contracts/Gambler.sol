// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./TableFactory.sol";

contract Gambler {
    address gamblerAccount;
    uint tableNumber;
    uint number;

    constructor(address _account){
        number = 0;
        gamblerAccount = _account;
    }

    event joinTable(uint tableId, address gamblerAccount, uint amount);
    
    function _joinTable(uint tableId, address tableAddress) public returns(bool){
        (bool success, bytes memory data) = 
                            tableAddress.call(abi.encodeWithSignature('_addPlayer(uint)',tableId));
        require (success, "Error");
        (bool playerAdded) = abi.decode(data, (bool));
        
        tableNumber = tableId;

        return playerAdded;
    }

    function _makeBet(uint n, uint amount, address tableAddress) public returns(bool){
        (bool success, bytes memory data) = 
                            tableAddress.call(abi.encodeWithSignature
                            ('createBet(address, uint)',gamblerAccount,amount,n));
        require (success, "Error");
        (bool betPlaced) = abi.decode(data, (bool));

        return betPlaced;
    }
} 