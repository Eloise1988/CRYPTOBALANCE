# Changelog

## 2026-10-03
- **Script (`CRYPTOTOOLS_V2.gs`)**: custom functions return an empty cell for blank arguments (`CRYPTOBALANCE`, `CRYPTOREWARDS`, `CRYPTOSTAKING`, `CRYPTODEXVOLUME`, `CRYPTODEXPRICE`, `CRYPTOPRICE`, `CRYPTOVOL30D`) instead of calling the API and showing an error.
- **API (server side, no script update needed)**:
  - Requests with an empty path segment (blank cells) are answered immediately with an empty result.
  - `/BALANCE/<coin>/<address>` without a user ID is accepted.
  - ERC20 balances use Etherscan API V2; BEP20 (BSC) and Polygon token/native balances use public RPC nodes; ATOM, LUNA and ALGO use new public endpoints.
  - Token decimals for contract-address lookups are read on-chain on 12 EVM networks (the retired The Graph hosted service is no longer used for this).
- **Known issues**: DOT balance; UNI/CAKE DEX prices; UNI/SUSHI/CRV/BAL DEX volumes.
