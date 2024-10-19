function calculate() {
    // Get inputs
    let budgetSalary = parseFloat(document.getElementById('budgetSalary').value) || 0;
    let actualSalary = parseFloat(document.getElementById('actualSalary').value) || 0;
    let budgetFreelance = parseFloat(document.getElementById('budgetFreelance').value) || 0;
    let actualFreelance = parseFloat(document.getElementById('actualFreelance').value) || 0;

    let budgetRent = parseFloat(document.getElementById('budgetRent').value) || 0;
    let actualRent = parseFloat(document.getElementById('actualRent').value) || 0;

    let creditCardBalance = parseFloat(document.getElementById('creditCardBalance').value) || 0;

    // Calculate differences
    let diffSalary = actualSalary - budgetSalary;
    let diffFreelance = actualFreelance - budgetFreelance;
    let diffRent = actualRent - budgetRent;

    // Set differences in the table
    document.getElementById('diffSalary').textContent = diffSalary.toFixed(2);
    document.getElementById('diffFreelance').textContent = diffFreelance.toFixed(2);
    document.getElementById('diffRent').textContent = diffRent.toFixed(2);

    // Total Income
    let totalBudgetIncome = budgetSalary + budgetFreelance;
    let totalActualIncome = actualSalary + actualFreelance;
    document.getElementById('totalBudgetIncome').textContent = totalBudgetIncome.toFixed(2);
    document.getElementById('totalActualIncome').textContent = totalActualIncome.toFixed(2);

    // Total Expenses
    let totalBudgetExpenses = budgetRent; // Add other expenses as needed
    let totalActualExpenses = actualRent;
    document.getElementById('totalBudgetExpenses').textContent = totalBudgetExpenses.toFixed(2);
    document.getElementById('totalActualExpenses').textContent = totalActualExpenses.toFixed(2);

    // Final Difference
    let finalDifference = totalActualIncome - totalActualExpenses - creditCardBalance;
    document.getElementById('finalDifference').textContent = finalDifference.toFixed(2);

    // Highlight negative difference
    if (finalDifference < 0) {
        document.getElementById('finalDifference').classList.add('diff-negative');
    } else {
        document.getElementById('finalDifference').classList.remove('diff-negative');
    }
}
