const strategy = {
    '50/30/20 Rule': {
      'strategy': {
        'Needs(50%)': {
          'Essentials': 0,
          'Housing': 0,
          'Utilities': 0,
          'Groceries': 0,
          'Transportation': 0,
          'Health Insurance': 0,'Total':300},
        'Wants(30%)': {
          'Entertainment': 0,
          'Dining Out': 0,
          'Vacations': 0,
          'Hobbies': 0,'Total':300},
        'Savings(20%)': {
          'Retirement Savings': 0,
          'Investments': 0,
          'Emergency Fund': 0,
          'Short-Term Savings': 0,'Total':300},
      }
    },
    'Zero-Based Budgeting': {
      'strategy': {
        'Essentials': {
          'Rent': 0,
          'Utilities': 0,
          'Food': 0,
          'Health Care': 0,'Total':300},
        'Non-Essentials': {
          'Leisure': 0,
          'Dining Out': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Retirement Fund': 0,
          'Emergency Savings': 0,
          'Investment Accounts': 0,'Total':300},
        'Debt Repayment': {
          'Credit Card Payments': 0,
          'Loan Repayments': 0,'Total':300},
      }
    },
    'Envelope System': {
      'strategy': {
        'Fixed Expenses': {
          'Mortgage/Rent': 0,
          'Utilities': 0,
          'Groceries': 0,'Total':300},
        'Variable Expenses': {
          'Dining Out': 0,
          'Entertainment': 0,
          'Clothing': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Savings': 0,
          'Investment Contributions': 0,'Total':300},
      }
    },
    'Pay Yourself First': {
      'strategy': {
        'Savings(20%)': {
          'Retirement Contributions': 0,
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
        'Needs(50%)': {
          'Housing': 0,
          'Transportation': 0,
          'Utilities': 0,
          'Groceries': 0,
          'Insurance': 0,'Total':300},
        'Wants(30%)': {
          'Leisure': 0,
          'Entertainment': 0,
          'Vacations': 0,
          'Dining Out': 0,'Total':300},
      }
    },
    'Line-Item Budgeting': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Other Income': 0,'Total':300},
        'Expenses': {
          'Fixed Expenses': {
            'Mortgage/Rent': 0,
            'Utilities': 0,
          },
          'Variable Expenses': {
            'Groceries': 0,
            'Transportation': 0,
            'Health Insurance': 0,
          },
          'Discretionary Spending': {
            'Dining Out': 0,
            'Entertainment': 0,
            'Hobbies': 0,
          },'Total':300},
        'Savings': {
          'Retirement Savings': 0,
          'Investments': 0,
          'Emergency Fund': 0,'Total':300},
      }
    },
    'Incremental Budgeting': {
      'strategy': {
        'Fixed Costs': {
          'Rent/Mortgage': 0,
          'Utilities': 0,
          'Insurance': 0,'Total':300},
        'Variable Costs': {
          'Food': 0,
          'Transportation': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Contributions': 0,
          'Investment Accounts': 0,'Total':300},
      }
    },
    'Priority-Based Budgeting': {
      'strategy': {
        'High-Priority Expenses': {
          'Mortgage/Rent': 0,
          'Utilities': 0,
          'Healthcare': 0,'Total':300},
        'Medium-Priority Expenses': {
          'Groceries': 0,
          'Transportation': 0,'Total':300},
        'Low-Priority Expenses': {
          'Entertainment': 0,
          'Dining Out': 0,'Total':300},
        'Savings': {
          'Retirement Savings': 0,
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Activity-Based Budgeting': {
      'strategy': {
        'Core Activities': {
          'Housing': 0,
          'Healthcare': 0,
          'Food': 0,'Total':300},
        'Secondary Activities': {
          'Transportation': 0,
          'Education': 0,'Total':300},
        'Leisure Activities': {
          'Dining Out': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Retirement Fund': 0,
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Cash Flow Budgeting': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Additional Income': 0,'Total':300},
        'Expenses': {
          'Recurring Expenses': {
            'Rent': 0,
            'Utilities': 0,
            'Insurance': 0,
          },
          'Variable Expenses': {
            'Groceries': 0,
            'Transportation': 0,
            'Dining Out': 0,
          },'Total':300},
        'Savings': {
          'Emergency Savings': 0,
          'Retirement Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Rolling Budgeting': {
      'strategy': {
        'Income': {
          'Salary': 300,
          'Other Income': 400,'Total':300},
        'Fixed Expenses': {
          'Mortgage/Rent': 0,
          'Utilities': 0,'Total':300},
        'Variable Expenses': {
          'Groceries': 0,
          'Transportation': 0,'Total':300},
        'Savings': {
          'Investments': 0,
          'Retirement Fund': 0,
          'Emergency Fund': 0,'Total':300},
      }
    },
    'Proportional Budgeting': {
      'strategy': {
        'Fixed Costs': {
          'Mortgage/Rent': 0,
          'Utilities': 0,'Total':300},
        'Variable Costs': {
          'Transportation': 0,
          'Groceries': 0,'Total':300},
        'Discretionary Spending': {
          'Leisure': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Savings': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Reverse Budgeting': {
      'strategy': {
        'Essential Expenses': {
          'Rent/Mortgage': 0,
          'Utilities': 0,
          'Insurance': 0,'Total':300},
        'Lifestyle Expenses': {
          'Leisure': 0,
          'Dining Out': 0,'Total':300},
        'Savings & Investments': {
          'Emergency Fund': 0,
          'Retirement Fund': 0,
          'Investment Accounts': 0,'Total':300},
      }
    },
    'The Kakeibo Method': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Other Income': 0,'Total':300},
        'Fixed Expenses': {
          'Rent/Mortgage': 0,
          'Utilities': 0,
          'Healthcare': 0,'Total':300},
        'Discretionary Expenses': {
          'Dining Out': 0,
          'Entertainment': 0,
          'Clothing': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Contributions': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Reverse Engineering (Goal-Based Budgeting)': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Additional Income': 0,'Total':300},
        'Essential Needs': {
          'Housing': 0,
          'Utilities': 0,
          'Groceries': 0,
          'Healthcare': 0,'Total':300},
        'Savings Goals': {
          'Retirement Savings': 0,
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
        'Debt Reduction Goals': {
          'Credit Card Payments': 0,
          'Loan Repayments': 0,'Total':300},
      }
    },
    'The Debt Snowball Method': {
      'strategy': {
        'Debt Repayment': {
          'Smallest Debt First': 0,
          'Medium Debts': 0,
          'Largest Debt Last': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Investments': 0,
          'Retirement Contributions': 0,'Total':300},
      }
    },
    'The Debt Avalanche Method': {
      'strategy': {
        'Debt Repayment': {
          'High Interest Debts First': 0,
          'Low Interest Debts Last': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'The 30-Day Rule': {
      'strategy': {
        'Planned Spending': {
          'Unnecessary Purchases': 0,
          'Impulse Buys': 0,'Total':300},
        'Savings': {
          'Short-Term Savings': 0,
          'Investments': 0,
          'Retirement Fund': 0,'Total':300},
      }
    },
    'Sinking Fund Method': {
      'strategy': {
        'Goal Categories': {
          'Emergency Fund': 0,
          'Vacations': 0,
          'Big Purchases': 0,'Total':300},
        'Savings': {
          'Retirement Contributions': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Digital Envelope System': {
      'strategy': {
        'Fixed Expenses': {
          'Rent': 0,
          'Utilities': 0,'Total':300},
        'Discretionary Spending': {
          'Dining Out': 0,
          'Entertainment': 0,
          'Travel': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Fifty/Fifty Savings': {
      'strategy': {
        'Savings': {
          '50% Emergency Fund': 0,
          '50% Retirement Fund': 0,'Total':300},
        'Spending': {
          'Non-Essential Purchases': 0,'Total':300},
      }
    },
    'The "No Budget" Budget': {
      'strategy': {
        'Needs': {
          'Essentials': 0,
          'Housing': 0,
          'Transportation': 0,
          'Health Care': 0,'Total':300},
        'Wants': {
          'Leisure': 0,
          'Entertainment': 0,
          'Dining Out': 0,'Total':300},
        'Savings': {
          'Retirement Savings': 0,
          'Investments': 0,
          'Emergency Fund': 0,'Total':300},
      }
    },
    'The Parkinson’s Law Budget': {
      'strategy': {
        'Needs': {
          'Rent': 0,
          'Utilities': 0,
          'Groceries': 0,'Total':300},
        'Wants': {
          'Dining Out': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Investments': 0,
          'Emergency Fund': 0,
          'Retirement Savings': 0,'Total':300},
      }
    },
    'The Freedom Budget': {
      'strategy': {
        'Freedom Expenses': {
          'Housing': 0,
          'Transportation': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Retirement Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'Personalized Goal-Based Budgeting': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Side Hustles': 0,'Total':300},
        'Goal Savings': {
          'Retirement Fund': 0,
          'Investment Accounts': 0,'Total':300},
        'Debt Repayment': {
          'Credit Cards': 0,
          'Loans': 0,'Total':300},
      }
    },
    'Bacon & Eggs Budgeting': {
      'strategy': {
        'Essential Expenses': {
          'Groceries': 0,
          'Transportation': 0,
          'Rent': 0,'Total':300},
        'Non-Essential Expenses': {
          'Dining Out': 0,
          'Entertainment': 0,'Total':300},
        'Savings': {
          'Retirement Fund': 0,
          'Emergency Savings': 0,'Total':300},
      }
    },
    'Zero-Sum Budgeting': {
      'strategy': {
        'Income': {
          'Salary': 0,
          'Additional Income': 0,'Total':300},
        'Expenses': {
          'Fixed Expenses': {
            'Rent/Mortgage': 0,
            'Utilities': 0,
          },
          'Variable Expenses': {
            'Transportation': 0,
            'Groceries': 0,
          },'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
    'The “Jar System” (Five Jars Method)': {
      'strategy': {
        'Essentials Jar': {
          'Rent': 0,
          'Utilities': 0,
          'Transportation': 0,'Total':300},
        'Savings Jar': {
          'Retirement Fund': 0,
          'Emergency Fund': 0,'Total':300},
        'Investment Jar': {
          'Stocks': 0,
          'Bonds': 0,'Total':300},
        'Leisure Jar': {
          'Dining Out': 0,
          'Entertainment': 0,'Total':300},
        'Debt Jar': {
          'Credit Card Repayment': 0,
          'Loan Repayment': 0,'Total':300},
      }
    },
    'Triage Budgeting': {
      'strategy': {
        'Critical Expenses': {
          'Mortgage/Rent': 0,
          'Utilities': 0,
          'Groceries': 0,'Total':300},
        'Important Expenses': {
          'Transportation': 0,
          'Healthcare': 0,'Total':300},
        'Discretionary Expenses': {
          'Entertainment': 0,
          'Dining Out': 0,'Total':300},
        'Savings': {
          'Emergency Fund': 0,
          'Investments': 0,'Total':300},
      }
    },
  };
  
  

export function dataprovider(){
    return strategy ;
}