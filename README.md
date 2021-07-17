# Vaxxer

Vaxxer is an example of how governments, businesses, or schools could effectively verify the vaccination statuses of their citizens, employees, or students on the Ethereum blockchain.

The workflow is very simple. Take a college for example. The person in charge of tracking vaccines would deploy an instance of the vaxxer contract to the Etherum blockchain. They would then deploy an instance of the front end react app to a regular server. Then it is as simple as navigating to the validator page and entering the vaccination info of the students. The students would navigate to the patients page of the same site and it would automatically generate a QR code for them. Anybody can scan this on a device with Metamask installed and verify that the student has been vaccinated. The person who deployed the contract is also allowed to add more "validators" who can also add vaccination records. 

Steps to get started:
1. Clone the repository
2. Ensure that you have the chrome extension "Metamask" installed and copy your mnemonic to your clipboard
3. Paste the mneumonic in the mneumonic string in /ethereum/deploy.js
4. Navigate to the /ethereum directory
5. Run run the command npm install
6. Run the commands "node compile.js" and "node deploy.js"
7. After running these, copy the address logged by the deploy command and paste it into the VAXXER_ADDRESS string in /vaxxer-react/config.js
8. Go back one directory and navigate to the /vaxxer-react directory
9. Run "npm start"
10. Navigate to the "Validator" page to begin adding records 
