export const VAXXER_ADDRESS = '0xC330c8F508a0EF80e61c8F2bd94f81D468559651'

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
    inputs: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    name: 'addRecord',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x6bfa1b10'
  },
  {
    inputs: [ [Object] ],
    name: 'addValidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x4d238c8e'
  },
  {
    inputs: [ [Object] ],
    name: 'fullyVaxxed',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x74f7f62f'
  },
  {
    inputs: [ [Object] ],
    name: 'inSystem',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x35f84113'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x8da5cb5b'
  },
  {
    inputs: [ [Object] ],
    name: 'records',
    outputs: [ [Object], [Object], [Object], [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x469e9067'
  },
  {
    inputs: [ [Object] ],
    name: 'validators',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xfa52c7d8'
  }
]
