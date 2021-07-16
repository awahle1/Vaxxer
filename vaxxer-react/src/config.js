export const VAXXER_ADDRESS = '0x27f4F450CB74202dB29505D43Cbe45DE1d4CB337'

export const VAXXER_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    payable: undefined,
    signature: 'constructor'
  },
  {
    inputs: [
            {name: '', type: 'string'},
            {name: '', type: 'string'},
            {name: '', type: 'string'},
            {name: '', type: 'string'},
            {name: '', type: 'string'},
            {name: '', type: 'address'},
          ],
    name: 'addRecord',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x6bfa1b10'
  },
  {
    inputs: [{name: 'newValidator', type: 'address'}],
    name: 'addValidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x4d238c8e'
  },
  {
    inputs: [ { name:'', type: 'address'} ],
    name: 'fullyVaxxed',
    outputs: [ { name:'', type: 'bool'} ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x74f7f62f'
  },
  {
    inputs: [{ name: '', type: 'address' }],
    name: 'inSystem',
    outputs: [{name: '', type: 'bool'}],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x35f84113'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x8da5cb5b'
  },
  {
    inputs: [{ name:'', type: 'address'}],
    name: 'records',
    outputs: [
      {name: 'first', type: 'string'},
      {name: 'last', type: 'string'},
      {name: 'brand', type: 'string'},
      {name: 'dob', type: 'string'},
     ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x469e9067'
  },
  {
    inputs: [ {name: '', type:'address'} ],
    name: 'validators',
    outputs: [ {name: 'isValidator', type: 'bool'} ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xfa52c7d8'
  }
]
