// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Vinylmations is Token721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() Token721("Vinylmations", "VNM") {}

    function _baseURI() internal pure override returns (string memory) {
        return "http://1239-190-18-154-46.ngrok.io/api/erc721/1";
    }

    function mint(address to)
        public returns (uint256)
    {
        require(_tokenIdCounter.current() < 3); 
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}