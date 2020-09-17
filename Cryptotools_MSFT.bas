
Public Sub DefineFunction()
   Dim sFunctionName As String
   Dim sFunctionCategory As String
   Dim sFunctionDescription As String
   Dim aFunctionArguments(1 To 2) As String

   sFunctionName = "CRYPTOBALANCE"
   sFunctionDescription = "Returns cryptocurrency balances into Google spreadsheets."
   sFunctionCategory = 7 ' Text category
   aFunctionArguments(1) = "Cryptocurrency TICKER/SYMBOL data to fetch ex: BTC"
   aFunctionArguments(2) = "Wallet address. DO NOT TO ENTER your private wallet address."

   Application.MacroOptions Macro:=sFunctionName, _
         Description:=sFunctionDescription, _
         Category:=sFunctionCategory, _
         ArgumentDescriptions:=aFunctionArguments
End Sub

Public Function CRYPTOBALANCE(ticker As String, address As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/BALANCE/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 
  If IsNumeric(sGetResult) Then
    CRYPTOBALANCE = CDbl(sGetResult)
 Else
    CRYPTOBALANCE = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If



End Function

Function CRYPTOPRICE(ticker As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/CRYPTOPRICE/" & UCase(ticker) & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 
 If IsNumeric(sGetResult) Then
    CRYPTOPRICE = CDbl(sGetResult)
 Else
    CRYPTOPRICE = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If



End Function
Function CRYPTOSTAKING(ticker As String, address As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/STAKING/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
  If IsNumeric(sGetResult) Then
    CRYPTOSTAKING = CDbl(sGetResult)
 Else
    CRYPTOSTAKING = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If




End Function
Function CRYPTOREWARDS(ticker As String, address As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/REWARDS/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
  If IsNumeric(sGetResult) Then
    CRYPTOREWARDS = CDbl(sGetResult)
 Else
    CRYPTOREWARDS = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If




End Function
Function CRYPTOLENDING(exchange As String, ticker As String, side As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/LENDING/" & UCase(exchange) & "/" + UCase(ticker) & "/" + UCase(side) & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 If IsNumeric(sGetResult) Then
    CRYPTOLENDING = CDbl(sGetResult)
 Else
    CRYPTOLENDING = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If

End Function
Function CRYPTOFARMING(project As String, ticker As String, period As String)

 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sURL = "http://api.charmantadvisory.com/YIELDFARMING/" & UCase(project) & "/" + UCase(ticker) & "/" + UCase(period) & "/ExcelMSFT"

 sRequest = sURL
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 If IsNumeric(sGetResult) Then
    CRYPTOFARMING = CDbl(sGetResult)
 Else
    CRYPTOFARMING = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If

End Function
