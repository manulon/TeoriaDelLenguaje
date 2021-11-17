// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./Token721.sol";

contract Vinylmotion is Token721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() Token721("Vinylmotion", "VNM") {}

    function _baseURI() internal pure override returns (string memory) {
        /* The metadata of our NFTs will live in a JSON file at */
        return "http://localhost:3000/api/erc721/";
    }

    function mint(address to) public returns (uint256) {
        /* Cantidad maxima de nft a minar. */
        require(_tokenIdCounter.current() < 3); 
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}
}