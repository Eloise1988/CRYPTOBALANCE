/*====================================================================================================================================*
  CryptoTools Google Sheet Feed by Eloise1988
  ====================================================================================================================================
  Version:      2.0.8
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
     CRYPTO_ERC20HOLDERS          For use by end users to retrieve list of bigget holders by ERC20 contract address
     CRYPTO_BEP20HOLDERS          For use by end users to retrieve list of bigget holders by ERC20 contract address
     CRYPTOTX_ERC20               For use by end users to retrieve list of all ETH & ERC20 Token transactions
     CRYPTOTX_BEP20               For use by end users to retrieve list of all BNB & BEP20 Token transactions
     CRYPTOPOOLPRICE              For use by end users to retrieve prices from decentralized Pool tokens
     CRYPTOFARMING                For use by end users to retrieve TVL, APR, APY from decentralized Pool / tokens
  
  For bug reports see https://github.com/Eloise1988/CRYPTOBALANCE/issues

  ------------------------------------------------------------------------------------------------------------------------------------
  Changelog:
  
  2.0.8  Release May 17th: Added CRYPTO_ERC20HOLDERS, CRYPTO_BEP20HOLDERS, CRYPTOTX_ERC20, CRYPTOTX_BEP20 +
         May 24th Modification CACHE
         May27th CRYPTOTX_ERC20, CRYPTOTX_BEP20 number days old addition
         June 1st UNISWAP SUSHISWAP exception handling
         June 7th NEW CRYPTOPOOLPRICE + CRYPTOFARMING
         June 20th UPDATE DEXPRICE METHOD + latest PancakeswapV2 prices
         June 23th UPDATE LENDING RATE METHOD
         July 9th API-KEY for premium users 
 *====================================================================================================================================*///CACHING TIME  
//Expiration time for caching values, by default caching data last 10min=600sec. This value is a const and can be changed to your needs.
const expirationInSeconds_=600;


//COINGECKO PRIVATE KEY 
//For unlimited calls to Coingecko's API, please provide your private Key in the brackets
const cryptotools_api_key="";


/*---------------------------------                       GOOGLE SHEET FORMULA USERINTERFACE ---------------------- */



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
      .addItem('PREMIUM', 'ShowContactInfo')
      .addSeparator()
      .addItem('Contact Info', 'ShowContactInfo')
      .addToUi();
 
 
}

function ShowHowToRefresh() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Get your wallet Balances",
           ' Returns cryptocurrencies balances for over 1000+ cryptocurrencies. \n\ \n\ @param {"CURRENCY TICKER"} The cryptocurrency TICKER/SYMBOL data to fetch, for example the symbol of Bitcoin is BTC. \n\ @param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.\n\ @param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances. \n\ @return The current amount of cryptocurrency on the searched public address. \n\ \n\ In your CRYPTOBALANCE function, add a 3rd argument to a locked reference cell, like A1. \nFrom now on every time you change the content of the cell A1, your data will be updated.\n\ \nGet the amount of BTC on the following wallet: \n\ Example:\n=CRYPTBALANCE("BTC","35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",$A$1)',
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

function ShowPremium() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Premium users",
            'For users needing faster, higher limits and customization: a private server is available but only accessible through api-key identification\n\
             Support email: ac@charmantadvisory.com\n\
             Telegram Chat: https://t.me/TheCryptoCurious',
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
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/BALANCE/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options) ;   
    var content = res.getContentText();

    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
      }
    
    return content;
  }

  catch(err){
      return err
      //return CRYPTOBALANCE(ticker,address);
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

    ticker=ticker.toUpperCase();
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/REWARDS/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    
    var content = res.getContentText();
    cache.put(id_cache, content,expirationInSeconds_)
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
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/STAKING/"+ticker+"/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = res.getContentText();
    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/TOTALETHBALANCE/"+address+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    
    var content = res.getContentText();
    if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/TVL/"+exchange+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
   
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/DEXVOLUME/"+exchange+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);

    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/DEXFEE/"+exchange+"/"+KEYID;
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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
    if(days != "" && volume != "" && liquidity != "" && tx_count != ""){
      if(isNaN(days)||isNaN(volume)||isNaN(liquidity)||isNaN(tx_count)){
      return "Wrong parameters"
    }
      else{
        var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
        GSUUID= GSUUID.replace(/%2f/gi, 'hello');
        var userProperties = PropertiesService.getUserProperties();
        var KEYID = userProperties.getProperty("KEYID") || GSUUID;

        private_path="http://api.charmantadvisory.com";
        http_options ={'headers':{'apikey':KEYID}};
        
        
        if (cryptotools_api_key != "") {
          private_path="https://privateapi.charmantadvisory.com";
          http_options = {'headers':{'apikey':cryptotools_api_key}};
        }
        url="/UNISWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;
      
        return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate',includeXPath_,defaultTransform_);
        
      }}
      else{return "Wrong parameters"}}


  catch(err){
    return err
    //return UNISWAP(days,volume,liquidity,tx_count);
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
    
    if(days != "" && volume != "" && liquidity != "" && tx_count != ""){
      if(isNaN(days)||isNaN(volume)||isNaN(liquidity)||isNaN(tx_count)){
      return "Wrong parameters"
    }
      else{
    
      var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
      GSUUID= GSUUID.replace(/%2f/gi, 'hello');
      var userProperties = PropertiesService.getUserProperties();
      var KEYID = userProperties.getProperty("KEYID") || GSUUID;

      private_path="http://api.charmantadvisory.com";
      http_options ={'headers':{'apikey':KEYID}};
      
      if (cryptotools_api_key != "") {
        private_path="https://privateapi.charmantadvisory.com";
        http_options = {'headers':{'apikey':cryptotools_api_key}};
      }
      url="/SUSHISWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;
      
        
      return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate',includeXPath_,defaultTransform_);
      
     
  }}
      else{return "Wrong parameters"}}

  catch(err){
    return err
    //return SUSHISWAP(days,volume,liquidity,tx_count);
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
    
    if(days != "" && volume != "" && liquidity != "" && tx_count != ""){
      if(isNaN(days)||isNaN(volume)||isNaN(liquidity)||isNaN(tx_count)){
      return "Wrong parameters"
    }
      else{
    
        var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
        GSUUID= GSUUID.replace(/%2f/gi, 'hello');
        var userProperties = PropertiesService.getUserProperties();
        var KEYID = userProperties.getProperty("KEYID") || GSUUID;

        private_path="http://api.charmantadvisory.com";
        http_options ={'headers':{'apikey':KEYID}};
        
        if (cryptotools_api_key != "") {
          private_path="https://privateapi.charmantadvisory.com";
          http_options = {'headers':{'apikey':cryptotools_api_key}};
        }
        url="/PANCAKESWAPFILTER/"+days+"/"+volume+"/"+liquidity+"/"+tx_count+"/"+KEYID;
      
        
        return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate',includeXPath_,defaultTransform_);

  }}
      else{return "Wrong parameters"}}

  catch(err){
    return err
    //return PANCAKESWAP(days,volume,liquidity,tx_count);
  }}
  
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

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/"+ticker+"FUTURES/"+KEYID;
    
    return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate',includeXPath_,defaultTransform_);
  
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

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/DISTRIBUTIONRATE/"+exchange+"/"+ticker+"/"+side+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
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

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/LPOOLS/"+exchange+"/"+pair+"/"+type+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    
    var content = res.getContentText();
    if (content!='None') {
      if (!isNaN(content) && content.toString().indexOf('.') != -1)
      {
        content=parseFloat(content);
        cache.put(id_cache, content,expirationInSeconds_)
      }
      
    }
    
    return content;
  }

  catch(err){
    return CRYPTOLP(exchange,ticker,side);
  }
} 
/**CRYPTO_ERC20HOLDERS
 * Returns a table of the 150 biggest holders by contract address or ticker into Google spreadsheets.
 * By default, json data gets transformed into a a table 151x3. 
 * For example:
 *
 * =CRYPTO_ERC20HOLDERS("MKR")
 * =CRYPTO_ERC20HOLDERS("0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2")
 *
 * @param {ticker}       ticker or contract_address if ticker is not available
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return table with the top 150 holders of cryptocurrency
 **/

async function CRYPTO_ERC20HOLDERS(ticker){
  
  Utilities.sleep(Math.random() * 100)
  
  try{
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/ERC20HOLDERS/"+ticker+"/"+KEYID;
    
    return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate,rawHeaders,noHeaders',includeXPath_,defaultTransform_);
  }
  catch(err){
    return CRYPTO_ERC20HOLDERS(ticker);
  }
} 
/**CRYPTO_BEP20HOLDERS
 * Returns a table of the 1000 biggest holders by contract address or ticker into Google spreadsheets.
 * By default, json data gets transformed into a a table 1000x3. 
 * For example:
 *
 * =CRYPTO_BEP20HOLDERS("CAKE")
 * =CRYPTO_BEP20HOLDERS("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
 *
 * @param {ticker}                 ticker or contract_address if ticker is not available
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return table with the top 1000 holders of BEP20 cryptocurrency
 **/

async function CRYPTO_BEP20HOLDERS(ticker){
  
  Utilities.sleep(1000)
  
  
  try{
    
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/BEP20HOLDERS/"+ticker+"/"+KEYID;
    
    return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate,rawHeaders,noHeaders',includeXPath_,defaultTransform_);
    
  }
  catch(err){
    return CRYPTO_BEP20HOLDERS(ticker);
  }
} 
/**CRYPTOTX_ERC20
 * Returns a table with the list of transactions for an ERC20 wallet address into Google spreadsheets filtered by days old.
 * By default, json data gets transformed into a a table. 
 * For example:
 *
 * =CRYPTOTX_ERC20("0xf50d9b37e86ff69bc3d7a18bf3d5a04d5ef6cad1",10)
 *
 * @param {address}       the ERC20 address you want the list of transactions from
 * @param {nbdays}         optional number of days old, 30d by default
 * @param {parseOptions}   an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return table with all ETH + ERC20 Token transactions (date, to, from, value, ticker)
 **/

async function CRYPTOTX_ERC20(address,nbdays){
  
  Utilities.sleep(Math.random() * 30)
  
  try{
    
    if(typeof nbdays === 'undefined') nbdays = 10000;
      
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/TXERC20/"+address+"/"+nbdays+"/"+KEYID;
    
    return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate,rawHeaders,noHeaders',includeXPath_,defaultTransform_);
    
  }

  catch(err){
    return CRYPTOTX_ERC20(address,nbdays);
  }
} 
/**CRYPTOTX_BEP20
 * Returns a table with the list of transactions for an BEP20 wallet address (Binance Smart Chain) into Google spreadsheets filtered by days old.
 * By default, json data gets transformed into a a table. 
 * For example:
 *
 * =CRYPTOTX_BEP20("0x921112cb26e4bda59ee4d769a99ad70e88c00019",10)
 *
 * @param {address}       the BEP20 address you want the list of transactions from (Binance Smart Chain)
 * @param {nbdays}        optional number of days old, 30d by default
 * @param {parseOptions}  an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return table with all BNB + BEP20 Token transactions (date, to, from, value, ticker)
 **/

async function CRYPTOTX_BEP20(address,nbdays){
  Utilities.sleep(Math.random() * 100)
  try{
    
    if(typeof nbdays === 'undefined') nbdays = 30;
      
    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/TXBEP20/"+address+"/"+nbdays+"/"+KEYID;
    
    return ImportJSONAdvanced(private_path+url,http_options,'','noInherit,noTruncate,rawHeaders,noHeaders',includeXPath_,defaultTransform_);
  }

  catch(err){
    return CRYPTOTX_BEP20(address,nbdays);
  }
} 
  /**CRYPTOPOOLPRICE
 * Returns prices from decentralized Pool tokens.
 *
 * List of available Pools
 * YEARN, BAL
 *
 * By default, data gets transformed into an array of decimal numbers. 
 * For example:
 *
 * =CRYPTOPOOLPRICE("YVCURVE-BBTC","YEARN")
 * =CRYPTOPOOLPRICE(E39:E100,F39:F100)
 *
 * @param {Token_Name}             list of contract address you wish the Pool Price from
 * @param {Exchange}               list of exchanges on you wish the Pool Price from
 * @customfunction
 *
 * @return the current price  your cryptocurrency pool on specified DEX
 **/


async function CRYPTOPOOLPRICE(token_name_array,exchange_array){
  Utilities.sleep(Math.random() * 100)
  
  
  try{
    if(token_name_array.length>1){
    token_name_array = [].concat(token_name_array).join("%2C");
    exchange_array = [].concat(exchange_array).join("%2C");}
    
    
    id_cache=Utilities.base64Encode( Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token_name_array+exchange_array +"poolprice"));

    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) {
      result=cached.split(',');
      //Logger.log(result)
      return result.map(function(n) { return n && ("" || Number(n))}); 
      }    

    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/POOLPRICE/"+exchange_array +"/"+token_name_array+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = JSON.parse(res.getContentText());
    
    
    var dict = []; 
    for (var i=0;i<content.length;i++) {
      if (Object.keys(content[i]).length != 0){
      dict.push(parseFloat(content[i]['PRICE']));
      }
      else{dict.push("");}
    }
    cache.put(id_cache,dict,expirationInSeconds_);
    return dict;}

  catch(err){
    return err
    //return CRYPTOPOOLPRICE(token_name_array,exchange_array);
  }
}
 /**CRYPTOFARMING
 * Returns apr, apy and tvl from tokens or pools on decentralized exchanges
 * 
 * By default, data gets transformed into an array of decimal numbers. 
 * For example:
 *
 * =CRYPTOFARMING("SUSHI","UNI-WETH","APY")
 * =CRYPTOFARMING(E39:E100,F39:F100,J39:J100)
 *
 * @param {Exchange}               list of exchanges on you wish the dat from
 * @param {Token_Name}             list of token tickers/pairs 
 * @param {Data_Type}              list of data_types: 'APR', 'APY', or 'TVL'
 * @customfunction
 *
 * @return the current APR, APY or TVL list for selected exchanges/tickers
 **/


async function CRYPTOFARMING(exchange_array,ticker_array,data_type){
  Utilities.sleep(Math.random() * 100)
  
  
  try{
    if(exchange_array.length>1){
    exchange_array = [].concat(exchange_array).join("%2C").replace("-", "").replace("/", "");
    data_type = [].concat(data_type).join("%2C").replace("-", "").replace("/", "");
    ticker_array = [].concat(ticker_array).join("%2C").replace("-", "").replace("/", "");}
    
    id_cache=Utilities.base64Encode( Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, ticker_array+exchange_array+data_type+"farming"));

    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) {
      result=cached.split(',');
      return result.map(function(n) { return n && ("" || Number(n))}); 
      }    

    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;
    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/LPOOLS/"+exchange_array +"/"+ticker_array+"/"+data_type+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = JSON.parse(res.getContentText());
    
    var dict = []; 
    for (var i=0;i<content.length;i++) {
      if (Object.keys(content[i]).length != 0){
      dict.push(parseFloat(content[i]['VALUE']));
      }
      else{dict.push("");}
    }
    cache.put(id_cache,dict,expirationInSeconds_);
    return dict;}

  catch(err){
    return err
    //return CRYPTOFARMING(exchange_array,ticker_array,data_type);
  }
}
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
  
  
  try{
    if(exchange_array.length>1){
    exchange_array = [].concat(exchange_array).join("%2C").replace("-", "").replace("/", "");
    token1_array = [].concat(token1_array).join("%2C").replace("-", "").replace("/", "");
    token2_array = [].concat(token2_array).join("%2C").replace("-", "").replace("/", "");}
    
    id_cache=Utilities.base64Encode( Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token1_array+token2_array+exchange_array+"dexprice"));

    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) {
      result=cached.split(',');
      return result.map(function(n) { return n && ("" || Number(n))}); 
      }    

    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/DEXPRICE2/"+token1_array +"/"+token2_array+"/"+exchange_array+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = JSON.parse(res.getContentText());
    
    var dict = []; 
    for (var i=0;i<content.length;i++) {
      if (Object.keys(content[i]).length != 0){
      dict.push(parseFloat(content[i]['PRICE']));
      }
      else{dict.push("");}
    }
    cache.put(id_cache,dict,expirationInSeconds_);
    return dict;}

  catch(err){
    return err
    //return CRYPTODEXPRICE(token1_array,token2_array,exchange_array);
  }
}
/**CRYPTOLENDING
 * Returns cryptocurrency lending rates on different lending plateforms into Google spreadsheets.The result is a ONE-dimensional array.
 * By default, data gets transformed into a decimal number. 
 * For example:
 *
 * =CRYPTOLENDING("COMPOUND","ETH","APR_BORROW")
 * =CRYPTOLENDING(A1:A10,B1:B10,C1:C10)
 *
 * @param {exchange}               the exchanges on which you want to retrieve the lending rate 
 * @param {cryptocurrency}         the cryptocurrency tickers you want the lending/borrowing rates from
 * @param {APR_BORROW or APR_LEND} either APR_BORROW for the borrowing rate or APR_LEND for the lending rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current lending rate in decimal form, range of data if array of data was given
 **/

async function CRYPTOLENDING(exchange_array,ticker_array,side_array){
   Utilities.sleep(Math.random() * 100)
  
  
  try{
    if(exchange_array.length>1){
    exchange_array = [].concat(exchange_array).join("%2C").replace("-", "").replace("/", "");
    ticker_array = [].concat(ticker_array).join("%2C").replace("-", "").replace("/", "");
    side_array = [].concat(side_array).join("%2C").replace("-", "").replace("/", "");}

    id_cache=Utilities.base64Encode( Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, exchange_array+ticker_array+side_array+"lendingrates"));
    Logger.log(id_cache)

    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) {
      result=cached.split(',');
      return result.map(function(n) { return n && ("" || Number(n))}); 
      }    

    var GSUUID = encodeURIComponent(Session.getTemporaryActiveUserKey());
    GSUUID= GSUUID.replace(/%2f/gi, 'hello');
    var userProperties = PropertiesService.getUserProperties();
    var KEYID = userProperties.getProperty("KEYID") || GSUUID;

    private_path="http://api.charmantadvisory.com";
    http_options ={'headers':{'apikey':KEYID}};
    
    if (cryptotools_api_key != "") {
      private_path="https://privateapi.charmantadvisory.com";
      http_options = {'headers':{'apikey':cryptotools_api_key}};
    }
    url="/LENDING2/"+exchange_array +"/"+ticker_array+"/"+side_array+"/"+KEYID;
    
    var res = await UrlFetchApp.fetch(private_path+url, http_options);
    var content = JSON.parse(res.getContentText());
    
    
    var dict = []; 
    for (var i=0;i<content.length;i++) {
      if (Object.keys(content[i]).length != 0){
      dict.push(parseFloat(content[i]['VALUE']));
      }
      else{dict.push("");}
    }
    cache.put(id_cache,dict,expirationInSeconds_);
    return dict;}

  catch(err){
    return err
    //return CRYPTOLENDING(exchange_array,ticker_array,side_array);
  }}
