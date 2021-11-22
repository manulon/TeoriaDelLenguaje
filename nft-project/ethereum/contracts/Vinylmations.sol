// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token721.sol";
import "./Counters.sol";

contract Vinylmations is Token721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() Token721("Vinylmations", "VNM") {}

    function _baseURI() internal pure override returns (string memory) {
        return "http://26ca-190-18-154-46.ngrok.io/api/erc721/1?id=";
    }

    function mint(address to)
        public returns (uint256)
    {
        require(_tokenIdCounter.current() < 3); 
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }

    function mintNFT(address recipient, string memory tokenURI)
        public 
        returns (uint256)
    {
        _tokenIdCounter.increment();

        uint256 newItemId = _tokenIdCounter.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}