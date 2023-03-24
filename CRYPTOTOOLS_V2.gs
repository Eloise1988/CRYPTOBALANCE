/**
 * @OnlyCurrentDoc
 */
//CRYPTOTOOLS PRIVATE KEY 
//For faster & greater access, please provide your private Key in the brackets
const cryptotools_api_key = "";

//CACHING TIME  
//Expiration time for caching values, by default caching data is 10min = 600sec. This value can be adapted to your needs.
const expirationInSeconds_ = 600;

//SECRET ID 
// Change the secret variable to any word you wish, it used as a secret key to encrypt the identification of the spreadsheet's owner.
const secret = "mysecret";

/*=======================================================================================================================*
  CryptoTools Google Sheet Feed by Eloise1988
  =======================================================================================================================*
  Version:      2.4.8
  Project Page: https://github.com/Eloise1988/CRYPTOBALANCE
  Copyright:    (c) 2022 by Eloise1988
  License:      MIT License
  ------------------------------------------------------------------------------------------------------------------------
  A library for importing blockchain data endpoints into Google spreadsheets. Functions include:

    CRYPTOBALANCE                   Retrieve blockchain balances
    CRYPTOSTAKING                   Retrieve cryptocurrency staking amounts
    CRYPTOREWARSD                   Retrieve cryptocurrency reward amounts from staking
    CRYPTOLENDING                   Retrieve cryptocurrency lending/borrowing rates from dex echanges
    CRYPTOLENDINGREWARD             Retrieve reward apy lending/borrowing rates from AAVE & COMPOUND
    CRYPTODEXVOLUME                 Retrieve DEX volumes $
    CRYPTOTVL                       Retrieve Total Value Locked in Defi projects
    CRYPTODEXPRICE                  Retrieve DEX (decentralized exchanges) cryptocurrency pair prices
    CRYPTOPRICE                     Retrieve cryptocurrency prices in USD from Coingecko
    CRYPTOVOL30D                    Retrieve cryptocurrency 30D volatility against USD, ETH, BTC
    CRYPTOFUTURES                   Retrieve BTC, ETH Futures Prices, basis, volume, open interest
    CRYPTOLP                        Retrieve data from Liquidity Pools, APR, APY, TVL from DEX 
    CRYPTOTX                        Retrieve the historical transaction list on a range of addresses.
    CRYPTOPOOLPRICE                 Retrieve prices from decentralized Pool tokens
    CRYPTOFARMING                   Retrieve TVL, APR, APY from decentralized Pool / tokens
    CRYPTOGAS                       Retrieve average GWEI gas price (ETH)
    CRYPTOHOLDERCOUNT               Retrieve the number of holders on a list of erc20, bep20, matic tokens.
    CRYPTOTOKENLIST                 Retrieve the list of all tokens by address (per chain/all chains)
    BINANCEWITHDRAWFEE              Retrieve the withdrawals fee from binance
    CRYPTOHIST                      Retrieve the historical OHLC data
  

    PREMIUM FUNCTIONS
    CRYPTOLATESTPAIRS               Retrieve all new pairs by chain & DEX
    CRYPTOSUPPLY                    Retrieve the max supply on a list of erc20, bep20, matic, avax, movr, ftm tokens.
    TOPNFT                          Retrieve the TOP 5 NFT by USD value (ethereum chain) 
    BTCBALANCE_UNCONFIRMED          Retrieve the unconfirmed BTC balance (up to 5 addresses) 
    CRYPTOSUMUSD                    Retrieve one's total $ amount on all chains or by ETH, BSC ... chain
    CRYPTOHOLDERS                   Retrieve the list of the main holders by contract address, by chain
  
  For bug reports see https://github.com/Eloise1988/CRYPTOBALANCE/issues

  ----------------------------------------------------------------------------------------------------------------------------
  Changelog:
  2.4.5   06/01/23 New erc chains available on cryptobalance + fixed formatting issue 
  2.4.6   25/01/23 Creation of a secret key to encrypt the identification of the spreadsheet's owner
  2.4.7   30/01/23 New Function CRYPTOHOLDERS
  2.4.8   24/03/23 Fixed bug on auth for shared documents
  *========================================================================================================================*/

/*-------------------------------------------- GOOGLE SHEET FORMULA USERINTERFACE -------------------------------- */

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('CRYPTOTOOLS')
        .addItem('CRYPTOBALANCE', 'ShowHowToRefresh')
        .addSeparator()
        .addItem('CRYPTODEXPRICE', 'ShowDEXPrice')
        .addSeparator()
        .addSeparator()
        .addItem('PREMIUM', 'ShowPremium')
        .addSeparator()
        .addItem('CONTACT', 'ShowContactInfo')
        .addToUi();
}

function ShowHowToRefresh() {
    var ui = SpreadsheetApp.getUi()
    ui.alert("Get your wallet Balances",
        ' Returns cryptocurrencies balances for over 1000+ cryptocurrencies. \n\ \n\ @param {"CURRENCY TICKER"} The cryptocurrency TICKER/SYMBOL data to fetch, for example the symbol of Bitcoin is BTC. \n\ @param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.\n\ @param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances. \n\ @return The current amount of cryptocurrency on the searched public address. \n\ \n\ In your CRYPTOBALANCE function, add a 3rd argument to a locked reference cell, like A1. \nFrom now on every time you change the content of the cell A1, your data will be updated.\n\ \nGet the amount of BTC on the following wallet: \n\ Example:\n=CRYPTOBALANCE("BTC","35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",$A$1) \n\ \n\ Special Cases\n\=CRYPTOBALANCE(" ERC20 contract address","ERC20 holder address") \n\ =CRYPTOBALANCE("b"+ "BEP20 contract address","holder address") \n\ =CRYPTOBALANCE("m"+ "MATIC contract address", "holder address") \n\ =CRYPTOBALANCE("a"+ "AVAX contract address", "holder address") \n\=CRYPTOBALANCE("f"+ "FANTOM contract address", "holder address") \n\ =CRYPTOBALANCE("arb"+ "ARBITRUM contract address", "holder address") \n\ =CRYPTOBALANCE("celo"+ "CELO contract address", "holder address") \n\ =CRYPTOBALANCE("wan"+ "WANCHAIN contract address", "holder address")\n\ =CRYPTOBALANCE("aurora"+ "AURORA contract address", "holder address") \n\ =CRYPTOBALANCE("movr"+ "MOONRIVER contract address", "holder address") \n\ =CRYPTOBALANCE("palm"+ "PALM contract address", "holder address") \n\ =CRYPTOBALANCE("cronos"+ "CRONOS contract address", "holder address") \n\ =CRYPTOBALANCE("evmos"+ "EVMOS contract address", "holder address") \n\ =CRYPTOBALANCE("moon"+ "MOONBEAM contract address", "holder address") \n\ =CRYPTOBALANCE("gnosis"+ "GNOSIS contract address", "holder address") \n\ =CRYPTOBALANCE("evmos"+ "EVMOS contract address", "holder address") \n\ =CRYPTOBALANCE("moon"+ "MOONBEAM contract address", "holder address") \n\ =CRYPTOBALANCE("doge"+ "DOGECHAIN contract address", "holder address") \n\=CRYPTOBALANCE("TEZOS contract address","holder address") \n\ =CRYPTOBALANCE("SOLANA contract address","holder address") \n\ =CRYPTOBALANCE("XRP contract address","holder address") \n\ =CRYPTOBALANCE("TRON contract address","holder address") \n\ \n\ ETH Balance on : \n\ Arbitrum \n\ =CRYPTOBALANCE("ARBETH","holder address") \n\ Optimistic \n\ =CRYPTOBALANCE("OPETH","holder address") \n\ Aurora \n\ =CRYPTOBALANCE("AURORAETH","holder address") ',
        ui.ButtonSet.OK)
}
function ShowDEXPrice() {
    var ui = SpreadsheetApp.getUi()
    ui.alert("Get DEX Prices",
        ' Returns cryptocurrency prices on different networks and DEXes. \n\ \n\ @param {"CURRENCY TICKER1"} The cryptocurrency TICKER or contract to fetch data from. \n\ @param {"CURRENCY TICKER2"} The versus cryptocurrency TICKER or contract. \n\ @param {"EXCHANGE"} the exchange ticker you want the balance from, see list below.  \n\ @return The current price. \n\ \n Get the price of WETH-USDT on Uniswap V2: \n\ Example:\n=CRYPTODEXPRICE("WETH","USDT","UNI") \n\ \n\ List of networks/exchanges tickers to use:\n\ \n\ Ethereum Smart chain \n\ UNI - Uniswap V2 on ERC20 \n\ 1INCH - 1INCH on ERC20 \n\ SUSHI - Sushiswap on ERC20 \n\ \n\ Binance Smart Chain \n\ CAKE - Pancakeswap V2 on BEP20 \n\ BABY - Babyswap on BEP20 \n\ \n\ Matic/Polygon Smart Chain \n\ QUICK - Quickswap on polygon \n\ MATIC - Sushiswap on Polygon/Matic \n\ \n\ Fantom Chain \n\ BOO - Spookyswap on Fantom \n\ FTM - Sushiswap on Fantom \n\ \n\ Solana Chain \n\ FIDA - Bonfida on Solana \n\ DXL - DEXLabs on Solana \n\ \n\ Cosmos Chain \n\ OSMO - Osmosis on Cosmos \n\ \n\ Celo Chain \n\ CELO - Sushiswap on Celo \n\ \n\ Avalanche Chain \n\ PNG - Pangolin on Avalanche \n\ JOE - TraderJoe on Avalanche \n\ \n\ Aurora Chain \n\ TRI - TRISOLARIS / NEAR on Aurora \n\ WANNA - Wannaswap on Aurora \n\ \n\ ',
        ui.ButtonSet.OK)
}



function ShowPremium() {
    var ui = SpreadsheetApp.getUi()
    ui.alert("Premium users",
        'For users needing faster, higher limits and customization: a private server is available but only accessible through api-key identification\n\
             Telegram Chat: https://t.me/TheCryptoCurious \n\ API Documentation: https://api.cryptotools.one/openapi',
        ui.ButtonSet.OK)
}

function ShowContactInfo() {
    var ui = SpreadsheetApp.getUi()
    ui.alert("Contact Info",
        'Telegram Chat: https://t.me/TheCryptoCurious\n\
         Medium: https://eloise88.medium.com/\n\
         Patreon: https://www.patreon.com/cryptotools\n\
         Github: https://github.com/Eloise1988\n\
         API Doc: https://api.cryptotools.one/openapi',
        ui.ButtonSet.OK)
}

// Sheet Identification + API headers predefined
try {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var encryption = Utilities.computeHmacSha256Signature(spreadsheet.getOwner().toString(), secret);
  var KEYID1 = encryption.map(function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
  } catch (err) {
    var KEYID1 = SpreadsheetApp.getActiveSpreadsheet().getId();
  }
const KEYID=KEYID1

function url_header(){
  

  private_path = "https://api.cryptotools.one";
  http_options = {
      'headers': {
          'apikey': KEYID
      }
  };

  if (cryptotools_api_key != "") {
      private_path = "https://privateapi.cryptotools.one";
      http_options = {
          'headers': {
              'apikey': cryptotools_api_key
          }
      };
  }
  return [private_path,http_options]

}


/**CRYPTOBALANCE
 * Returns cryptocurrency balances into Google spreadsheets.
 * For example:
 *
 *   =CRYPTOBALANCE("BTC", "14ByqnCtawEV1VdQbLqxYWPdey1JbfpwRy","$A$1")
 * 
 * ............................  Special Cases  ........................................... 
 *   =CRYPTOBALANCE(" ERC20 contract address","ERC20 holder address")
 *   =CRYPTOBALANCE("b"+ "BEP20 contract address","holder address") 
 *   =CRYPTOBALANCE("m"+ "MATIC contract address", "holder address")
 *   =CRYPTOBALANCE("a"+ "AVAX contract address", "holder address") 
 *   =CRYPTOBALANCE("f"+ "FANTOM contract address", "holder address")
 *   =CRYPTOBALANCE("arb"+ "ARBITRUM contract address", "holder address")
 *   =CRYPTOBALANCE("movr"+ "MOONRIVER contract address", "holder address")
 *   =CRYPTOBALANCE("celo"+ "CELO contract address", "holder address")
 *   =CRYPTOBALANCE("wan"+ "WANCHAIN contract address", "holder address")
 *   =CRYPTOBALANCE("aurora"+ "AURORA contract address", "holder address")
 *   =CRYPTOBALANCE("op"+ "OPTIMISTIC contract address", "holder address")
 *   =CRYPTOBALANCE("palm"+ "PALM contract address", "holder address")
 *   =CRYPTOBALANCE("cronos"+ "CRONOS contract address", "holder address")
 *   =CRYPTOBALANCE("gnosis"+ "GNOSIS contract address", "holder address")
 *   =CRYPTOBALANCE("evmos"+ "EVMOS contract address", "holder address")
 *   =CRYPTOBALANCE("moon"+ "MOONBEAM contract address", "holder address")
 *   =CRYPTOBALANCE("doge"+ "DOGECHAIN contract address", "holder address")
 *   =CRYPTOBALANCE("TEZOS contract address","holder address") 
 *   =CRYPTOBALANCE("SOLANA contract address","holder address")
 *   =CRYPTOBALANCE("XRP contract address","holder address")
 *   =CRYPTOBALANCE("TRON contract address","holder address")
 *   =CRYPTOBALANCE("ADA Token Fingerprint","holder address")
 *   =CRYPTOBALANCE("HBAR contract","holder address")
 * 
 *  ............................  ETH Balance on  ........................................... 
 *   Arbitrum   =CRYPTOBALANCE("ARBETH","holder address")
 *   Optimistic =CRYPTOBALANCE("OPETH","holder address") 
 *   Aurora     =CRYPTOBALANCE("AURORAETH","holder address")
 *
 * @param {cryptocurrency}  the cryptocurrency array TICKER/SYMBOL, for example the symbol of Bitcoin is BTC.
 * @param {address}         the wallet address associated to the cryptocurrency you want the balance from. 
 * @customfunction
 *
 * @return a one-dimensional array the balance of cryptocurrency
 *  
 **/
async function CRYPTOBALANCE(ticker, address) {
    var sleepTime = Math.random() * 100;
    Utilities.sleep(sleepTime);
    if (!Array.isArray(ticker)) ticker = [ticker];
    if (!Array.isArray(address)) address = [address];
    ticker = ticker.join("%2C");
    address = address.join("%2C");
    let data = [];

    var id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, ticker+address + 'balances'));
    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) return JSON.parse(cached);

    // Connexion to the API endpoints 
    var url = "/BALANCES/" + ticker+ "/" + address + "/" + KEYID;
    var full_url_options = url_header();
    var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
    var content = res.getContentText();
    var parsedJSON = JSON.parse(content);

    data = parsedJSON.map(item => {
      var quantity = item.QUANTITY;
      return isNaN(parseFloat(quantity)) ? quantity : parseFloat(quantity);
    });

    try {
        cache.put(id_cache, JSON.stringify(data), expirationInSeconds_);
        return data;
    } catch (err) {
        return content;
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
async function CRYPTOREWARDS(ticker, address) {
    let id_cache = `${ticker}${address}rewards`;
    Utilities.sleep(Math.random() * 100);
    let cache = CacheService.getScriptCache();
    let cached = cache.get(id_cache);

    if (cached != null) {
        if (isNaN(cached)) {
            return cached;
        }
        return Number(cached);
    }

    let url = `/REWARDS/${ticker}/${address}/${KEYID}`;
    let full_url_options = url_header();

    try {
        ticker = ticker.toUpperCase();
        let res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        let content = res.getContentText();
        cache.put(id_cache, content, expirationInSeconds_);
        return content;
    } catch (err) {
        return err;
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
async function CRYPTOSTAKING(ticker, address) {
    var id_cache = `${ticker.toUpperCase()}${address}staking`;
    Utilities.sleep(Math.random() * 100);
    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);

    if (cached) {
        return !isNaN(cached) ? Number(cached) : cached;
    }

    try {
        var url = `/STAKING/${ticker.toUpperCase()}/${address}/${KEYID}`;
        var full_url_options=url_header();

        var res = await UrlFetchApp.fetch(`${full_url_options[0]}${url}`, full_url_options[1]);
        var content = res.getContentText();

        if (!isNaN(content) && content.toString().indexOf('.') != -1) {
            var parsedContent = parseFloat(content);
            cache.put(id_cache, parsedContent, expirationInSeconds_);
            return parsedContent;
        }

        return content;
    } catch (err) {
        return err;
    }
}


/**CRYPTOSUMUSD
 * Returns the total $ amount on all chains or on a specific chain like eth, matic, bsc, xdai, ftm, avax, op, arb, celo, movre, cvo, aurora etc ...into Google spreadsheets.
 * For example:
 *
 * =CRYPTOSUMUSD("0xdb3b93c27442c1dcb52537d6fca7b8a1d7f8c50b", "eth")
 * =CRYPTOSUMUSD("0xdb3b93c27442c1dcb52537d6fca7b8a1d7f8c50b")
 *
 * @param {address}                the wallet address you want the sum from
 * @param {chain}                  optional or by chain: eth, matic, bsc, xdai, ftm, avax, op, arb, celo, movre, cvo, aurora...
 * @customfunction
 *
 * @return the current total amount of $ on specific chain or total
 **/
async function CRYPTOSUMUSD(address,chain) {
    id_cache = address +chain+ "cryptosumusd"
    Utilities.sleep(Math.random() * 100)
    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);

    if (cached !== null) {
        if (Number(cached) === cached) {
            return cached;
        }
        return Number(cached);
    }

    try {
        if (!chain) chain = "all";
        chain = chain.toLowerCase();
        
        url = "/TOTALUSDBALANCE/" + address + "/" + chain + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);

        var content = res.getContentText();
        cache.put(id_cache, parseFloat(content), expirationInSeconds_)
        

        return parseFloat(content);
    } catch (err) {
        return res.getContentText();
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
 * =CRYPTOTVL(E39:E100)
 *
 * @param {DEX}                    the name of the DEX  ex:AAVE or list of DEXes
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current TVL ($) in decimal form,  on specified DEX
 **/
async function CRYPTOTVL(exchange_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (!Array.isArray(exchange_array)) {
            exchange_array = [exchange_array];
        }
        exchange_array = exchange_array.join("%2C").replace("/", "");

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, exchange_array + "dexvolume"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/TVL2/" + exchange_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (const item of content) {
            if (item.TVL) {
                dict.push(parseFloat(item.TVL));
            } else {
                dict.push("");
            }
        }
        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return err;
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
 * =CRYPTODEXVOLUME(E39:E100)
 *
 * @param {DEX}                    the name of the DEX  ex:AAVE or ticker LEND or LIST of DEXes
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the 24h DEX Volume in decimal form,  on specified DEX
 **/
async function CRYPTODEXVOLUME(exchange_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (!Array.isArray(exchange_array)) {
            exchange_array = [exchange_array];
        }
        exchange_array = exchange_array.join("%2C").replace("/", "");

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, exchange_array + "dexvolume"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/DEXVOLUME2/" + exchange_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (const item of content) {
            if (item.VOLUME) {
                dict.push(parseFloat(item.VOLUME));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return res.getContentText();
    }
}


/**CRYPTOLATESTPAIRS
 * Returns new tradable pairs by DEX and chain, giving constraints on the number of Days Active, the Volume ($), the Liquidity ($), the number of Transactions. Premium Function. 
 *
 * For example:
 *
 * =CRYPTOLATESTPAIRS(5,0,0,0,"eth","uni-v3")
 *
 * @param {days}                    the number of Days since the pair is active
 * @param {volume}                  the minimum Volume ($)
 * @param {liquidity}               the minimum Liquidity ($)
 * @param {tx_count}                the number of Transactions existant since creation
 * @param {chain}                   eth, matic, avax, movr, ftm, one, arbitrum, aurora
 * @param {dex}                     uni-v2, uni-v3, sushi, quick, algb,solar, boo, spirit, tri, wanna, viperswap
 * @param {tx_count}                the number of Transactions existant since creation
 * @customfunction
 *
 * @return a table with all new tradable pairs on Uniswap and their number of Days since Active, the Volume ($), the Liquidity ($), the number of Transactions 
 **/
async function CRYPTOLATESTPAIRS(days, volume, liquidity, tx_count, chain, exchange) {
    var idCache = `${days}${volume}${liquidity}${tx_count}${chain}${exchange}cryptolatestpairs`;
    var cache = CacheService.getScriptCache();
    var cached = cache.get(idCache);
    if (cached) return JSON.parse(cached);
    Utilities.sleep(Math.random() * 100)
    try {
        url = `/PAIRSFILTER/${days}/${volume}/${liquidity}/${tx_count}/${chain}/${exchange}/${KEYID}`;

       full_url_options=url_header();
        
        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var parsedJSON = JSON.parse(res.getContentText());

        var data = [['CONTRACT ADDRESS', '1_SYMBOL','2_SYMBOL', 'PRICE($)', 'VOLUME($)','LIQUIDITY($)','TX COUNT','DAYS ACTIVE']];
        parsedJSON['-'].forEach(token => {
          data.push([token['CONTRACT ADDRESS'], token['1_SYMBOL'], token['2_SYMBOL'], token['PRICE($)'], token['VOLUME($)'], token['LIQUIDITY($)'], token['TX COUNT'], token['DAYS ACTIVE']]);
        });
        
        cache.put(idCache, JSON.stringify(data), expirationInSeconds_);

        return data;
      } catch (err) {
          return res.getContentText();
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
async function CRYPTOFUTURES(ticker) {
    var idCache = `${ticker}cryptofutures`;
    var cache = CacheService.getScriptCache();
    var cached = cache.get(idCache);
    if (cached) return JSON.parse(cached);
    Utilities.sleep(Math.random() * 100)
    try {
        var url = `/${ticker.toUpperCase()}FUTURES/${KEYID}`;
        var options = url_header();
        var res = await UrlFetchApp.fetch(options[0] + url, options[1]);
        var parsedJSON = JSON.parse(res.getContentText());
        var data = [['ID', 'Exchange', 'Price', '24h', 'Index Price','Basis','Spread','Expires','Open Interest','24h Volume']];
        parsedJSON['Data'].forEach(token => {
          data.push([token.ID, token.Exchange, token.Price, token['24h'], token['Index Price'], token.Basis, token.Spread, token.Expires, token['Open Interest'], token['24h Volume']]);
        });
        
        cache.put(idCache, JSON.stringify(data), expirationInSeconds_);
        return data;
        
    } catch (err) {
        return err;
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
async function CRYPTOLP(exchange, pair, type) {
    var idCache = exchange + pair + type + "lp";
    var cache = CacheService.getScriptCache();
    var cached = cache.get(idCache);
    if (cached) return cached;
    Utilities.sleep(Math.random() * 100);
    try {
        pair = pair.toUpperCase().replace(/[\/-]/g, "");
        exchange = exchange.toUpperCase();
        type = type.toUpperCase();

        var url = `/LPOOLS/${exchange}/${pair}/${type}/${KEYID}`;
        var options = url_header();
        var res = await UrlFetchApp.fetch(options[0] + url, options[1]);
        var content = res.getContentText();
        if (content !== 'None') {
            if (!isNaN(content) && content.toString().indexOf('.') !== -1) {
                var parsedContent = parseFloat(content);
                cache.put(idCache, parsedContent, expirationInSeconds_);
                return parsedContent;
            }
        }
        return content;
    } catch (err) {
        return res.getContentText();
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

async function CRYPTOPOOLPRICE(token_name_array, exchange_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (token_name_array.length > 1) {
            token_name_array = [].concat(token_name_array).join("%2C");
            exchange_array = [].concat(exchange_array).join("%2C");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token_name_array + exchange_array + "poolprice"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            //Logger.log(result)
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/POOLPRICE/" + exchange_array + "/" + token_name_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());


        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['PRICE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return err
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
async function CRYPTOFARMING(exchange_array, ticker_array, data_type) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (exchange_array.length > 1) {
            exchange_array = [].concat(exchange_array).join("%2C").replace("/", "").replace("-", "");
            data_type = [].concat(data_type).join("%2C").replace("-", "");
            ticker_array = [].concat(ticker_array).join("%2C").replace("-", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, ticker_array + exchange_array + data_type + "farming"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/LPOOLS/" + exchange_array + "/" + ticker_array + "/" + data_type + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['VALUE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return res.getContentText();
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
 * ...............     List of networks/exchanges ticker to use          ..............
 * Ethereum Smart chain 
 * UNI - Uniswap V2 on ERC20 
 * 1INCH - 1INCH on ERC20 
 * SUSHI - Sushiswap on ERC20 
 * 
 * Binance Smart Chain 
 * CAKE - Pancakeswap V2 on BEP20 
 * BABY - Babyswap on BEP20 
 * 
 * Matic/Polygon Smart Chain 
 * QUICK - Quickswap on polygon 
 * MATIC - Sushiswap on Polygon/Matic
 * 
 * Fantom Chain 
 * BOO - Spookyswap on Fantom 
 * FTM - Sushiswap on Fantom 
 * 
 * Solana Chain 
 * FIDA - Bonfida on Solana 
 * DXL - DEXLabs on Solana 
 * 
 * Cosmos Chain 
 * OSMO - Osmosis on Cosmos 
 * 
 * Celo Chain 
 * CELO - Sushiswap on Celo 
 * 
 * Avalanche Chain 
 * PNG - Pangolin on Avalanche 
 * JOE - TraderJoe on Avalanche 
 * 
 * Aurora Chain
 * TRI - TRISOLARIS / NEAR on Aurora
 * WANNA - Wannaswap on Aurora
 *
 * @param {Token1}                 1st ticker range or its contract address
 * @param {Token2}                 2st ticker range or its contract address
 * @param {Exchange}               ticker range of dex exchange on which you are looking for rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current price rate of your cryptocurrency pair,  on specified DEX
 **/
async function CRYPTODEXPRICE(token1_array, token2_array, exchange_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (exchange_array.length > 1) {
            exchange_array = [].concat(exchange_array).join("%2C").replace("-", "").replace("/", "");
            token1_array = [].concat(token1_array).join("%2C").replace("-", "").replace("/", "");
            token2_array = [].concat(token2_array).join("%2C").replace("-", "").replace("/", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token1_array + token2_array + exchange_array + "dexprice"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/DEXPRICE2/" + token1_array + "/" + token2_array + "/" + exchange_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['PRICE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return res.getContentText();
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
async function CRYPTOLENDING(exchange_array, ticker_array, side_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (exchange_array.length > 1) {
            exchange_array = [].concat(exchange_array).join("%2C").replace("/", "");
            ticker_array = [].concat(ticker_array).join("%2C").replace("/", "");
            side_array = [].concat(side_array).join("%2C").replace("/", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, exchange_array + ticker_array + side_array + "lendingrates"));
        Logger.log(id_cache)

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/LENDING2/" + exchange_array + "/" + ticker_array + "/" + side_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());


        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['VALUE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return res.getContentText();
    }
}

/**CRYPTOPRICE
 * Returns crypto prices in USD from Coingecko.
 *
 * List of available symbols and ids found https://api.coingecko.com/api/v3/search?locale=fr&img_path_only=1
 *
 * By default, data gets transformed into a list 
 * For example:
 *
 * =CRYPTOPRICE("ETH")
 * =CRYPTOPRICE(E39:E100)
 *
 * @param {Token}                  Ticker/id range as found on Coingecko
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current price rate of your cryptocurrency in $
 **/
async function CRYPTOPRICE(token1_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (token1_array.length > 1) {
            token1_array = [].concat(token1_array).join("%2C").replace("/", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token1_array + "cryptoprice"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/CRYPTOPRICE/" + token1_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());
        
        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['PRICE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return err;
    }
}


/**CRYPTOVOL30D
 * Returns the 30d % volatility of a cryptocurrency against USD, ETH, or BTC
 * By default, data gets transformed into a list. 
 * For example:
 *
 * =CRYPTOVOL30D("ETH")
 * =CRYPTOVOL30D(E39:E100)
 *
 * @param {Token 1}                  Ticker symbol/name range 
 * @param {Token 2}                  Either USD, BTC, ETH
 * @param {parseOptions}             an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @returns the current 30d volatility of your cryptocurrency in $, ETH, BTC
 **/
async function CRYPTOVOL30D(token1_array, token2_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (token1_array.length > 1) {
            token1_array = [].concat(token1_array).join("%2C").replace("/", "");
        }
        if (token2_array.length > 1) {
            token2_array = [].concat(token2_array).join("%2C").replace("/", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token1_array + token2_array + "VOL30D"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/30DVOL/" + token1_array + "/" + token2_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['VOLATILTY_30D']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return err;
    }
}

/**CRYPTOGAS
 * Returns the average GWEI gas price into Google spreadsheets. Only ETH available now.
 * By default, data gets transformed into a number so it looks more like a normal price data import. 
 * For example:
 *
 *   =CRYPTOGAS("ETH")
 *
 * @param {cryptocurrency}  the cryptocurrency TICKER/SYMBOL data to fetch
 * @param {parseOptions}    an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return a one-dimensional array with the gas price
 **/
async function CRYPTOGAS(ticker) {
    Utilities.sleep(Math.random() * 100)
    id_cache = ticker + "GASPRICE"
    var cache = CacheService.getScriptCache();
    var cached = cache.get(id_cache);
    if (cached != null) {
        if (isNaN(cached)) {
            return cached;
        }
        return Number(cached);
    }

    try {

        url = "/CRYPTOGAS/" + ticker + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = res.getContentText();

        if (!isNaN(content) && content.toString().indexOf('.') != -1) {
            content = parseFloat(content);
            cache.put(id_cache, content, expirationInSeconds_)
        }

        return content;
    } catch (err) {
        return err;
    }
}

/**CRYPTOSUPPLY
 * Premium Plan Function: Returns the max supply on a list of erc20, bep20, matic, arbitrum, avalanche, moon-river, fantom tokens.
 *
 * For example:
 *
 * =CRYPTOSUPPLY("0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","ERC")
 * =CRYPTOSUPPLY("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
 * =CRYPTOSUPPLY("0x6f7C932e7684666C9fd1d44527765433e01fF61d","MATIC")
 * =CRYPTOSUPPLY("0xf97f4df75117a78c1a5a0dbb814af92458539fb4","ARB")
 * =CRYPTOSUPPLY(E39:E100,F39:F100)
 *
 * @param {Token}                  Smart contract list
 * @param {Network}                ERC, BEP, MATIC, ARB, AVAX, FTM, MOVR
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current list of max supplies per token and exchange
 **/
async function CRYPTOSUPPLY(token_array, network_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (token_array.length > 1) {
            network_array = [].concat(network_array).join("%2C");
            token_array = [].concat(token_array).join("%2C");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token_array + network_array + "maxsupply"));

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/SUPPLYCOINS/" + token_array + "/" + network_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());

        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['SUPPLY']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return res.getContentText();
    }
}

/**CRYPTOHOLDERCOUNT
 * Returns the number of holders on a list of erc20, bep20, matic, arbitrum, avalanche, moon-river, fantom tokens.
 *
 * For example:
 *
 * =CRYPTOHOLDERCOUNT("ETH","ERC")
 * =CRYPTOHOLDERCOUNT("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","BEP")
 * =CRYPTOHOLDERCOUNT(E39:E100,F39:F100)
 *
 * @param {Token}                  Ticker or smart contract list
 * @param {Network}                ERC, BEP, MATIC, ARB, AVAX, FTM, MOVR
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current list of number of holders per token and exchange
 **/
async function CRYPTOHOLDERCOUNT(token_array, network_array) {
    Utilities.sleep(Math.random() * 100)

    
      if (token_array.length > 1) {
          network_array = [].concat(network_array).join("%2C");
          token_array = [].concat(token_array).join("%2C");
      }

      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, token_array + network_array + "nbholders"));
      
      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = cached.split(',');
          return result.map(function(n) {
              return n && ("" || Number(n))
          });
      }

      
      url = "/NBHOLDERSCOINS/" + token_array + "/" + network_array + "/" + KEYID;
      full_url_options=url_header()
      var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
      var content = JSON.parse(res.getContentText());

      var dict = [];
      for (var i = 0; i < content.length; i++) {
          if (Object.keys(content[i]).length != 0) {
              dict.push(parseFloat(content[i]['HOLDERS']));
          } else {
              dict.push("");
          }
      }

      cache.put(id_cache, dict, expirationInSeconds_);

      return dict;
    
}

/**CRYPTOTOKENLIST
 * Returns the list of all tokens on all chains or on a specific chain like eth, matic, bsc, xdai, ftm, avax, op, arb, celo, movre, cvo, aurora etc ...
 * For example:
 *
 * =CRYPTOTOKENLIST("0xdb3b93c27442c1dcb52537d6fca7b8a1d7f8c50b", "eth")
 * =CRYPTOTOKENLIST("0xdb3b93c27442c1dcb52537d6fca7b8a1d7f8c50b")
 *
 * @param {address}                the wallet address you want the list of tokens from
 * @param {chain}                  optional or by chain: eth, matic, bsc, xdai, ftm, avax, op, arb, celo, movre, cvo, aurora...
 * @customfunction
 *
 * @return a dimensional array containing the list of all tokens by chain, contract, symbol and amount.
 **/
  
  async function CRYPTOTOKENLIST(address, chain = "all") {
    chain = chain.toLowerCase();
    var idCache = `${address}${chain}cryptotokenlist`;
    var cache = CacheService.getScriptCache();
    var cached = cache.get(idCache);
    if (cached) return JSON.parse(cached);
    Utilities.sleep(Math.random() * 100)
    try {
        var url = `/CRYPTOLIST/${address}/${chain}/${KEYID}`;
        var options = url_header();
        var res = await UrlFetchApp.fetch(options[0] + url, options[1]);
        parsedJSON = JSON.parse(res.getContentText());

        var data = [['CHAIN', 'CONTRACT', 'SYMBOL', 'PRICE', 'AMOUNT ($)']];
        parsedJSON.forEach(token => {
            data.push([token.CHAIN, token.CONTRACT, token.SYMBOL, token.PRICE, token['AMOUNT ($)']]);
        });

        cache.put(idCache, JSON.stringify(data), expirationInSeconds_);
        return data;
    } catch (err) {
        return res.getContentText();
    }
}


/**CRYPTOLENDINGREWARD
 * Returns cryptocurrency apy rewards rates on different lending plateforms (COMPOUND & AAVE) into Google spreadsheets.
 * For example:
 *
 * =CRYPTOLENDINGREWARD("AAVE","BUSD","APR_BORROW")
 * =CRYPTOLENDINGREWARD(A1:A10,B1:B10,C1:C10)
 *
 * @param {exchange}               the exchanges on which you want to retrieve the reward apy rate (COMPOUND or AAVE)
 * @param {cryptocurrency}         the cryptocurrency tickers you want the lending/borrowing rates from
 * @param {APR_BORROW or APR_LEND} either APR_BORROW for the borrowing rate or APR_LEND for the lending rate
 * @param {parseOptions}           an optional fixed cell for automatic refresh of the data
 * @customfunction
 *
 * @return the current lending rate in decimal form, range of data if array of data was given
 **/
async function CRYPTOLENDINGREWARD(exchange_array, ticker_array, side_array) {
    Utilities.sleep(Math.random() * 100)

    try {
        if (exchange_array.length > 1) {
            exchange_array = [].concat(exchange_array).join("%2C").replace("/", "");
            ticker_array = [].concat(ticker_array).join("%2C").replace("/", "");
            side_array = [].concat(side_array).join("%2C").replace("/", "");
        }

        id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, exchange_array + ticker_array + side_array + "lendingratesreward"));
        Logger.log(id_cache)

        var cache = CacheService.getScriptCache();
        var cached = cache.get(id_cache);
        if (cached != null) {
            result = cached.split(',');
            return result.map(function(n) {
                return n && ("" || Number(n))
            });
        }

        url = "/LENDINGREWARD/" + exchange_array + "/" + ticker_array + "/" + side_array + "/" + KEYID;
        full_url_options=url_header();

        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var content = JSON.parse(res.getContentText());


        var dict = [];
        for (var i = 0; i < content.length; i++) {
            if (Object.keys(content[i]).length != 0) {
                dict.push(parseFloat(content[i]['VALUE']));
            } else {
                dict.push("");
            }
        }

        cache.put(id_cache, dict, expirationInSeconds_);

        return dict;
    } catch (err) {
        return err;
    }
}
  

/**TOPNFT 
 * Returns the top 5 NFTs, dollar value, total sum on an ethereum address. 
 * By default, data gets transformed into a array/number. 
 * For example:
 *
 *   =TOPNFT("0xc36442b4a4522e871399cd717abdd847ab11fe88")           
 * 
 * @param {address}                        array of ethereum address
 * @customfunction
 *
 * @return a dimensional array containing the list of the top 5 NFT, listed by usd amount. 
 **/
async function TOPNFT(address) {
      var data = []
      
      address_defi = [].concat(address).join("%2C");
      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, address_defi + 'topnft'));

      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = JSON.parse(cached);
          return result;
      }

      // Connexion to the API endpoints 
      url = "/TOPNFT/" + address_defi + "/" + KEYID;
      full_url_options=url_header();
      var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
      var content = res.getContentText();
      var parsedJSON = JSON.parse(content);

      for (var i = 0; i < parsedJSON.length; i++) {
        var data_base = []
        for (var j = 0; j < parsedJSON[i].length; j++){
           if (j != parsedJSON[i].length-1) {
             if (Object.keys(parsedJSON[i][j]).length != 0) {
              data_base.push(parsedJSON[i][j]["ID"].toString() +' | '+ parsedJSON[i][j]["BALANCE_USD"].toString());
              }
              else{
                data_base.push('');
              }
           }
           else{
             data_base.push(parsedJSON[i][j]["BALANCE_USD"]);
           }
        }
       data.push(data_base);
      };
      try {
          cache.put(id_cache, JSON.stringify(data), expirationInSeconds_);
          return data;
      } catch (err) {
          return res.getContentText();
      }
}
/**BTCBALANCE_UNCONFIRMED 
 * Returns the balance on a BTC including the unconfirmed transactions from the mempool, you can request up to 5 address in one call. 
 * For example:
 *
 *   =BTCBALANCE_UNCONFIRMED("17bMJF9LPBVU1aN8YMVg5Y754tzjJiTMzH")           
 * 
 * @param {address}                        array of btc addresses (max 5)
 * @customfunction
 *
 * @return a dimensional array containing the BTC balances. 
 **/
async function BTCBALANCE_UNCONFIRMED(address) {
      var data = []
      
      address_btc = [].concat(address).join("%2C");
      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, address_btc + 'btcunconfirmedbalance'));

      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = JSON.parse(cached);
          return result;
      }

      // Connexion to the API endpoints 
      url = "/BTCUNCONFIRMED/" + address_btc + "/" + KEYID;
      full_url_options=url_header();
      try {
        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var parsedJSON = JSON.parse(res.getContentText());

        for (var i = 0; i < parsedJSON.length; i++) {
              data.push(parsedJSON[i]["BALANCE"]);
        };
      
          cache.put(id_cache, JSON.stringify(data), expirationInSeconds_);
          return data;
      } catch (err) {
          return res.getContentText();
      }
}


/**CRYPTOHIST 
 * Returns the historical cryptocurrency OHLC. Open, High, Close, Volume, Low.  Premium Plan for historical data greater than 3mth.
 * For example:
 *
 *   =CRYPTOHIST("BTC","CLOSE","2020-01-01","2021-12-31")           
 * 
 * @param {ticker}                        array of ticker (max 3 on freemium)
 * @param {datatype}                      either "open","high","low","close","volume","marketcap"
 * @param {startdate}                     start date in text format "yyyy-mm-dd" 
 * @param {endate}                        end date in text format "yyyy-mm-dd"
 * @customfunction
 *
 * @return a dimensional array containing the historical data. 
 **/
async function CRYPTOHIST (ticker,datatype,startdate,endate) {
      
      ticker = [].concat(ticker).join("%2C");
      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, ticker + datatype + startdate + endate + 'historydata'));

      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = JSON.parse(cached);
          return result;
      }

      // Connexion to the API endpoints 
      url = "/PRICEHISTO/" + ticker + "/"+ datatype + "/"+ startdate + "/" + endate + "/"+ KEYID;

      
      full_url_options=url_header();
      
      try {
        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var parsedJSON = JSON.parse(res.getContentText());
          cache.put(id_cache, JSON.stringify(parsedJSON), expirationInSeconds_);

          return parsedJSON;
      } catch (err) {
          return res.getContentText();
      }
}


/**CRYPTOTX 
 * Returns the historical transaction list on a range of addresses.
 * Networks available: btc,eth,bnb,op,cronos,ftm,arb,avax,matic,movr
 *
 *   =CRYPTOTX("bc1q0c36c38k2shz4jetd0a6nmlhahxd5alqmz3xcj","BTC")   
 *   =CRYPTOTX(a1:a2,b1:b2)          
 * 
 * @param {addresses}                     array of addresses (max 3 on freemium)
 * @param {network}                       available btc,eth (erc20),bnb (bep20),op,cronos,ftm,arb,avax,matic,movr
 * @customfunction
 *
 * @return a dimensional array containing the transactional data 
 **/
async function CRYPTOTX(addresses,network) {
      
      addresses = [].concat(addresses).join("%2C");
      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, addresses + network + 'transactiondata'));

      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = JSON.parse(cached);
          return result;
      }

      // Connexion to the API endpoints 
      url = "/TXALL/" + addresses + "/"+ network + "/"+ KEYID;

      
      full_url_options=url_header();
      
      try {
        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var parsedJSON = JSON.parse(res.getContentText());
          cache.put(id_cache, JSON.stringify(parsedJSON), expirationInSeconds_);

          return parsedJSON;
      } catch (err) {
          return res.getContentText();
      }
}

/**BINANCEWITHDRAWFEE 
 * Returns the list of withdrawal fees from Binance by ticker and network
 * For example:
 *
 *   =BINANCEWITHDRAWFEE("1INCH","BSC")           
 * 
 * @param {ticker}                        array of tickers (btc, ada, eth, zil etc)
 * @param {network}                       array of networks (eth, bsc ,ada etc)
 * @customfunction
 *
 * @return a dimensional array containing the withdrawal fees from Binance 
 **/
async function BINANCEWITHDRAWFEE(ticker,network) {
      var data = []
      
      ticker = [].concat(ticker).join("%2C");
      network= [].concat(network).join("%2C");
      id_cache = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, ticker+network + 'BINANCEWIDRAWFEE'));

      var cache = CacheService.getScriptCache();
      var cached = cache.get(id_cache);
      if (cached != null) {
          result = JSON.parse(cached);
          return result;
      }

      // Connexion to the API endpoints 
      url = "/BINANCEWITHDRAWDATA/" + ticker+ "/" + network + "/" + KEYID;
      full_url_options=url_header();
      var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
      var content = res.getContentText();
      var parsedJSON = JSON.parse(content);

      for (var i = 0; i < parsedJSON.length; i++) {
            data.push(parsedJSON[i]["WITHDRAWFEE"]);
      };
      try {
          cache.put(id_cache, JSON.stringify(data), expirationInSeconds_);
          return data;
      } catch (err) {
          return content;
      }
}


/**CRYPTOHOLDERS
 * Returns a table with the biggest holders by contract address into Google spreadsheets.
 * For example:
 *
 * =CRYPTOHOLDERS("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","bep")
 *
 * @param {contract}         contract_address you want holders from
 * @param {chain}            evm chain: erc or bep available
 * @customfunction
 *
 * @return table with the top  holders 
 **/
async function CRYPTOHOLDERS(contract,chain) {
    var idCache = `${contract}${chain}cryptoholders`;
    var cache = CacheService.getScriptCache();
    var cached = cache.get(idCache);
    if (cached) return JSON.parse(cached);
    Utilities.sleep(Math.random() * 100)
    try {
        url = `/HOLDERS/${contract}/${chain}/${KEYID}`;

       full_url_options=url_header();
        
        var res = await UrlFetchApp.fetch(full_url_options[0] + url, full_url_options[1]);
        var parsedJSON = JSON.parse(res.getContentText());
        var data = [['0_RANK', '1_HOLDER', '2_QUANTITY']];

        parsedJSON['DATA'].forEach(token => {
          data.push([token['0_RANK'], token['1_HOLDER'], token['2_QUANTITY']]);
        });
        
        cache.put(idCache, JSON.stringify(data), expirationInSeconds_);
        return data;
      } catch (err) {
          return res.getContentText();
      } 
}
