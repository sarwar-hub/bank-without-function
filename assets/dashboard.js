// Dashboard





// Add event listener to Deposite button
document.getElementById('deposite').addEventListener('click', function() {

    // Get deposite amount from input field
    let depositeField = document.getElementById('depositedAmount');
    let depositedAmountString = depositeField.value;
    let depositedAmount = parseFloat(depositedAmountString);

    // Clear field
    depositeField.value = '';

    // Get Depsite-total container
    let depositeContainer = document.getElementById('depositedTotal');
    let depositedTotalString = depositeContainer.innerText;
    let depositedTotal = parseFloat(depositedTotalString);

    // Input Validation
    if ( isNaN(depositedAmount) ) {
        alert('Please input Deposite amount');
        return;
    }

    // Set Deposite ammount to container
    depositeContainer.innerText = depositedTotal + depositedAmount;

    // Get Balance-total container
    let balanceContainer = document.getElementById('balanceTotal');
    let balanceTotalString = balanceContainer.innerText;
    let balanceTotal = parseFloat(balanceTotalString);

    // Set deposited amount to Balance total
    balanceContainer.innerText = balanceTotal + depositedAmount;

})



// Add event listener to Withdraw button
document.getElementById('withdraw').addEventListener('click', function(){

    // Get withdraw amount from input field
    let withdrawField = document.getElementById('withdrawalAmount');
    let withdrawalAmountString = withdrawField.value;
    let withdrawalAmount = parseFloat(withdrawalAmountString);

    // Clear field
    withdrawField.value = '';

    // Get withdraw-total container
    let withdrawContainer = document.getElementById('withdrawalTotal');
    let withdrawalTotalString = withdrawContainer.innerText;
    let withdrawalTotal = parseFloat(withdrawalTotalString);

    // Input Validation
    if ( isNaN(withdrawalAmount) ) {
        alert('Please input Withdraw amount');
        return;
    }

    // Get balance-total container
    let balanceContainer = document.getElementById('balanceTotal');
    let balanceTotalString = balanceContainer.innerText;
    let balanceTotal = parseFloat(balanceTotalString);

    // Widthdraw condition
    if ( withdrawalAmount > balanceTotal ) {
        alert('Insufficient fund');
        return;
    }

    // Set withdraw-total to container
    withdrawContainer.innerText = withdrawalTotal + withdrawalAmount;

    // Set New balance-total except withdrawal amount
    balanceContainer.innerText = balanceTotal - withdrawalAmount;

})
