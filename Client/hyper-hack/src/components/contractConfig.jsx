export const contractAddress = "0xb7ec8349e5968D9fB9325A2E9010b08F8a47CdA8"
 export const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "GuildCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "member",
				"type": "address"
			}
		],
		"name": "JoinedGuild",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "trader",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "profit",
				"type": "uint256"
			}
		],
		"name": "TradeExecuted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "trader",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TradeProposed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "voteYes",
				"type": "bool"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "GuildIds",
		"outputs": [
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_GuildId",
				"type": "bytes32"
			}
		],
		"name": "Guilds",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "createdAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "entryThreshold",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberCap",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "capped",
						"type": "bool"
					},
					{
						"internalType": "address[]",
						"name": "members",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "memberStakes",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "pool",
						"type": "uint256"
					}
				],
				"internalType": "struct HyperHausContract1.Guild",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "entryThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberCap",
				"type": "uint256"
			}
		],
		"name": "createGuild",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "guildCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "guildIds",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "guildTradeIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "guilds",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "entryThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberCap",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "capped",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "pool",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "GuildId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "entryThreshold",
				"type": "uint256"
			}
		],
		"name": "joinGuild",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tkOu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]