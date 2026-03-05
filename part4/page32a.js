
let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}
function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {

      if (customer.balance < amount) {
        console.log("Insufficient balance");
        return customer;
      }

      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

function showTransactions(id) {
  const customer = customers.find((customer) => customer.id === id);

  console.log(`Transactions for ${customer.name}`);
  customer.transactions.forEach((t) => {
    console.log(`${t.type} - ${t.amount}`);
  });
}

deposit(1, 1500);
withdraw(1,500)
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
showTransactions(1)
