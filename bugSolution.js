async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    console.error('Error retrieving balance:', error);
    // Optionally, provide more user-friendly feedback or retry logic
    return null; // Or handle the error as needed
  }
}

//Further improvements: add input validation for 'address' to prevent common errors.