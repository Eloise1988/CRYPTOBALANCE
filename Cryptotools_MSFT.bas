
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

 Application.Calculation = xlCalculationManual
 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sUrl = "http://api.charmantadvisory.com/BALANCE/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sUrl
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 
  If IsNumeric(sGetResult) Then
    CRYPTOBALANCE = CDbl(sGetResult)
 Else
    CRYPTOBALANCE = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If

Application.Calculation = xlCalculationAutomatic

End Function


Function CRYPTOSTAKING(ticker As String, address As String)
 
 Application.Calculation = xlCalculationManual
 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sUrl = "http://api.charmantadvisory.com/STAKING/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sUrl
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
  If IsNumeric(sGetResult) Then
    CRYPTOSTAKING = CDbl(sGetResult)
 Else
    CRYPTOSTAKING = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If
 Application.Calculation = xlCalculationAutomatic



End Function
Function CRYPTOREWARDS(ticker As String, address As String)

 Application.Calculation = xlCalculationManual
 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 
 sUrl = "http://api.charmantadvisory.com/REWARDS/" & UCase(ticker) & "/" + address & "/ExcelMSFT"

 sRequest = sUrl
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
  If IsNumeric(sGetResult) Then
    CRYPTOREWARDS = CDbl(sGetResult)
 Else
    CRYPTOREWARDS = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If
 Application.Calculation = xlCalculationAutomatic



End Function
Function CRYPTOLENDING(exchange As String, ticker As String, side As String)

 Application.Calculation = xlCalculationManual
 Dim httpObject As Object
 Set httpObject = CreateObject("Microsoft.XMLHTTP")
 
 sUrl = "http://api.charmantadvisory.com/LENDING/" & UCase(exchange) & "/" + UCase(ticker) & "/" + UCase(side) & "/ExcelMSFT"

 sRequest = sUrl
 httpObject.Open "GET", sRequest, False
 httpObject.send
 sGetResult = httpObject.responseText
 
 If IsNumeric(sGetResult) Then
    CRYPTOLENDING = CDbl(sGetResult)
 Else
    CRYPTOLENDING = "Error,reload or contact https://t.me/TheCryptoCurious or ac@charmantadvisory.com"
 End If
 Application.Calculation = xlCalculationAutomatic


End Function






