function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CRYPTOBALANCE')
      .addItem('Refresh Balances', 'ShowHowToRefresh')
      .addSeparator()
  .addItem('Contact Info', 'ShowContactInfo')
      .addToUi();
}

function ShowHowToRefresh() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Refresh Balances",
           'In your CRYPTOBALANCE function, add a 3rd argument to a locked reference cell, like A1. \nFrom now on every time you change the content of the cell A1, your data will be updated.\nExample:\n=BALANCE("BTC","35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP","$A$1")',
            ui.ButtonSet.OK)
}
function ShowContactInfo() {
  var ui = SpreadsheetApp.getUi()
  ui.alert("Contact Info",
            'Support email: ac@charmantadvisory.com',
            ui.ButtonSet.OK)
}

/**
 * Returns cryptocurrencies balances for the top 150 cryptocurrencies.
 *
 * @param {"CURRENCY TICKER"} The cryptocurrency TICKER/SYMBOL data to fetch, for example the symbol of Bitcoin is BTC.
 * @param {"PUBLIC WALLET ADDRESS"} associated to the cryptocurrency you want the balance from. Please pay attention, DO NOT TO ENTER your private wallet address.
 * @param {"EMPTY CELL REFERENCE"} refresh_cell ONLY on 3rd argument. Reference an empty cell and change its content to force refresh the balances.
 * @return The current amount of cryptocurrency on the searched public address.
 */

function CRYPTOBALANCE(ticker,address, refresh_cell){
  try{
    //

    ticker=ticker.toUpperCase();
    url="http://charmantadvisory.com:5000/apiblock/"+ticker+"/"+address;
    var res = UrlFetchApp.fetch(url);
    var content = res.getContentText();

    return parseFloat(content);
  }

  catch(err){
      return "Error getting data";
  }

}
