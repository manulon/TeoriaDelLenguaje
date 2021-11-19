// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Vinylmations is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Vinylmations", "VNM") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://edf7-181-28-126-194.ngrok.io/api/erc721/1?id=";
    }

    function mint(address to) public returns (uint256) {
        require(_tokenIdCounter.current() < 3);
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}
