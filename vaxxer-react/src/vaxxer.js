import web3 from './web3';
import { VAXXER_ABI, VAXXER_ADDRESS } from './config';
const vaxxer = new web3.eth.Contract(VAXXER_ABI, VAXXER_ADDRESS);

export default vaxxer;
