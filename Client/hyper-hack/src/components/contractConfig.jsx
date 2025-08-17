//This is Sepolia Testnet
export const contractAddress = "0x0474b473a1c7bcf9a5706e71e894033157e85248"
 export const contractABI = [
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
			},
			{
				"internalType": "uint16",
				"name": "_riskThreshold",
				"type": "uint16"
			}
		],
		"name": "createGuild",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_proposalId",
				"type": "bytes4"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_guildId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "proposeTrade",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_proposalId",
				"type": "bytes4"
			}
		],
		"name": "returnTradeFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			}
		],
		"name": "topUpStake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_guildId",
				"type": "bytes32"
			},
			{
				"internalType": "bytes4",
				"name": "_proposalId",
				"type": "bytes4"
			},
			{
				"internalType": "bool",
				"name": "_voteYes",
				"type": "bool"
			}
		],
		"name": "voteProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			}
		],
		"name": "withdrawStake",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "bytes32",
				"name": "_GuildId",
				"type": "bytes32"
			}
		],
		"name": "GuildData",
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
					},
					{
						"internalType": "uint16",
						"name": "risk_threshold",
						"type": "uint16"
					}
				],
				"internalType": "struct HyperHackContract.Guild",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "guildId",
						"type": "bytes32"
					},
					{
						"internalType": "bytes4",
						"name": "proposalId",
						"type": "bytes4"
					},
					{
						"internalType": "address",
						"name": "trader",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "descript",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "yesVotes",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "totalVotes",
						"type": "uint8"
					},
					{
						"internalType": "address[]",
						"name": "voters",
						"type": "address[]"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "executed",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "fulfilled",
						"type": "bool"
					}
				],
				"internalType": "struct HyperHackContract.TradeProposal[]",
				"name": "",
				"type": "tuple[]"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "guildProposals",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "guildId",
				"type": "bytes32"
			},
			{
				"internalType": "bytes4",
				"name": "proposalId",
				"type": "bytes4"
			},
			{
				"internalType": "address",
				"name": "trader",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "descript",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "yesVotes",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "totalVotes",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "fulfilled",
				"type": "bool"
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
			},
			{
				"internalType": "uint16",
				"name": "risk_threshold",
				"type": "uint16"
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
	}
]