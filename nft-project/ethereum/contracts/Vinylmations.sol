// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Fun.sol";

contract Vinylmations is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    Fun funContract;

    constructor(address funAddress) ERC721("Vinylmations", "VNM") {
        funContract = Fun(funAddress);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://4b41-181-28-126-194.ngrok.io/api/erc721/1?id=";
    }

    function mint(address to) public returns (uint256) {
        require(funContract.allowance(msg.sender, address(this)) >= 1);
        require(_tokenIdCounter.current() < 10);

        funContract.transferFrom(
            msg.sender, //Quien mintea
            0xfe42FA5813Bf22DF779f96805AA8C2b40Ce91279, //Direccion del creador de los nfts
            1 //El precio del nft
        );
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }
}
