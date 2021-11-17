// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC165.sol";
import "./ERC721.sol";

contract Token721 is ERC165, IERC721{
    string public _name;
    string public _symbol;
    
    constructor
    (string memory _tokenName, string  memory _tokenSymbol) {
        _name = _tokenName;                                   // Set the name for display purposes
        _symbol = _tokenSymbol;                               // Set the symbol for display purposes
    }

    // tokenId => owner_address mapping
    mapping(uint256 => address) private _owners;

    // address => amount_of_diff_tokens_owned
    mapping(address => uint256) private _balances;

    // tokenId => operator_approved_for_token
    mapping(uint256 => address) private _tokenApprovals;

    // operator approved for all tokens of other address
    mapping(address => mapping(address => bool)) _operatorApprovals;

    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165) returns(bool){
        return interfaceId == type(IERC721).interfaceId || super.supportsInterface(interfaceId);
    }

    function _safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId, "");
    }

    function _safeMint(address to, uint256 tokenId, bytes memory _data) public {
        _mint(to, tokenId);
        require(_checkOnERC721Received(address(0), to, tokenId, _data), "ERC721 ERR: Transfer to non ERC721Receiver implementer");
    }

    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0), "ERC721 ERR: Mint to 0 address");
        require(!_exists(tokenId), "ERC721 ERR: Token already exists");

        _beforeTokenTransfer(address(0), to, tokenId);
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(address(0), to, tokenId);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override{
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public virtual override{
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721 ERR: You need permission or ownership for this operation");
        _safeTransfer(from, to, tokenId, _data);
    }

    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory _data) internal virtual{
        _transfer(from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721 ERR: Transfer to non ERC721Receiver implementer");
    }

    function transferFrom(address from, address to, uint256 tokenId)public virtual override{
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721 ERR: You need permission or ownership for this operation");
        _transfer(from, to);
    }

    function _transfer(address from, address to, uint256 tokenId) internal virtual{
        require(ownerOf(tokenId) == from, "ERC721 ERR: from is not the owner of the token or it doesnt exist");
        require(to!= adress(0), "ERC721 ERR: cannot send token to address 0");

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    function _isApprovedOrOwner(address operator, uint256 tokenId) internal view returns(bool){
        return operator == ownerOf(tokenId) || operator == getApproved(tokenId) || isApprovedForAll(ownerOf(tokenId), operator);
    }

    function balanceOf(address _owner) external view returns (uint256){
        require(_owner != address(0), "Can't check balance of 0-address");
        return _balances[_owner];
    }

    function ownerOf(uint256 tokenId) public view returns(address owner){
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721 ERR: tokenId does not exist");
        return owner;
    }

    function approve(address to, uint256 tokenId) public virtual override{
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721 ERR: Destination must be different address than owner");
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender),
        "ERC721 ERR: you are not the owner or you dont have permission for this action");

        _approve(to, tokenId);
    }

    function getApproved(uint256 tokenId) public view virtual override returns(address){
        require(_exists(tokenId), "ERC721 ERR: Token doesnt exist");
        return _tokenApprovals[tokenId];
    }

    function _approve(address to, uint256 tokenId) internal virtual {
        _tokenApprovals[tokenId] = to;
        emit Approval(ownerOf(tokenId), to, tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public view virtual override returns (bool){
        require(msg.sender != owner, "ERC721 ERR: Destination must be different address than owner");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator)public view virtual override returns(bool){
        return _operatorApprovals[owner][operator];
    }

    function _exists(uint256 tokenId) internal view virtual returns(bool){
        return _owners[tokenId] != address(0);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual {}

    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory _data) private returns(bool) {
        if (isContract(to)){
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data) returns (bytes4 retval){
                return retval == IERC721Receiver(to).onERC721Received.selector;
            } catch (bytes memory reason){
                if (reason.length == 0){
                    revert("ERC721 ERR: Transfer to non ERC721Receiver implementer");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason));
                    }
                }
            }
        } else {
            return True;
        }
    }

    function isContract(address addr) private view returns(bool){
        uint32 size;
        assembly {
            size := extcodesize(addr)
        }
        return (size > 0);
    }
}