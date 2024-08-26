// 合约版本
// 继承
// 类型
// 结构
// 构造函数
// function
// 修饰符
// 接口


// 函数的访问权限：
// public 最大的访问权限，子类可以继承，可以访问，目前类可以访问 （外部访问）
// private 仅限内部访问，子类不能继承、不能访问
// internel 子类可以继承、可以访问，当前类可以访问 （内部访问）
// external 子类可以继承、可以访问，当前类不能访问
pragma solidity 0.8.0;

contract contractNameWhoIsYourDad{
    uint public aaa = 1999;
}

contract contractName_test is contractNameWhoIsYourDad{
    // 类型
    uint256 public bbb = 129;
    string public abc = "WhoIsYourDad";
    bool public buerzhi = false;
    address public owner;
    uint256 public max = type(uint256).max;
    uint256[] public arr;

    // 结构
    struct NFTInfo{
        string name; // 武器名称
        uint256 att; // 攻击力
        bool state; // 是否正在使用
    }

    NFTInfo[] public arms; // arm[id]

    struct UserInfo{
        string name;
        bool state; // 是否参数与抽奖
    }

    mapping(address => UserInfo) public userInfo;
}