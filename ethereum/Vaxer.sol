pragma solidity >=0.7.0 <0.9.0;

contract Vaxer {
    address public owner;
    mapping(address => bool) public validators;
    mapping(address => bool) public inSystem;
    mapping(address => bool) public fullyVaxxed;


    struct Record {
        string first;
        string last;
        string brand;
        string[] doses;
        uint dob;
    }

    mapping(address => Record) public records;


    constructor(){
        owner = msg.sender;
        validators[msg.sender] = true;
    }

    function addValidator(address newValidator) external ownerOnly {
        validators[newValidator] = true;
    }

    //Figure out dates
    function addRecord(string memory first, string memory last, string memory brand, string memory dose, uint dob, address patient) public validatorsOnly {
        if(inSystem[patient]){
            Record storage record = records[patient];
            record.doses.push(dose);
            records[patient] = record;
            fullyVaxxed[patient] = true;
        }
        else{
            inSystem[patient] = true;
            records[patient].first = first;
            records[patient].last = last;
            records[patient].brand = brand;
            records[patient].doses.push(dose);
            records[patient].dob = dob;


            if(keccak256(abi.encodePacked(brand)) == keccak256("johnson")){
                fullyVaxxed[patient] = true;
            }
        }


    }

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    modifier validatorsOnly() {
        require(validators[msg.sender] == true);
        _;
    }

}
