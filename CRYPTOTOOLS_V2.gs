/*====================================================================================================================================*
  CryptoTools Google Sheet Feed by Eloise1988
  ====================================================================================================================================
  Version:      2.0
  Project Page: https://github.com/Eloise1988/CRYPTOBALANCE
  Copyright:    (c) 2021 by Eloise1988
                
  License:      MIT License
               
  ------------------------------------------------------------------------------------------------------------------------------------
  A library for importing ones balances, staking, rewards, lending & farming rates, dex volume & fees, uniswap new pairs into Google spreadsheets. Functions include:

     CRYPTOBALANCE                For use by end users to retrieve blockchain balances
     CRYPTOSTAKING                For use by end users to retrieve cryptocurrency staking amounts
     CRYPTOREWARSD                For use by end users to retrieve cryptocurrency reward amounts from staking
     CRYPTOLENDING                For use by end users to retrieve cryptocurrency lending/borrowing rates from dex echanges
     CRYPTODISTRIBUTIONRATE       For use by end users to retrieve the distribution token rate from lending plateforms (COMPOUND)
     CRYPTOSUMETH                 For use by end users to retrieve one's total $ amount on ERC20 address
     CRYPTODEXVOLUME              For use by end users to retrieve DEX volumes $
     CRYPTODEXFEE                 For use by end users to retrieve DEX transaction fees
     CRYPTOTVL                    For use by end users to retrieve Total Value Locked in Defi projects
     UNISWAP                      For use by end users to retrieve all new pairs on Uniswap
     SUSHISWAP                    For use by end users to retrieve all new pairs on Sushiswap
     PANCAKESWAP                  For use by end users to retrieve all new pairs on Pancakeswap
     CRYPTODEXPRICE               For use by end users to retrieve DEX (decentralized exchanges) cryptocurrency pair prices
     CRYPTOFUTURES                For use by end users to retrieve BTC, ETH Futures Prices, basis, volume, open interest
     CRYPTOLP                     For use by end users to retrieve data from Liquidity Pools, APR, APY, TVL from DEX 
  
  For bug reports see https://github.com/Eloise1988/CRYPTOBALANCE/issues

  ------------------------------------------------------------------------------------------------------------------------------------
  Changelog:
  
  2.0.2  Release
 *====================================================================================================================================*/



/**------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/**------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/**---------------------------------                       GOOGLE SHEET FORMULA USERINTERFACE WITH EXPLANATION                           ---------------------- */
/**------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/**------------------------------------------------------------------------------------------------------------------------------------------------------------ */


function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CRYPTOTOOLS')
      .addItem('CRYPTOBALANCE', 'ShowHowToRefresh')
      .addSeparator()
      .addItem('CRYPTOSTAKING', 'ShowHowCRYPTOSTAKING')
      .addSeparator()    
      .addItem('CRYPTOREWARDS', 'ShowHowCRYPTOREWARDS')
      .addSeparator()
      .addItem('CRYPTOLENDING', 'ShowHowCRYPTOLENDING')
      .addSeparator()
      .addSeparator()
      .addItem('Contact Info', 'ShowContactInfo')
      .addToUi();
 
 
}

function ShowHowToRefresh() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Get your wallet Balances",
           ' Returns cryptocurrencies balances for over 400+ cryptocurrencies. \n\ \n\ @param {"CURRENCY TICKER"} The cryptocurrency TICKER/SYMBOL data to fetch, for example the symbol of Bitcoin is BTC. \n\ @param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.\n\ @param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances. \n\ @return The current amount of cryptocurrency on the searched public address. \n\ \n\ In your CRYPTOBALANCE function, add a 3rd argument to a locked reference cell, like A1. \nFrom now on every time you change the content of the cell A1, your data will be updated.\n\ \nGet the amount of BTC on the following wallet: \n\ Example:\n=CRYPTBALANCE("BTC","35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",$A$1)',
            ui.ButtonSet.OK)
}
function ShowHowCRYPTOSTAKING() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Get staking amounts",
           'Returns the amount STAKED on PoS cryptocurrencies.\n\ \n\@param {"CURRENCY TICKER FOR STAKING"} The cryptocurrency TICKER/SYMBOL data to fetch.\n\@param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.\n\@param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances.\n\@return The current amount of cryptocurrency on the searched public address.\n\ \n\ Get the EOS staked on the oktothemoon address address \n\=CRYPTOSTAKING("EOS","okbtothemoon")',
            ui.ButtonSet.OK)
}
function ShowHowCRYPTOREWARDS() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Get the amount of rewards received from staking",
           'Returns cryptocurrencies REWARDS on PoS cryptocurrencies.\n\ \n\ @param {"CURRENCY TICKER FOR REWARDS"} The cryptocurrency TICKER/SYMBOL data to fetch.\n\ @param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the rewards from. Please pay attention, DO NOT TO ENTER your private wallet address.\n\@param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances.\n\ @return The current amount of cryptocurrency on the searched public address.\n\ \n\ Get the ATOM rewards for staking on the following address \n\=CRYPTOREWARDS("ATOM","cosmos1r0y7s2vrgk3nw3nkp5tyy8zxjkz7nw9vrvmxun")',
             ui.ButtonSet.OK)
}

function ShowHowCRYPTOLENDING() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Get cryptocurrency lending rates on decentralized and semi-centralized exchanges",
           'Returns cryptocurrencies lending rates on different lending plateforms.\n\ \n\ @param {"EXCHANGE"} The exchange on which you want to retrieve the lending rate. data to fetch. Examples of exchanges: NUO, COMPOUND, DXDY, FULCRUM, AAVE .... \n\ @param {"TOKEN NAME"} associated to the cryptocurrency you want the lending from. Please pay attention on the available tickers on exchanges. \n\ @param {"APR_BORROW or APR_LEND"} either APR_BORROW which corresponds to the borrowing rate or APR_LEND which corresponds to the lending rate. \n\ @param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances. \n\ @return the current lending rate in decimal form,  of cryptocurrency on the searched public address.\n\ \n\ Get the borrowing rate on compound for Ethereum. \n\ =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW")',
             ui.ButtonSet.OK)
} 
function ShowContactInfo() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Contact Info",
            'Support email: ac@charmantadvisory.com\n\
             Telegram Chat: https://t.me/TheCryptoCurious\n\
             Github: https://github.com/Eloise1988\n\
             API Doc: https://app.swaggerhub.com/apis-docs/Eloise1988/Crypto-Tools',
            ui.ButtonSet.OK)
}

/**CRYPTOBALANCE
 * Returns cryptocurrency balances into Google spreadsheets. The result is a ONE-dimensional array.
 * By default, data gets transformed into a number so it looks more like a normal price data import. 
 * For example:
 *
 *   =CRYPTOBALANCE("BTC", "14ByqnCtawEV1VdQbLqxYWPdey1JbfpwRy","$A$1")
 *
 * @param {cryptocurrency}  the cryptocurrency TICKER/SYMBOL data to fetch, for example the symbol of Bitcoin is BTC.
 * @param {address}         the wallet address associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.
 * @param {parseOptions}    an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a one-dimensional array the balance of cryptocurrency
 **/
  
async function CRYPTOBALANCE(ticker,address){
  Utilities.sleep(Math.random() * 100)
  id_cache=ticker+address+"balance"
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    

    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();

    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    
    url="http://api.charmantadvisory.com/BALANCE/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
    
    return content;
  }

  catch(err){
      return CRYPTOBALANCE(ticker,address);
  }

}

/**CRYPTOLENDING
 * Returns cryptocurrency lending rates on different lending plateforms into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW")
 *
 * @param {exchange}               the exchange on which you want to retrieve the lending rate
 * @param {cryptocurrency}         the cryptocurrency ticker you want the lending/borrowing rate from
 * @param {APR_BORROW or APR_LEND} either APR_BORROW for the borrowing rate or APR_LEND for the lending rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current lending rate in decimal form,  of cryptocurrency on a specified exchange
 **/

async function CRYPTOLENDING(exchange,ticker,side){
  id_cache=ticker+exchange+side+"lending"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    
    ticker=ticker.toUpperCase();
    exchange=exchange.toUpperCase();
    side=side.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/LENDING/"+exchange+"/"+ticker+"/"+side+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
      
    }
    
    return content;
  }

  catch(err){
    return CRYPTOLENDING(exchange,ticker,side);
  }
}

/**CRYPTOREWARDS
 * Returns cryptocurrency REWARDS on PoS cryptocurrencies into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a value amount. 
 * For example:
 *
 * =CRYPTOREWARDS("ATOM","cosmos1r0y7s2vrgk3nw3nkp5tyy8zxjkz7nw9vrvmxun",$A$1)
 *
 * @param {cryptocurrency}         the cryptocurrency ticker you want the rewards from
 * @param {address}                the wallet address associated to the cryptocurrency you want the rewards from. Please pay attention, DO NOT TO ENTER your private wallet address.
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current cryptocurrency rewards from PoS
 **/

async function CRYPTOREWARDS(ticker,address){
  id_cache=ticker+address+"rewards"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  
  try{
    //

    ticker=ticker.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/REWARDS/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    cache.put(id_cache, content)
    return content;
  }

  catch(err){
    return CRYPTOREWARDS(ticker,address);
  }

}


/**CRYPTOSTAKING
 * Returns the amount STAKED on PoS cryptocurrencies into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a value amount. 
 * For example:
 *
 * =CRYPTOSTAKING("EOS","okbtothemoon",$A$1)
 *
 * @param {cryptocurrency}         the cryptocurrency ticker you want the amounts of staking from
 * @param {address}                the wallet address associated to the cryptocurrency. Please pay attention, DO NOT TO ENTER your private wallet address.
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current amount staked on a cryptocurrency 
 **/

async function CRYPTOSTAKING(ticker,address){
  id_cache=ticker+address+"staking"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{

    ticker=ticker.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/STAKING/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
    
    
    return content;
  }

  catch(err){
    return CRYPTOSTAKING(ticker,address);
  }

}



/**CRYPTOSUMETH
 * Returns the total ETH amount on an ERC20 address into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a number. 
 * For example:
 *
 * =CRYPTOSUMETH("0xd47297cdcf36eed17305d6a5471c6cd482c7e91c", $A$1)
 *
 * @param {address}                the erc20 wallet address you want the sum from
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current total amount of ETH on an ERC20 address 
 **/

async function CRYPTOSUMETH(address){
  id_cache=address+"cryptosumeth"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  
  try{
    
    
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/TOTALETHBALANCE/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
    
    return content;
  }

  catch(err){
    return CRYPTOSUMETH(address);
  }
}


/**CRYPTOTVL
 * Returns DEXes' (decentralized exchanges) Total Cryptocurrency Value Locked.The result is a ONE-dimensional array.
 *
 * List of DEXes
 * Uniswap Maker WBTC Compound Aave Curve Finance Synthetix Harvest Finance yearn.financeRenVM Balancer SushiSwap InstaDApp C.R.E.A.M. Finance Nexus Mutual dForce 
 * Flexa mStable dYdX Set Protocol DODO ForTube Bancor Loopring Lightning Network bZxMetronomeKyber DFI.money Gnosis xDai DeversiFi Erasure PieDAO DDEX Opyn Melon 
 * MCDEX Augur Robo-Advisor for Yield ACO Opium Network Connext 1
 *
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTOTVL("MAKER")
 *
 * @param {DEX}                    the name of the DEX  ex:AAVE
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current TVL ($) in decimal form,  on specified DEX
 **/

async function CRYPTOTVL(exchange){
  id_cache=exchange+"tvl"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  try{
    
    
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/TVL/"+exchange+"/"+KEYID;
   
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
      
    }
    
    return content;
  }

  catch(err){
    return CRYPTOTVL(exchange);
  }
}
/**CRYPTODEXVOLUME
 * Returns DEXes' (decentralized exchanges) 24H Volume.The result is a ONE-dimensional array.
 *
 * List of DEXes
 * Uniswap Maker WBTC Compound Aave Curve Finance Synthetix Harvest Finance yearn.financeRenVM Balancer SushiSwap InstaDApp C.R.E.A.M. Finance Nexus Mutual dForce 
 * Flexa mStable dYdX Set Protocol DODO ForTube Bancor Loopring Lightning Network bZxMetronomeKyber DFI.money Gnosis xDai DeversiFi Erasure PieDAO DDEX Opyn Melon 
 * MCDEX Augur Robo-Advisor for Yield ACO Opium Network Connext 1
 *
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTODEXVOLUME("LEND")
 *
 * @param {DEX}                    the name of the DEX  ex:AAVE or ticker LEND
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the 24h DEX Volume in decimal form,  on specified DEX
 **/

async function CRYPTODEXVOLUME(exchange){
  id_cache=exchange+"dexvolume"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/DEXVOLUME/"+exchange+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }      
    }
    
    return content;
  }

  catch(err){
    return CRYPTODEXVOLUME(exchange);
  }
}
/**CRYPTODEXFEE
 * Returns DEXes' (decentralized exchanges) takers fee that compensates liquidity providers.The result is a ONE-dimensional array.
 *
 * List of DEXes
 * Uniswap Maker WBTC Compound Aave Curve Finance Synthetix Harvest Finance yearn.financeRenVM Balancer SushiSwap InstaDApp C.R.E.A.M. Finance Nexus Mutual dForce 
 * Flexa mStable dYdX Set Protocol DODO ForTube Bancor Loopring Lightning Network bZxMetronomeKyber DFI.money Gnosis xDai DeversiFi Erasure PieDAO DDEX Opyn Melon 
 * MCDEX Augur Robo-Advisor for Yield ACO Opium Network Connext 1
 *
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTODEXFEE("MAKER")
 *
 * @param {DEX}                    the name of the DEX  ex:Maker or ticker:MKR
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current takers' fee in decimal form,  on specified DEX
 **/

async function CRYPTODEXFEE(exchange){
  id_cache=exchange+"dexfee"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/DEXFEE/"+exchange+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
    }
    return content;
  }

  catch(err){
    return CRYPTODEXFEE(exchange);
  }
}
/**UNISWAP
 * Returns new tradable pairs on Uniswap, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
 *
 * By default, data gets transformed into a table 
 * For example:
 *
 * =UNISWAP(5,10000,10000,100)
 *
 * @param {days}                    the number of Days since the pair is active
 * @param {volume}                  the minimum Volume ($)
 * @param {liquidity}               the minimum Liquidity ($)
 * @param {tx_count}                the number of Transactions existant since creation
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a table with all new tradable pairs on Uniswap and their number of Days since Active, the Volume ($), the Liquidity ($), the number of Transactions 
 **/

async function UNISWAP(days,volume,liquidity,tx_count){
  Utilities.sleep(Math.random() * 100)
  try{
    
    
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    
    
    url="http://api.charmantadvisory.com/UNISWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;

    
    return ImportJSON(url,'','noInherit,noTruncate,rawHeaders');
  }

  catch(err){
    return UNISWAP(days,volume,liquidity,tx_count);
  }
  
}
/**SUSHISWAP
 * Returns new tradable pairs on Sushiswap, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
 *
 * By default, data gets transformed into a table 
 * For example:
 *
 * =SUSHISWAP(5,10000,10000,100)
 *
 * @param {days}                    the number of Days since the pair is active
 * @param {volume}                  the minimum Volume ($)
 * @param {liquidity}               the minimum Liquidity ($)
 * @param {tx_count}                the number of Transactions existant since creation
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a table with all new tradable pairs on Sushiswap and their number of Days since Active, the Volume ($), the Liquidity ($), the number of Transactions 
 **/

async function SUSHISWAP(days,volume,liquidity,tx_count){
  Utilities.sleep(Math.random() * 100)
  try{
    
    
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    
    
    url="http://api.charmantadvisory.com/SUSHISWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;

    
    return ImportJSON(url,'','noInherit,noTruncate,rawHeaders');
  }

  catch(err){
    return SUSHISWAP(days,volume,liquidity,tx_count);
  }}
/**PANCAKESWAP
 * Returns new tradable pairs on Pancakeswap, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions 
 *
 * By default, data gets transformed into a table 
 * For example:
 *
 * =PANCAKESWAP(5,10000,10000,100)
 *
 * @param {days}                    the number of Days since the pair is active
 * @param {volume}                  the minimum Volume ($)
 * @param {liquidity}               the minimum Liquidity ($)
 * @param {tx_count}                the number of Transactions existant since creation
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a table with all new tradable pairs on Sushiswap and their number of Days since Active, the Volume ($), the Liquidity ($), the number of Transactions 
 **/

async function PANCAKESWAP(days,volume,liquidity,tx_count){
  Utilities.sleep(Math.random() * 100)
  try{
    
    
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    
    
    url="http://api.charmantadvisory.com/PANCAKESWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;

    
    return ImportJSON(url,'','noInherit,noTruncate,rawHeaders');
  }

  catch(err){
    return PANCAKESWAP(days,volume,liquidity,tx_count);
  }}
  /**CRYPTODEXPRICE
 * Returns DEXes' (decentralized exchanges) prices per pair of tokens.
 *
 * List of available DEXes
 * 1INCH, UNISWAP, PANCAKESWAP, SUSHISWAP, BONFIDA, BAL
 *
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTODEXPRICE("ETH","BAL","1INCH")
 * =CRYPTODEXPRICE(E39:E100,F39:F100,J39:J100)
 *
 * @param {Token1}                 1st ticker range or its contract address
 * @param {Token2}                 2st ticker range or its contract address
 * @param {Exchange}               ticker range of dex exchange on which you are looking for rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current price rate of your cryptocurrency pair,  on specified DEX
 **/

async function CRYPTODEXPRICE(token1_array,token2_array,exchange_array){
  Utilities.sleep(Math.random() * 100)
  token1_array = [].concat(token1_array);
  token2_array = [].concat(token2_array);
  exchange_array = [].concat(exchange_array);
  if (token1_array.length===1) {
    var arr = Array.from(Array(1), () => new Array(1));
    var arr2 = Array.from(Array(1), () => new Array(1));
    var arr3 = Array.from(Array(1), () => new Array(1));
    arr[0] = token1_array;
    token1_array= arr;
    arr2[0] = token2_array;
    token2_array= arr2;
    arr3[0] = exchange_array;
    exchange_array= arr3;
  }
  //id_cache=token1_array+token2_array+exchange_array +"dexprice"
  
  id_cache=Utilities.base64Encode( Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token1_array+token2_array+exchange_array +"dexprice"));
  //Logger.log(id_cache)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    result=cached.split(',');
    Logger.log(result)
    return result.map(function(n) { return n && ("" || Number(n))}); 
    }
  
  try{
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
  
    url="http://api.charmantadvisory.com/DEXPRICE/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    //Logger.log(content)
    /*while (content===null) {
      res = await UrlFetchApp.fetch(url);
      content = res.getContentText();
    }*/
    var cachedDEX = JSON.parse(content);
    dict={};
    var result_list= [];
    for (var i=0;i<token1_array.length;i++) {
        token1=token1_array[i][0].toUpperCase();
        token2=token2_array[i][0].toUpperCase();
        
        if(token2=='' && token1!='' && exchange_array[i][0].toUpperCase()=='BAL' ) {
          if(cachedDEX[exchange_array[i][0].toUpperCase()].hasOwnProperty(token1.toLowerCase())){
          result_list.push(parseFloat(cachedDEX[exchange_array[i][0].toUpperCase()][token1.toLowerCase()]));
        }
        else{result_list.push("");
          continue;}}
           
        else if(token2=='' || token1=='' || exchange_array[i][0]=='' ) {
          result_list.push("");
          continue;}
        
        else if (exchange_array[i][0].toUpperCase()=='1INCH' || exchange_array[i][0].toUpperCase()=='CAKE' || exchange_array[i][0].toUpperCase()=='PANCAKESWAP'  || exchange_array[i][0].toUpperCase()=='CAKEV2') {
          if(cachedDEX[exchange_array[i][0].toUpperCase()].hasOwnProperty(token1) && cachedDEX[exchange_array[i][0].toUpperCase()].hasOwnProperty(token2)){
            result_list.push(parseFloat(cachedDEX[exchange_array[i][0].toUpperCase()][token1]/cachedDEX[exchange_array[i][0].toUpperCase()][token2])); 
            }
          else{
            result_list.push("");}
        }
    else{
      if(cachedDEX[exchange_array[i][0].toUpperCase()].hasOwnProperty(token1+token2)){
        result_list.push(parseFloat(cachedDEX[exchange_array[i][0].toUpperCase()][token1+token2]));
        }
      else{
        result_list.push("");
      }}
    }
    cache.put(id_cache,result_list);
    return result_list; 
  }

  catch(err){
    return "error";
  }
}
/**CRYPTOFUTURES
 * Returns BTC or ETH Futures Prices, basis, volume, open interest
 *
 * By default, data gets transformed into a table 
 * For example:
 *
 * =CRYPTOFUTURES("BTC")
 *
 * @param {ticker}                 BTC and ETH, for more markets contact https://t.me/TheCryptoCurious
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a table with all Id,	Exchange,	Price,	24h	Index Price,	Basis,	Spread,	Expiry,	Open Interest,	24h Volume	 for BTC and ETH futures
 **/

async function CRYPTOFUTURES(ticker){
  Utilities.sleep(Math.random() * 100)
  try{
    
    
    ticker=ticker.toUpperCase();
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    
    
    url="http://api.charmantadvisory.com/"+ticker+"FUTURES/"+KEYID;

    
    return ImportJSON(url);
  }

  catch(err){
    return CRYPTOFUTURES(ticker);
  }}
/**CRYPTODISTRIBUTIONRATE
 * Returns cryptocurrency lending rates on different lending plateforms into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTODISTRIBUTIONRATE("COMPOUND","ETH","APR_BORROW")
 *
 * @param {exchange}               the exchange on which you want to retrieve the token distribution rate (only COMPOUND available)
 * @param {cryptocurrency}         the cryptocurrency ticker you want the lending/borrowing distribution rate from
 * @param {APR_BORROW or APR_LEND} either APR_BORROW for the borrowing rate or APR_LEND for the distribution rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current distribution rate in decimal form,  of cryptocurrency on a specified exchange
 **/

async function CRYPTODISTRIBUTIONRATE(exchange,ticker,side){
  id_cache=ticker+exchange+side+"distributionrate"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    
    ticker=ticker.toUpperCase();
    exchange=exchange.toUpperCase();
    side=side.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/DISTRIBUTIONRATE/"+exchange+"/"+ticker+"/"+side+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
      
    }
    
    return content;
  }

  catch(err){
    return CRYPTODISTRIBUTIONRATE(exchange,ticker,side);
  }
}
/**CRYPTOLP
 * Returns cryptocurrency lending rates on different lending plateforms into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTOLP("CAKE","BUSD-WBNB","APR")
 *
 * @param {exchange}               DEX exchange ticker for the LP
 * @param {pair}         the cryptocurrency pair ex: WBTC-WETH
 * @param {APR or TVL} either APR_BORROW for the borrowing rate or APR_LEND for the distribution rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the APR or TVL from specific liquidity pool
 **/

async function CRYPTOLP(exchange,pair,type){
  id_cache=exchange+pair+type+"lp"
  Utilities.sleep(Math.random() * 100)
  var cache = CacheService.getScriptCache();
  var cached = cache.get(id_cache);
  if (cached != null) {
    if (isNaN(cached)) {
      return cached;} 
    return Number(cached);
  }
  
  try{
    
    pair=pair.toUpperCase();
    pair=pair.replace("-", "");
    pair=pair.replace("/", "");
    exchange=exchange.toUpperCase();
    type=type.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    url="http://api.charmantadvisory.com/LPOOLS/"+exchange+"/"+pair+"/"+type+"/"+KEYID;
    var res = await UrlFetchApp.fetch(url);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content)
      }
      
    }
    
    return content;
  }

  catch(err){
    return CRYPTOLP(exchange,ticker,side);
  }
} 
