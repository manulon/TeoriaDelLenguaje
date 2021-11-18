// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token721.sol";

contract Exchange{
    Token721 nfts;

    //address must be the address where the 721Token is deployed
    constructor(address addr){
        nfts = Token721(addr);
    }

    // for this function to work, the address where the exchange is deployed must have been approved
    // by the token owners
    //TODO decide who is allowed to call this function
    function exchange_between(address p1, uint256 t1, address p2, uint256 t2) public{
        nfts.safeTransferFrom(p1, p2, t1);
        nfts.safeTransferFrom(p2, p1, t2);
    }
}