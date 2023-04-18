const bank = {
  "1234567890": {
    "firstName": "John",
    "lastName": "Doe",
    "balance": 1000,
    "pin": 1234
  },
  "0987654321": {
    "firstName": "Jane",
    "lastName": "Doe",
    "balance": 500,
    "pin": 5678
  }
};

function login() 
{
  const accountNumber = prompt("Enter your account number:");
  const pin = prompt("Enter your PIN:");
  
  const account = bank[accountNumber];
  
  if (account && account.pin == pin) 
  {
    alert(`Welcome ${account.firstName} ${account.lastName}. Your balance is ${account.balance} zł.`);
    menu(accountNumber);
  } else {
    alert("Invalid login credentials.");
  }
}

function menu(accountNumber) 
{
  const choice = prompt("Select an option:\n1. Withdraw cash\n2. Deposit cash");
  
  switch (choice) 
  {
    case "1":
      withdraw(accountNumber);
      break;
    case "2":
      deposit(accountNumber);
      break;
    default:
      alert("Invalid option.");
      menu(accountNumber);
      break;
  }
}

function withdraw(accountNumber) 
{
  const account = bank[accountNumber];
  const amount = prompt("Enter the amount to withdraw:");
  
  if (amount > account.balance) 
  {
    alert("You do not have sufficient funds in your account.");
    menu(accountNumber);
    return;
  }
  
  account.balance -= amount;
  alert(`Withdrew ${amount} zł. Your balance is now ${account.balance} zł.`);
  menu(accountNumber);
}

function deposit(accountNumber) 
{
  const account = bank[accountNumber];
  const amount = prompt("Enter the amount to deposit:");
  
  account.balance += amount;
  alert(`Deposited ${amount} zł. Your balance is now ${account.balance} zł.`);
  menu(accountNumber);
}
login();
