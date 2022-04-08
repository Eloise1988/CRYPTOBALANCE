# CRYPTOCURRENCY TOOLS USED IN GOOGLE SHEETS
###### [Link to Google Sheets public template!](https://docs.google.com/spreadsheets/d/19aZM9IVdexcvb5U4gnC4TKOotgtkgxcEjGzMGv6OxyU/edit?usp=sharing)   
###### [Link to the Medium Publication](https://medium.com/coinmonks/how-to-value-your-stocks-crypto-portfolio-in-google-sheets-22bb7b42c39d)
###### [Link to Google Sheet's Set-up](https://medium.com/the-cryptocurious/google-sheet-open-source-cryptotools-set-up-9420e3940a8a)
###### [API Documentation](https://api.cryptotools.one/openapi)

## FUNCTIONS
|  [Cryptobalance](#cryptobalance) 	|  [Prices on DEX](#cryptocurrency-prices-on-dex) 	|  [Staking](#cryptostaking) 	|  [Rewards](#cryptorewards) 	
|  [Lending](#cryptolending) 	|  [Farming](#crypto-farming) 	|  [Dollar Valuation by address](#dollar-valuation-by-address) |  [DEX 24h Volumes](#dex-volumes) 	|  [DEX TVL](#dex-tvl)  |  [DEX fees](#dex-fees)  |  [Pool Price](#pool-price) 	|  [Max Token Supply](#cryptosupply)  |  [Number of Holders per contract](#cryptoholdercount)  |  [List of Holders](#crypto_holder) 	|  [New Tradeable Pairs](#new-tradable-pairs)  |  [Volatility](#volatility) 	 	
|  [Futures](#futures) 	|  [Gas price (ETH)](#gas-price) 	|  [List of Transactions](#cryptotx)  


## CRYPTOBALANCE

### Get your cryptocurrency balance in your Google Sheets. 
######

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/Crypto_Balance.png)

###### =CRYPTOBALANCE("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOBALANCE("USDT","0xf977814e90da44bfa03b6295a0616a897441acec", $A$1)

### SPECIAL CASES ERC20, BEP20, MATIC, AVAX, TEZOS, SOLANA ... tokens that are not in the available token list:
###### You can call the balance using its contract address
###### =CRYPTOBALANCE(" ERC20 contract address","ERC20 holder address")
###### =CRYPTOBALANCE("b"+ "BEP20 contract address","holder address") 
###### =CRYPTOBALANCE("m"+ "MATIC contract address", "holder address")
###### =CRYPTOBALANCE("a"+ "AVAX contract address", "holder address") 
###### =CRYPTOBALANCE("f"+ "FANTOM contract address", "holder address")
###### =CRYPTOBALANCE("arb"+ "ARBITRUM contract address", "holder address")
###### =CRYPTOBALANCE("movr"+ "MOONRIVER contract address", "holder address")
###### =CRYPTOBALANCE("celo"+ "CELO contract address", "holder address")
###### =CRYPTOBALANCE("wan"+ "WANCHAIN smart contract address", "holder address")
###### =CRYPTOBALANCE("aurora"+ "AURORA smart contract address", "holder address")
###### =CRYPTOBALANCE("op"+ "OPTIMISTIC smart contract address", "holder address")
###### =CRYPTOBALANCE("palm"+ "PALM NETWORK smart contract address", "holder address")
###### =CRYPTOBALANCE("cronos"+ "CRONOS NETWORK smart contract address", "holder address")
###### =CRYPTOBALANCE("gnosis"+ "GNOSIS NETWORK smart contract address", "holder address")
###### =CRYPTOBALANCE("TEZOS contract address","holder address") 
###### =CRYPTOBALANCE("SOLANA contract address","holder address")
###### =CRYPTOBALANCE("TRON contract address","holder address")
###### =CRYPTOBALANCE("XRP contract address","holder address")

### Available coins [ERC20-BEP20](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_ERC20_BEP20.md) [Other Blockchains](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/ALL_COINS.md) [Staking](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/STAKING.md) [Rewards](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/COINS/REWARDS.md)

## LIST ALL TOKEN AMOUNTS ON EVM, SOLANA, HARMONY, TERRA ADDRESS

### Returns the list of all tokens on all chains or on a specific chain like eth, matic, bsc, xdai, ftm, avax, op, arb, celo, movre, cvo, aurora etc ...
######

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTOKENLIST.gif)

###### =CRYPTOTOKENLIST("ADDRESS","CHAIN optional") 
###### EXAMPLE    =CRYPTOTOKENLIST("0xdb3b93c27442c1dcb52537d6fca7b8a1d7f8c50b")


![CRYPTO_LIST](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptotokenlist_sol.gif)
###### EXAMPLE =CRYPTOTOKENLIST("holder's address","network" as optional)
###### EXAMPLE    =CRYPTOTOKENLIST("BV3kgWcxB7txcfVMywYp3ZqwkYujrd3HePMkujAK5xFR")

##
## DEX

### CRYPTOCURRENCY PRICES ON DEX
###### Returns prices of cryptocurrency prices on different decentralized exchanges, 1INCH, UNI, CAKE, SUSHI, MATIC, PANGOLIN, FANTOM, OSMOSIS, DEXLAB are available for the moment.

### List of networks/exchanges ticker to use
##### ***Ethereum Smart chain*** UNI - Uniswap V2 on ERC20 - 1INCH - 1INCH on ERC20 - SUSHI - Sushiswap on ERC20 
##### ***Binance Smart Chain*** - CAKE - Pancakeswap V2 on BEP20 - BABY - Babyswap on BEP20 
##### ***Matic/Polygon Smart Chain*** - QUICK - Quickswap on polygon - MATIC - Sushiswap on Polygon/Matic
##### ***Fantom Chain***- BOO - Spookyswap on Fantom  - FTM - Sushiswap on Fantom 
##### ***Solana Chain*** - FIDA - Bonfida on Solana - DXL - DEXLabs on Solana 
##### ***Cosmos Chain*** - OSMO - Osmosis on Cosmos 
##### ***Celo Chain*** - CELO - Sushiswap on Celo 
##### ***Avalanche Chain*** - PNG - Pangolin on Avalanche - JOE - TraderJoe on Avalanche 
##### ***Aurora Chain*** - TRI - Trisolaris/Near on Aurora - WANNA - Wannaswap on Aurora
##### 
![DEXPRICE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_ARRAY_UNI.gif)
###### =CRYPTODEXPRICE(ticker1/contract_address_1, ticker2/contract_address_2, exchange ticker) 
###### EXAMPLE    =CRYPTODEXPRICE("ETH","BAL","1INCH")
######  
#### Prices from  Sushiswap's exchange on the Polygon/Matic network
![DEXPRICE_MaticSushi](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_MATIC_SUSHISWAP.gif)
###### EXAMPLE    =CRYPTODEXPRICE("WMATIC","WETH","MATIC")

#### Prices from  Sushiswap's exchange on the Fantom network
![DEXPRICE_FantomSushi](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_fantomSushiswap.gif)
###### EXAMPLE    =CRYPTODEXPRICE("WMFTM","USDC","FTM")

#### Prices from Pangolin's exchange on the Avalanche network
![DEXPRICE_AvaxPangolin](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/dexprice_avaxpangolin.gif)
###### EXAMPLE    =CRYPTODEXPRICE("ETH","WAVAX","PNG")

#### Prices from DexLab's exchange on the Solana network
![DEXPRICE_DexLabSolana](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptodexprice_dexlabSolana.gif)
###### EXAMPLE    =CRYPTODEXPRICE("BTC","USDC","DXL")

#### Prices from Osmosis' exchange on the Cosmos network
![DEXPRICE_OsmosisCosmo](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptodexpice_osmosiscosmos.gif)
###### EXAMPLE    =CRYPTODEXPRICE("ATOM","OSMO","OSMO")

#### Prices from Quickswap's exchange on Matic's network
![DEXPRICE_QuickswapMatic](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptodexprice_quickswapmatic.gif)
###### EXAMPLE    =CRYPTODEXPRICE("WBTC","USDC","QUICK")

#### Prices from Sushiswap's exchange on Celo's network
![DEXPRICE_SushiswapCelo](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CELOSUSHISWAP_DEXPRICE.gif)
###### EXAMPLE    =CRYPTODEXPRICE("BTC","CUSD","CELO")

#### Prices from Spookyswap's exchange on Fantom's network
![DEXPRICE_FantomSUSHISWAP](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/FANTOMSPOOKYSWAP_DEXPRICE.gif)
###### EXAMPLE    =CRYPTODEXPRICE("FUSDT","WFTM","BOO")

#### Prices from TraderJoe's exchange on Avalanche's network
![DEXPRICE_AVAXJOE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_AVAX_JOE.gif)
###### EXAMPLE    =CRYPTODEXPRICE("WAVX","BNB","JOE")

#### Prices from Trisolaris' / NEAR exchange on Aurora EVM
![DEXPRICE_AURORATRI](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_AURORATRI.gif)
###### EXAMPLE    =CRYPTODEXPRICE("SAFE","WETH","TRI")

#### Prices from Wannaswap's exchange on Aurora EVM
![DEXPRICE_AURORAWANNA](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXPRICE_AURORAWANNA.gif)
###### EXAMPLE    =CRYPTODEXPRICE("LOCK","USDT","WANNA")

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

![LENDINGARRAY](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOLENDINGARRAY.gif)

###### =CRYPTOLENDING("LENDING PLATFORM","TICKER","SIDE", refresh_cell) 
###### EXAMPLE    =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW", refresh_cell) 
##  

![LENDINGARRAY2](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/distribution_rate_compound.gif)
##  

### CRYPTO FARMING
###### Returns apy and tvl from tokens or pools on decentralized exchanges
![CRYPTOFARMING](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOFARMING.gif)
###### EXAMPLE =CRYPTOFARMING("SUSHI","UNI-WETH","APY")
###### EXAMPLE =CRYPTOFARMING("SUSHI","UNI-WETH","TVL")


### DOLLAR VALUATION BY ADDRESS
###### Returns the USD total amount of ERC20, BEP20 or MATIC address
![CRYPTO_SUM$](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptosumusd.gif)
###### EXAMPLE =CRYPTOSUMUSD("holder's address","network" as optional)


### DEX VOLUMES
###### Returns DEXes' (decentralized exchanges) 24H Volume.
![DEXVOLUME](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXVOLUMEARRAY.gif)
###### =CRYPTODEXVOLUME("DEX ticker/name") 
###### EXAMPLE    =CRYPTODEXVOLUME("LEND")
## 

### DEX TVL 
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/TVL.png)
###### Returns DEXes' (decentralized exchanges) Total Cryptocurrency Value Locked ($)
![TVL](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTVLARRAY.gif)
###### =CRYPTOTVL("DEX ticker/name") 
###### EXAMPLE    =CRYPTOTVL("UNI")
##  

### DEX Fees
###### Returns DEXes' (decentralized exchanges) takers fee that compensates liquidity providers.
![DEXFEE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTODEXFEEARRAY.gif)

###### =CRYPTODEXFEE("DEX PLATFORM ticker/name") 
###### EXAMPLE    =CRYPTODEXFEE("MAKER")
##  

### POOL PRICE
###### Returns prices from decentralized Pool tokens.
![CRYPTOPOOLPRICE](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/poolprice.png)
###### EXAMPLE =CRYPTOPOOLPRICE("YVCURVE-BBTC","YEARN")


### CRYPTOSUPPLY
###### Returns the max supply on a list of erc20, bep20, matic, avalanche, fantom, moon-river and arbitrum tokens.
###### Available Networks
######  - ERC (erc20)
######  - BEP (binance smart chain)
######  - MATIC (polygon smart chain)
######  - ARB (arbitrum smart chain)
######  - AVAX (avalanche smart chain)
######  - FTM (fantom smart chain)
######  - MOVR (moon-river smart chain)

![CRYPTOSUPPLY](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptosupply.gif)

###### =CRYPTOSUPPLY(Ticker or smart contract, network)
###### EXAMPLE    =CRYPTOSUPPLY("ETH","ERC")
###### EXAMPLE    =CRYPTOSUPPLY("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
###### EXAMPLE    =CRYPTOSUPPLY(E39:E100,F39:F100)
## 

### CRYPTOHOLDERCOUNT
###### Returns the number of holders on a list of erc20, bep20, matic, avalanche, fantom, moon-river and arbitrum tokens.
###### Available Networks
######  - ERC (erc20)
######  - BEP (binance smart chain)
######  - MATIC (polygon smart chain)
######  - AVAX (avalanche smart chain)
######  - FTM (fantom smart chain)
######  - MOVR (moon-river smart chain)

![CRYPTOHOLDERS](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptoholders.gif)

###### =CRYPTOHOLDERCOUNT(Ticker or smart contract, network)
###### EXAMPLE    =CRYPTOHOLDERS("ETH","ERC")
###### EXAMPLE    =CRYPTOHOLDERS("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
###### EXAMPLE    =CRYPTOHOLDERS(E39:E100,F39:F100)
## 

### CRYPTO_HOLDER
###### Returns the list of holders on ERC20 and BEP20
![CRYPTO_HOLDERERC](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTO_HOLDER_ERC20.gif)
###### EXAMPLE =CRYPTO_HOLDER_ERC20("holder's address")
![CRYPTO_HOLDERBEP](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTO_HOLDER_BEP20.gif)
###### EXAMPLE =CRYPTOTX_HOLDER_BEP20("holder's address")

### New tradable pairs
###### Returns new tradable pairs on Uniswap, Sushiswap (Arbitrum+Ethereum) , Pancakeswap giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
![UNISWAP](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/UNISWAP.gif)

###### =UNISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =UNISWAP(5,10000,10000,100)

###### =SUSHISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =SUSHISWAP(5,10000,10000,100)

###### =ARBITRUMSUSHISWAP(days,volume,liquidity,tx_count)
###### EXAMPLE    =ARBITRUMSUSHISWAP(5,10000,10000,100)
##  

### VOLATILITY
###### Returns the 30d % volatility of a cryptocurrency against USD, ETH, or BTC
![CRYPTO_VOLATILITY](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptovol30d_usd.gif)
###### EXAMPLE =CRYPTO_HOLDER_ERC20(TICKER,VS_CURRENCY)
###### EXAMPLE=CRYPTOVOL30D("ETH")
###### EXAMPLE=CRYPTOVOL30D("ETH","BTC")


### FUTURES
###### Returns BTC or ETH Futures Prices, basis, volume, open interest
![CRYPTOFUTURES_BTC](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOFUTURES.gif)
###### EXAMPLE =CRYPTOFUTURES("BTC")
###### EXAMPLE =CRYPTOFUTURES("ETH")


### GAS PRICE
###### Returns the average GWEI gas price into Google spreadsheets. Only ETH available now.
![CRYPTOFUTURES_BTC](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/cryptogas.gif)
###### EXAMPLE =CRYPTOGAS("ETH")


### CRYPTOTX
###### Returns the list of transactions on ERC20 and BEP20
![CRYPTOTXERC](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTX_ERC20.gif)
###### EXAMPLE =CRYPTOTX_ERC20("holder's address")
![CRYPTOTXBEP](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/GIF/CRYPTOTX_BEP20.gif)
###### EXAMPLE =CRYPTOTX_BEP20("holder's address")


## CRYPTO TOOLS SETUP
###### 1. Open a Google sheet where you wish to use CRYPTOBALANCE(), CRYPTOLENDING(), CRYPTOSTAKING() or CRYPTOREWARDS(), UNISWAP(), DEXPRICES() etc ..
###### 2. Go to Tools › Script editor
###### 3. Copy the content of [CRYPTOTOOLS](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/CRYPTOTOOLS_V2.gs) and paste it in the script editor (replace any existing content). 
###### 4. Save the script with File › Save, name it CRYPTOTOOLS, then close the script editor
###### 5. Back to your Google sheet, refresh the page, a CRYPTOTOOLS menu will appear next to Help with more information about the , CRYPTOBALANCE, CRYPTOSTAKING, CRYPTOREWADS & CRYPTOLENDING, UNISWAP, DEXPRICES functions.





#### Now the functions are available for use! Try it out! 
[Link to Google Sheets!](https://docs.google.com/spreadsheets/d/19aZM9IVdexcvb5U4gnC4TKOotgtkgxcEjGzMGv6OxyU/edit?usp=sharing)
