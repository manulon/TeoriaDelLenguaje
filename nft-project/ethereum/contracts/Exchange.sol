// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token721.sol";

contract Exchange{
    Token721 nfts;
    address operator;

    //address must be the address where the 721Token is deployed
    constructor(address addr){
        nfts = Token721(addr);
        operator = msg.sender;
    }

    // for this function to work, the address where the exchange is deployed must have been approved
    // by the token owners
    function exchange_between(address p1, uint256 t1, address p2, uint256 t2) public{
        require(msg.sender == operator, "Only the operator can initiate exchanges");
        nfts.safeTransferFrom(p1, p2, t1);
        nfts.safeTransferFrom(p2, p1, t2);
    }
}