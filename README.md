# CRYPTOCURRENCY TOOLS USED IN GOOGLE SHEETS
### [API Documentation](https://app.swaggerhub.com/apis-docs/Eloise1988/Crypto-Tools/1.1)

## CRYPTOBALANCE

### Get your cryptocurrency balance in your Google Sheets. 
### Available coins [ERC20-BEP20](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_ERC20_BEP20.md) [Other Blockchains](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_COINS.md) [Staking](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/STAKING.md) [Rewards](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/REWARDS.md)


######

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/Crypto_Balance.png)

###### =CRYPTOBALANCE("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOBALANCE("USDT","0xf977814e90da44bfa03b6295a0616a897441acec", $A$1)

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
###### Example of available exchanges: MAKERDAO - COMPOUND - DYDX - NUO - NEXO - CELSIUS - AAVE - FULCRUM
###### Example of available cryptocurrencies: ETH - DAI- USDC- BAT- ZRX- WBTC - SAI - USDT - SNX etc...
###### Update October 2019 - All rates from https://interest.coinmarketcap.com/
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/Crypto_Lending.png)

###### =CRYPTOLENDING("LENDING PLATFORM","TICKER","SIDE", refresh_cell) 
###### EXAMPLE    =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW", refresh_cell) 
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
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXVOLUME.gif)
###### =CRYPTODEXVOLUME("DEX ticker/name") 
###### EXAMPLE    =CRYPTODEXVOLUME("LEND")
## 

##  
### CRYPTOCURRENCY PRICES ON DEX
###### Returns prices of cryptocurrency prices on different decentralized exchanges, 1INCH, UNI, CAKE, SUSHI are available for the moment.
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/DEXPRICES.png)
###### =CRYPTODEXPRICE(ticker1/contract_address_1, ticker2/contract_address_2, exchange ticker) 
###### EXAMPLE    =CRYPTODEXPRICE("ETH","BAL","1INCH")
## 

### DEX Total Locked Values $ (TVL)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/TVL.png)
###### Returns DEXes' (decentralized exchanges) Total Cryptocurrency Value Locked ($)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTVL.gif)
###### =CRYPTOTVL("DEX ticker/name") 
###### EXAMPLE    =CRYPTOTVL("UNI")
##  

### DEX Liquidity Provider Taker's rate
###### Returns DEXes' (decentralized exchanges) takers fee that compensates liquidity providers.
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXFEE.gif)

###### =CRYPTODEXFEE("DEX PLATFORM ticker/name") 
###### EXAMPLE    =CRYPTODEXFEE("MAKER")
##  

### New tradable pairs on UNISWAP, SUSHISWAP, PANCAKESWAP
###### Returns new tradable pairs on Uniswap, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/UNISWAP.png)

###### =UNISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =UNISWAP(5,10000,10000,100)

###### =SUSHISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =SUSHISWAP(5,10000,10000,100)

###### =PANCAKESWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =PANCAKESWAP(5,10000,10000,100)
##  

## CRYPTO TOOLS SETUP
###### 1. Open a Google sheet where you wish to use CRYPTOBALANCE(), CRYPTOLENDING(), CRYPTOSTAKING() or CRYPTOREWARDS(), UNISWAP(), DEXPRICES() etc ..
###### 2. Go to Tools › Script editor
###### 3. Copy the content of [CRYPTOTOOLS](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/CRYPTOTOOLS) and paste it in the script editor (replace any existing content). 
###### 4. Save the script with File › Save, name it CRYPTOTOOLS, then close the script editor
###### 5. Back to your Google sheet, refresh the page, a CRYPTOTOOLS menu will appear next to Help with more information about the , CRYPTOBALANCE, CRYPTOSTAKING, CRYPTOREWADS & CRYPTOLENDING, UNISWAP, DEXPRICES functions.





#### Now the functions are available for use! Try it out! 
[Link to Google Sheets!](https://docs.google.com/spreadsheets/d/11RyWEPetyB-l-WLYHZGy1Nx-PXZ3ZmY2Ej64UyZ8Ha0/edit?usp=sharing)
