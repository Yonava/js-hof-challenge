export const SEX = {
  MALE: 'male',
  FEMALE: 'female'
}

export const PAY_TYPE = {
  HOURLY: 'hourly',
  SALARY: 'salary'
}

export const ROLE = {
  SOFTWARE_ENGINEER_INTERN: 'swe-intern',
  SOFTWARE_ENGINEER: 'swe',
  SENIOR_SOFTWARE_ENGINEER: 'senior-swe',
  PRODUCT_MANAGER: 'product-manager',
  DESIGNER: 'designer',
  QA_ENGINEER: 'qa-engineer',
  DEVOPS_ENGINEER: 'devops-engineer',
  HR_COORDINATOR: 'hr-coordinator',
  DATA_SCIENTIST: 'data-scientist',
  TECH_LEAD: 'tech-lead'
}

export const ALL_EMPLOYEES = [
  {
    name: 'Bill Richardson',
    role: ROLE.SOFTWARE_ENGINEER_INTERN,
    contact: { phone: '971-342-8879', email: 'bill.richardson@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 45 }
  },
  {
    name: 'Maria Santos',
    role: ROLE.SOFTWARE_ENGINEER,
    contact: { phone: '503-714-9982', email: 'maria.santos@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 115_000 }
  },
  {
    name: 'James Connor',
    role: ROLE.SENIOR_SOFTWARE_ENGINEER,
    contact: { phone: '415-329-6631', email: 'james.oconnor@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 150_000 }
  },
  {
    name: 'Ava Patel',
    role: ROLE.PRODUCT_MANAGER,
    contact: { phone: '206-902-7443', email: 'ava.patel@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 130_000 }
  },
  {
    name: 'Liam Nguyen',
    role: ROLE.DESIGNER,
    contact: { phone: '310-284-5521', email: 'liam.nguyen@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 60 }
  },
  {
    name: 'Chloe Kim',
    role: ROLE.QA_ENGINEER,
    contact: { phone: '720-663-9987', email: 'chloe.kim@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 95_000 }
  },
  {
    name: 'Ethan Brooks',
    role: ROLE.DEVOPS_ENGINEER,
    contact: { phone: '617-441-3822', email: 'ethan.brooks@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 125_000 }
  },
  {
    name: 'Samantha Lee',
    role: ROLE.HR_COORDINATOR,
    contact: { phone: '312-882-7745', email: 'samantha.lee@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 38 }
  },
  {
    name: 'Daniel Garcia',
    role: ROLE.SOFTWARE_ENGINEER,
    contact: { phone: '408-773-3322', email: 'daniel.garcia@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 110_000 }
  },
  {
    name: 'Emily Zhao',
    role: ROLE.DATA_SCIENTIST,
    contact: { phone: '213-884-9912', email: 'emily.zhao@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 135_000 }
  },
  {
    name: 'Noah Bennett',
    role: ROLE.TECH_LEAD,
    contact: { phone: '646-233-8841', email: 'noah.bennett@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 165_000 }
  },
  {
    name: 'Olivia Park',
    role: ROLE.SOFTWARE_ENGINEER_INTERN,
    contact: { phone: '702-991-7734', email: 'olivia.park@gmail.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 42 }
  },
  {
    name: 'Michael Turner',
    role: ROLE.QA_ENGINEER,
    contact: { phone: '425-663-2811', email: 'michael.turner@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 48 }
  },
  {
    name: 'Hannah Becker',
    role: ROLE.DESIGNER,
    contact: { phone: '212-398-1117', email: 'hannah.becker@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 102_000 }
  },
  {
    name: 'Caleb Ortiz',
    role: ROLE.DEVOPS_ENGINEER,
    contact: { phone: '971-330-8845', email: 'caleb.ortiz@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 118_000 }
  },
  {
    name: 'Sophia Reynolds',
    role: ROLE.PRODUCT_MANAGER,
    contact: { phone: '510-222-6633', email: 'sophia.reynolds@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 128_000 }
  },
  {
    name: 'Jacob Miller',
    role: ROLE.SENIOR_SOFTWARE_ENGINEER,
    contact: { phone: '818-301-8821', email: 'jacob.miller@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 155_000 }
  },
  {
    name: 'Isabella Flores',
    role: ROLE.HR_COORDINATOR,
    contact: { phone: '404-994-3388', email: 'isabella.flores@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.HOURLY, rate: 36 }
  },
  {
    name: 'Ryan Cooper',
    role: ROLE.SOFTWARE_ENGINEER,
    contact: { phone: '949-662-7733', email: 'ryan.cooper@company.com' },
    sex: SEX.MALE,
    pay: { type: PAY_TYPE.SALARY, rate: 120_000 }
  },
  {
    name: 'Grace Tan',
    role: ROLE.DATA_SCIENTIST,
    contact: { phone: '702-445-1123', email: 'grace.tan@company.com' },
    sex: SEX.FEMALE,
    pay: { type: PAY_TYPE.SALARY, rate: 140_000 }
  }
]
