# Unhandled Exception in getBalance Function

This repository demonstrates a common error in decentralized applications (DApps): unhandled exceptions during balance retrieval. The `getBalance` function lacks proper error handling, potentially leading to application crashes or unexpected behavior.

## Bug Description

The `getBalance` function attempts to retrieve an account's balance using the `web3.eth.getBalance` method. However, it doesn't include error handling. If any issue occurs during the balance retrieval (network problems, invalid address, etc.), the function throws an exception, interrupting the DApp's execution.

## Solution

The solution involves wrapping the `web3.eth.getBalance` call in a `try...catch` block.  This allows the function to gracefully handle errors, preventing unexpected crashes and providing informative feedback to users.