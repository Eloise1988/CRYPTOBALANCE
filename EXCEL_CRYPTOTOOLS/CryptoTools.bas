Attribute VB_Name = "CryptoTools"
Option Explicit

Public Const CRYPTOTOOLS_API_KEY As String = "my_api_key"

Public Function CRYPTOPRICE(r As Variant) As Variant
    
    ' Declare variables and objects
    Dim URL As String
    Dim request As Object
    Dim private_path As String
    Dim http_options As Object
    Dim CallerRows As Long
    Dim Field As String
    Dim k As Long
    
    ' Set default values
    Field = "PRICE"
    
    ' Set API endpoint and options
    private_path = "https://api.charmantadvisory.com"
    Set http_options = CreateObject("Scripting.Dictionary")
    http_options("apikey") = GetMyIPAddress()
    
    ' Check if custom API key is provided
    If CRYPTOTOOLS_API_KEY <> "my_api_key" Then
        private_path = "https://privateapi.charmantadvisory.com"
        Set http_options = CreateObject("Scripting.Dictionary")
        http_options.Add "headers", CreateObject("Scripting.Dictionary")
        http_options("headers")("apikey") = CRYPTOTOOLS_API_KEY
    End If
    
    If TypeOf r Is Range Then
        ' Set default values
        CallerRows = r.Rows.Count
        
        ' Construct API URL
        URL = "/CRYPTOPRICE/" & r(1, 1).value
        For k = 2 To CallerRows
            URL = URL & "%2C" & r(k, 1).value
        Next k
      
    Else
        ' Construct API URL
        URL = "/CRYPTOPRICE/" & r
        
    End If
    
    
    URL = URL & "/" & http_options("apikey")
    
    ' Combine private path and API URL
    URL = private_path & URL
    
    ' Send API request
    Set request = CreateObject("MSXML2.XMLHTTP")
    request.Open "GET", URL, False
    request.setRequestHeader "apikey", http_options("apikey")
    request.send
    
    ' Parse JSON response
    Dim json As Object
    Set json = JsonConverter.ParseJson(request.responseText)
    
    ' Create output array
    Dim output() As Variant
    ReDim Preserve output(1 To json.Count, 0)
    
    ' Extract field value from each JSON object
    Dim i As Long
    For i = 1 To json.Count
        If Not json(i).Exists(Field) Then
            output(i, 0) = ""
        End If
        output(i, 0) = Val(json(i)(Field))
    Next i
    
    ' Return output array
    CRYPTOPRICE = output
    
End Function

Public Function CRYPTOBALANCE(ticker As Variant, address As Variant) As Variant
    
    ' Declare variables and objects
    Dim URL As String
    Dim request As Object
    Dim private_path As String
    Dim http_options As Object
    Dim CallerRows As Long
    Dim Field As String
    Dim k As Long
    
    Field = "QUANTITY"
    
    ' Set API endpoint and options
    private_path = "https://api.charmantadvisory.com"
    Set http_options = CreateObject("Scripting.Dictionary")
    http_options("apikey") = GetMyIPAddress()
    
    ' Check if custom API key is provided
    If CRYPTOTOOLS_API_KEY <> "my_api_key" Then
        private_path = "https://privateapi.charmantadvisory.com"
        Set http_options = CreateObject("Scripting.Dictionary")
        http_options.Add "headers", CreateObject("Scripting.Dictionary")
        http_options("headers")("apikey") = CRYPTOTOOLS_API_KEY
    End If
    
    
    If TypeOf ticker Is Range Then
        ' Set default values
        CallerRows = ticker.Rows.Count
        
        
        ' Construct API URL
        URL = "/BALANCES/" & ticker(1, 1).value
        For k = 2 To CallerRows
            URL = URL & "%2C" & ticker(k, 1).value
        Next k
        URL = URL & "/" & address(1, 1).value
        For k = 2 To CallerRows
            URL = URL & "%2C" & address(k, 1).value
        Next k
      
    Else
        ' Construct API URL
        URL = "/BALANCES/" & ticker & "/" & address
        
    End If
    
    URL = URL & "/" & http_options("apikey")
    
    ' Combine private path and API URL
    URL = private_path & URL
    
    
    ' Send API request
    Set request = CreateObject("MSXML2.XMLHTTP")
    request.Open "GET", URL, False
    request.setRequestHeader "apikey", http_options("apikey")
    request.send
    
    ' Parse JSON response
    Dim json As Object
    Set json = JsonConverter.ParseJson(request.responseText)
    
    ' Create output array
    Dim output() As Variant
    ReDim Preserve output(1 To json.Count, 0)
    
    ' Extract field value from each JSON object
    Dim i As Long
    For i = 1 To json.Count
        If Not json(i).Exists(Field) Then
            output(i, 0) = ""
        End If
        output(i, 0) = Val(json(i)(Field))
    Next i
    
    ' Return output array
    CRYPTOBALANCE = output
    
End Function
Public Function CRYPTOSUMUSD(address As Variant) As Variant
    
    ' Declare variables and objects
    Dim URL As String
    Dim request As Object
    Dim private_path As String
    Dim http_options As Object
    Dim CallerRows As Long
    
    
    ' Set API endpoint and options
    private_path = "https://api.charmantadvisory.com"
    Set http_options = CreateObject("Scripting.Dictionary")
    http_options("apikey") = GetMyIPAddress()
    
    ' Check if custom API key is provided
    If CRYPTOTOOLS_API_KEY <> "my_api_key" Then
        private_path = "https://privateapi.charmantadvisory.com"
        Set http_options = CreateObject("Scripting.Dictionary")
        http_options.Add "headers", CreateObject("Scripting.Dictionary")
        http_options("headers")("apikey") = CRYPTOTOOLS_API_KEY
    End If
    
    
    If TypeOf address Is Range Then
        ' Set default values
        CallerRows = address.Rows.Count
        
        
        ' Construct API URL
        URL = "/TOTALUSDBALANCE/" & address(1, 1).value
       
      
    Else
        ' Construct API URL
        URL = "/TOTALUSDBALANCE/" & address
        
    End If
    
    URL = URL & "/ALL/" & http_options("apikey")
    
    ' Combine private path and API URL
    URL = private_path & URL
    
    
    ' Send API request
    Set request = CreateObject("MSXML2.XMLHTTP")
    request.Open "GET", URL, False
    request.setRequestHeader "apikey", http_options("apikey")
    request.send
    
    ' Return output array
    CRYPTOSUMUSD = Val(request.responseText)
    
    
End Function

Function GetMyIPAddress() As String
    'Create a WinHttpRequest object using late binding
    Dim http As Object
    Set http = CreateObject("WinHttp.WinHttpRequest.5.1")
    Dim IP_API_URL As String
    
    IP_API_URL = "https://httpbin.org/ip"
    
    'Send an HTTP GET request to the httpbin.org/ip endpoint
    http.Open "GET", IP_API_URL, False
    http.send
    
    'Parse the JSON response and get the IP address
    Dim json As Object
    Dim IPAddr As String
    
    
    On Error Resume Next
    Set json = JsonConverter.ParseJson(http.responseText)
    If Err.Number <> 0 Then
        GetMyIPAddress = ""
        Exit Function
    End If
    On Error GoTo 0
    
    IPAddr = json("origin")
    
    'Convert the IP address to ASCII 256 format and return it
    GetMyIPAddress = ConvertToAscii256(IPAddr)
End Function

Function ConvertToAscii256(value As String) As String
    Dim i As Long ' Use Long data type for better performance and to avoid overflow issues for larger values
    Dim asciiVal As Integer
    Dim ascii256Val As String
    
    For i = 1 To Len(value)
        asciiVal = AscW(Mid(value, i, 1)) ' Use AscW instead of Asc to support Unicode characters
        ascii256Val = ascii256Val & Right$("000" & Hex$(asciiVal), 2) ' Use Right$ and Hex$ functions for better performance
    Next i
    
    ConvertToAscii256 = ascii256Val
End Function
