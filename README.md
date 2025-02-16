# Personal Finance Tracker - Electron.js and React.js Conversion

## Project Overview

This project aims to convert the existing Python-based Personal Finance Tracker application to an Electron.js and React.js application. The goal is to maintain the modularity and functionality of the original application while leveraging the benefits of modern web technologies.

## Conversion Checklist

### MVP Requirements

- [ ] **User Authentication**

  - [ ] Login
  - [ ] Registration

- [ ] **Dashboard**

  - [ ] Overview of personal finances
  - [ ] Summary of income and expenses

- [ ] **CRUD Operations for Financial Records**

  - [ ] Create, Read, Update, Delete financial records (income, expenses)

- [ ] **Reports**

  - [ ] Generate financial reports
  - [ ] Visualize data (charts, graphs)

- [ ] **Settings**
  - [ ] User profile management
  - [ ] Application settings

### Enhanced Features

- [ ] **Data Export/Import**

  - [ ] Export financial data to CSV/Excel
  - [ ] Import financial data from CSV/Excel

- [ ] **Notifications**

  - [ ] Set up notifications for upcoming bills, low balance, etc.

- [ ] **Budget Planning**

  - [ ] Set and track budgets for different categories

- [ ] **Multi-Currency Support**

  - [ ] Support for multiple currencies and conversion rates

- [ ] **Dark Mode**
  - [ ] Toggle between light and dark themes

## Implementation Plan

1. **Set Up Project Structure**

   - Ensure the Electron.js and React.js project structure is set up correctly.

2. **Create Feature Branches**

   - Create a branch for each feature/module.

3. **Translate Python Modules to React Components**

   - Convert each Python module to a corresponding React component.

4. **Integrate Backend with Electron.js**

   - Use Electron's main process to communicate with the backend.

5. **Set Up Routing in React**

   - Use React Router to handle navigation between different components.

6. **Ensure Modularity**
   - Keep React components modular and maintain a clear separation of concerns.

## Contribution Guidelines

1. All features must have their own branch.
2. The main branch should not be touched directly.
3. After every conventional commit, a pull request must be made.
4. Maintain modularity for CRUD operations.
5. Open to advancements and enhancements as long as they follow the branching rule.

## Getting Started

To get started with the project, clone the repository and follow the steps outlined in the checklist above.

```bash
git clone https://github.com/Hermit-commits-code/personal-finance-tracker-electron.git
cd personal-finance-tracker-electron
```
