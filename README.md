# CRYPTOCURRENCY TOOLS USED IN GOOGLE SHEETS
## CRYPTOBALANCE

### Get your cryptocurrency balance in your Google Sheets. 
##### With more than + 150 cryptocurrencies available.


######

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/Crypto_Balance.png)

###### =CRYPTOBALANCE("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOBALANCE("USDT","0xf977814e90da44bfa03b6295a0616a897441acec", $A$1)


##  
## CRYPTOLENDING

### Get the cryptocurrency lending rate from multiple lending platforms. 
###### MAKERDAO - COMPOUND - DYDX - NUO - NEXO - CELSIUS 
###### For the following cryptocurrencies: ETH - DAI- USDC- BAT- ZRX- WBTC
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/Crypto_Lending.png)

###### =CRYPTOLENDING("LENDING PLATFORM","TICKER","SIDE", refresh_cell) 
###### EXAMPLE    =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW", refresh_cell) 
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

![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/XTZ_EXPLORER.png)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/XTZ_EXAMPLE.png)
![alt text](https://github.com/Eloise1988/CRYPTOBALANCE/blob/master/XTZ_EXAMPLE2.png)

##  
###### =CRYPTOSTAKING("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOREWARDS("XTZ","tz1MtsStCawfc8cHUnUKhTJV2QxrH9Z7aM7W",$A$1)
##  

###### =CRYPTOREWARDS("TICKER","ADDRESS", refresh_cell) 
###### EXAMPLE    =CRYPTOREWARDS("XTZ","tz1MtsStCawfc8cHUnUKhTJV2QxrH9Z7aM7W",$A$1)
##  

## SETUP
###### 1. Open a Google sheet where you wish to use CRYPTOBALANCE(), CRYPTOLENDING(), CRYPTOSTAKING() or CRYPTOREWARDS()
###### 2. Go to Tools › Script editor
###### 3. Copy the content of [CRYPTOTOOLS](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/CRYPTOTOOLS) and paste it in the script editor (replace any existing content). 
###### 3.bis If you wish to have the CRYPTOFINANCE App from [cryptofinance.ai](https://cryptofinance.ai/) integrated with these functions, copy the content from [CRYPTOTOOLS_CryptoFinance.js](https://raw.githubusercontent.com/Eloise1988/CRYPTOBALANCE/master/CRYPTOBALANCE_withCryptoFinanceIntegrated.js).
###### 4. Save the script with File › Save, name it CRYPTOTOOLS, then close the script editor
###### 5. Back to your Google sheet, refresh the page, a CRYPTOBALANCE, CRYPTOSTAKING, CRYPTOREWADS & CRYPTOBLENDING menu will appear next to Help with Refresh and Contact info.




#### Now the functions are available for use! Try it out! 
