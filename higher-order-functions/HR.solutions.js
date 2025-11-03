
/**
 * TASKS you are in charge of HR at Big Corp. Welcome to your corporate desk job which you will be spending most of the precious hours of your finite life at, under the florescent beam of light fixtures installed in the 80s in a windowless room.
 * Use higher order functions to do your job. Do well, or your name will be in the next round of layoffs! Have fun greasing the wheels of corporate feudalism.
 */

import { ALL_EMPLOYEES, PAY_TYPE, ROLE } from "./HR.data.js";

/*
TASK 1 ->

Run payroll for all the employees in the company. Get { name, phone, email, pay }
for each employee where the pay field is the money they have earned in 2 weeks of working
*/

const HOURS_IN_WEEK = 40;
const WEEKS_IN_YEAR = 52;

const getSemiMonthlyPay = ({ type, rate }) => {
  if (type === PAY_TYPE.HOURLY) return rate * HOURS_IN_WEEK * 2
  else if (type === PAY_TYPE.SALARY) return rate / WEEKS_IN_YEAR * 2
}

const getEmployeePayroll = ({ name, contact, pay }) => ({
  name: name,
  phone: contact.phone,
  email: contact.email,
  pay: getSemiMonthlyPay(pay)
})

const payroll = ALL_EMPLOYEES.map(getEmployeePayroll)

/*
TASK 2 ->

The IRS is pissed that they are not getting their cut.
Now you need to get { name, phone, email, grossPay, netPay, taxesPaid }
consider writing a function that takes an employees gross pay
and outputs the amount that should be taken out of their paycheck.
The tax rate is a flat 20%
*/

const FLAT_TAX_RATE_PERCENT = 20;

const taxDeductionAmount = (grossPay) => {
  return grossPay * (FLAT_TAX_RATE_PERCENT / 100)
}

const employeePayrollWithDeductions = ({ pay, ...restOfPayrollData }) => ({
  grossPay: pay,
  netPay: pay - taxDeductionAmount(pay),
  taxesPaid: taxDeductionAmount(pay),
  ...restOfPayrollData
})

const payrollWithFlatTaxDeductions = payroll.map(employeePayrollWithDeductions)

/*
TASK 3 ->

An IRS auditor is sniffing around in our books and is demanding to know the total number of taxes all employees paid.
Figure it out!
*/

const sumArray = (total, currentValue) => {
  return total + currentValue
};

const allPaidTaxes = payrollWithFlatTaxDeductions
  .map(({ taxesPaid }) => taxesPaid)
  .reduce(sumArray);

/*
TASK 4 ->

Unfortunately the auditor is not satisfied yet. He wants to know what percentage of the tax revenue paid by the
employees of our company was generate from software engineers (swe-intern, swe, senior-swe)
*/

const SOFTWARE_ENGINEER_ROLES = [
  ROLE.SOFTWARE_ENGINEER_INTERN,
  ROLE.SOFTWARE_ENGINEER,
  ROLE.SENIOR_SOFTWARE_ENGINEER,
]

const isSoftwareEngineer = (employee) => {
  return SOFTWARE_ENGINEER_ROLES.some((sweRole) => sweRole === employee.role)
}

const totalTaxesPaidBySoftwareEngineers = ALL_EMPLOYEES
  .filter(isSoftwareEngineer)
  .map(getEmployeePayroll)
  .map(employeePayrollWithDeductions)
  .map(({ taxesPaid }) => taxesPaid)
  .reduce(sumArray);

const percentOfTaxesPaidBySoftwareEngineers = (totalTaxesPaidBySoftwareEngineers / allPaidTaxes) * 100;

