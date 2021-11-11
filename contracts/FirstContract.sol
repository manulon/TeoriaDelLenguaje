pragma solidity ^0.8.9;

contract FirstContract {
    uint256 value;
    address sender;

    function getValue() external view returns (uint256) {
        return value;
    }

    function setValue(uint256 _value) external {
        sender = msg.sender;
        value = _value;
    }

    function getMsgSender() external view returns (address) {
        return sender;
    }
}
