# CRYPTOCURRENCY TOOLS USED IN GOOGLE SHEETS
### [API Documentation](https://app.swaggerhub.com/apis-docs/Eloise1988/Crypto-Tools/1.1)

## CRYPTOBALANCE

### Get your cryptocurrency balance in your Google Sheets. 
### Available coins [ERC20-BEP20](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_ERC20_BEP20.md) [Other Blockchains](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_COINS.md) [Staking](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/STAKING.md) [Rewards](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/REWARDS.md)


######

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/Crypto_Balance.png)

###### =CRYPTOBALANCE("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOBALANCE("USDT","0xf977814e90da44bfa03b6295a0616a897441acec", $A$1)

### SPECIAL CASES ERC20, BEP20, MATIC, AVAX, TEZOS, SOLANA, FANTOM tokens that are not in the available token list:
###### You can call the balance using its contract address

###### ERC20
###### For example balance for Uniswap (ERC 20)
###### =CRYPTOBALANCE("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","holder's public address")

###### BEP20
###### For example balance for Pancakeswap (BEP20), insert b before contract address to signal it's bep20 a contract address 
###### =CRYPTOBALANCE("b0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","holder's public address")

###### MATIC TOKENS
###### For example balance for USDC on Matic, insert m before contract address to signal it's a MATIC chain contract address 
###### =CRYPTOBALANCE("m0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0x5d864785dce52b839c580ad8ced47ba36b90ea11")

###### AVAX SMART CHAIN
###### For example balance for Memorie (MEMO)
###### =CRYPTOBALANCE("a0x136Acd46C134E8269052c62A67042D6bDeDde3C9","holder's public address")

###### TEZOS TOKENS
###### For example balance for KUSD
###### =CRYPTOBALANCE("KT1K9gCRgaLRFKTErYt1wVxA3Frb9FjasjTV","holder's public address")

###### SOLANA TOKENS
###### For example balance for Wrapped USDC
###### =CRYPTOBALANCE("BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW","holder's public address")

###### FANTOM TOKENS
###### For example balance for DAI
###### =CRYPTOBALANCE("f0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e","holder's public address")

##
## DEX
###### List of DEXes
###### Uniswap Maker WBTC Compound Aave Curve Finance Synthetix Harvest Finance yearn.financeRenVM Balancer SushiSwap InstaDApp C.R.E.A.M. Finance Nexus Mutual dForce 
###### Flexa mStable dYdX Set Protocol DODO ForTube Bancor Loopring Lightning Network bZxMetronomeKyber DFI.money Gnosis xDai DeversiFi Erasure PieDAO DDEX Opyn Melon 
###### MCDEX Augur Robo-Advisor for Yield ACO Opium Network Connext 1
###### Tickers can be used too : UNI, MKR, LEND, SNX, REN, GNO etc..
##  
### DEX 24H VOLUMES
###### Returns DEXes' (decentralized exchanges) 24H Volume.
![DEXVOLUME](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXVOLUMEARRAY.gif)
###### =CRYPTODEXVOLUME("DEX ticker/name") 
###### EXAMPLE    =CRYPTODEXVOLUME("LEND")
## 

##  
### CRYPTOCURRENCY PRICES ON DEX
###### Returns prices of cryptocurrency prices on different decentralized exchanges, 1INCH, UNI, CAKE, SUSHI are available for the moment.
![DEXPRICE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_ARRAY_UNI.gif)
###### =CRYPTODEXPRICE(ticker1/contract_address_1, ticker2/contract_address_2, exchange ticker) 
###### EXAMPLE    =CRYPTODEXPRICE("ETH","BAL","1INCH")
## 

### DEX Total Locked Values $ (TVL)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/TVL.png)
###### Returns DEXes' (decentralized exchanges) Total Cryptocurrency Value Locked ($)
![TVL](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTVLARRAY.gif)
###### =CRYPTOTVL("DEX ticker/name") 
###### EXAMPLE    =CRYPTOTVL("UNI")
##  

### DEX Liquidity Provider Taker's rate
###### Returns DEXes' (decentralized exchanges) takers fee that compensates liquidity providers.
![DEXFEE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXFEEARRAY.gif)

###### =CRYPTODEXFEE("DEX PLATFORM ticker/name") 
###### EXAMPLE    =CRYPTODEXFEE("MAKER")
##  

 
## CRYPTOSTAKING

### Returns the amount STAKED on PoS cryptocurrencies
###### EOS(EOS)  TEZOS(XTZ)  COSMOS(ATOM)  NANO(NANO)
###### Support for other major altcoins is coming later in 2019.
##  

## CRYPTOREWARDS

### Returns REWARDS on the staked cryptocurrencies
###### TEZOS(XTZ)  COSMOS(ATOM)
###### Support for other major PoS altcoins is coming later in 2019.
##

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/XTZ_EXPLORER.png)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/XTZ_EXAMPLE.png)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/XTZ_EXAMPLE2.png)
## 
##  
###### =CRYPTOBALANCE("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOBALANCE("XTZ","tz1MtsStCawfc8cHUnUKhTJV2QxrH9Z7aM7W",$A$1)
##  
##  
###### =CRYPTOSTAKING("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOSTAKING("XTZ","tz1MtsStCawfc8cHUnUKhTJV2QxrH9Z7aM7W",$A$1)
##  

###### =CRYPTOREWARDS("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOREWARDS("XTZ","tz1MtsStCawfc8cHUnUKhTJV2QxrH9Z7aM7W",$A$1)
##  

## CRYPTOLENDING

### Get the cryptocurrency lending rate from multiple lending platforms. 
###### Example of available exchanges: MAKER - COMPOUND - YEARN - DYDX - NUO - NEXO - CELSIUS - AAVE - FULCRUM -NEXO
###### Example of available cryptocurrencies: ETH - DAI- USDC- BAT- ZRX- WBTC - SAI - USDT - SNX etc...
###### Update October 2019 - All rates from https://interest.coinmarketcap.com/
![LENDINGARRAY](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOLENDINGARRAY.gif)

###### =CRYPTOLENDING("LENDING PLATFORM","TICKER","SIDE", refresh_cell) 
###### EXAMPLE    =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW", refresh_cell) 
##   



### New tradable pairs on UNISWAP, SUSHISWAP, PANCAKESWAP
###### Returns new tradable pairs on Uniswap, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
![UNISWAP](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/UNISWAP.gif)

###### =UNISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =UNISWAP(5,10000,10000,100)

###### =SUSHISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =SUSHISWAP(5,10000,10000,100)

###### =PANCAKESWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =PANCAKESWAP(5,10000,10000,100)
##  

### CRYPTOSUPPLY
###### Returns the max supply on a list of erc20, bep20, matic tokens.
###### Available Networks
######  - ERC (erc20)
######  - BEP (binance smart chain)
######  - MATIC (polygon smart chain)
![CRYPTOSUPPLY](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptosupply.gif)

###### =CRYPTOSUPPLY(Ticker or smart contract, network)
###### EXAMPLE    =CRYPTOSUPPLY("ETH","ERC")
###### EXAMPLE    =CRYPTOSUPPLY("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
###### EXAMPLE    =CRYPTOSUPPLY(E39:E100,F39:F100)
## 

### CRYPTOHOLDERS
###### Returns the number of holders on a list of erc20, bep20, matic tokens.
###### Available Networks
######  - ERC (erc20)
######  - BEP (binance smart chain)
######  - MATIC (polygon smart chain)
![CRYPTOHOLDERS](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptoholders.gif)

###### =CRYPTOHOLDERS(Ticker or smart contract, network)
###### EXAMPLE    =CRYPTOHOLDERS("ETH","ERC")
###### EXAMPLE    =CRYPTOHOLDERS("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
###### EXAMPLE    =CRYPTOHOLDERS(E39:E100,F39:F100)
## 

## CRYPTO TOOLS SETUP
###### 1. Open a Google sheet where you wish to use CRYPTOBALANCE(), CRYPTOLENDING(), CRYPTOSTAKING() or CRYPTOREWARDS(), UNISWAP(), DEXPRICES() etc ..
###### 2. Go to Tools › Script editor
###### 3. Copy the content of [CRYPTOTOOLS](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/CRYPTOTOOLS_V2.gs) and paste it in the script editor (replace any existing content). 
###### 4. Save the script with File › Save, name it CRYPTOTOOLS, then close the script editor
###### 5. Back to your Google sheet, refresh the page, a CRYPTOTOOLS menu will appear next to Help with more information about the , CRYPTOBALANCE, CRYPTOSTAKING, CRYPTOREWADS & CRYPTOLENDING, UNISWAP, DEXPRICES functions.





#### Now the functions are available for use! Try it out! 
[Link to Google Sheets!](https://docs.google.com/spreadsheets/d/19aZM9IVdexcvb5U4gnC4TKOotgtkgxcEjGzMGv6OxyU/edit?usp=sharing)
