// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC165.sol";

interface IERC721 is IERC165 {
    ///  This emits when ownership of any NFT changes by any mechanism.
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);

    ///  This emits when the approved address for an NFT is changed or
    ///  reaffirmed
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

    ///  This emits when an operator is enabled or disabled for an owner.
    ///  The operator can manage all NFTs of the owner.
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    ///  Count all NFTs assigned to an owner
    function balanceOf(address _owner) external view returns (uint256);

    ///  Find the owner of an NFT
    function ownerOf(uint256 _tokenId) external view returns (address);

    ///  Transfers the ownership of an NFT from one address to another address
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory data) external;

    ///  Transfers the ownership of an NFT from one address to another address
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external;

    ///  Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    ///  THEY MAY BE PERMANENTLY LOST
    function transferFrom(address _from, address _to, uint256 _tokenId) external;

    ///  Change or reaffirm the approved address for an NFT
    function approve(address _approved, uint256 _tokenId) external;

    ///  Enable or disable approval for a third party ("operator") to manage
    ///  all of `msg.sender`'s assets
    function setApprovalForAll(address _operator, bool _approved) external;

    ///  Get the approved address for a single NFT
    function getApproved(uint256 _tokenId) external view returns (address);

    ///  Query if an address is an authorized operator for another address
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}
