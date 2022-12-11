//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Payment {
    mapping(address => uint256) public balanceReceived;

    function receiveMoney() public payable {
        assert(
            balanceReceived[msg.sender] + msg.value >=
                balanceReceived[msg.sender]
        );
        balanceReceived[msg.sender] += msg.value;
    }

    function withdrawMoney(uint256 _amount, address payable _to)
        public
        payable
    {
        require(_amount <= balanceReceived[msg.sender], "mot enough funds");
        assert(
            balanceReceived[msg.sender] >= balanceReceived[msg.sender] - _amount
        );
        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }
}
