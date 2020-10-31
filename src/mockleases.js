export const mockLeases = [
  {
    id: 1,
    petsAllowed: null,
    petTypesAllowed: ["Dog"],
    allowRenewal: true,
    endDate: "2020-09-01",
    startDate: "2020-09-22",
    petCharge: null,
    lateFee: null,
    petFee: null,
    rentAmount: 1200,
    securityDepositAmount: 1200,
    tenantDuties: null,
    leaseTerm: "Fixed Term",
    numberOfUnits: 1,
    address: {
      street: "120 Fitzhugh Ave",
      city: "Grand Rapids",
      state: "MI",
      zip: "49506"
    },
    utilitiesIncluded: ["Trash", "Electricity", "Water"],
    appliancesIncluded: ["Refridgerator", "Stove"],
    amenitiesIncluded: ["Outdoor Space", "Parking"],
    isActive: true
  },
  {
    id: 2,
    petsAllowed: null,
    petTypesAllowed: null,
    allowRenewal: true,
    endDate: "2020-09-01",
    startDate: "2020-09-22",
    petCharge: null,
    lateFee: null,
    petFee: null,
    rentAmount: 1200,
    securityDepositAmount: 1200,
    tenantDuties: null,
    leaseTerm: "Monthly",
    numberOfUnits: 1,
    address: {
      street: "807 Cherokee Ave",
      city: "Grand Rapids",
      state: "MI",
      zip: "49506"
    },
    utilitiesIncluded: ["Trash", "Electricity", "Water"],
    appliancesIncluded: [
      "Refridgerator",
      "Dishwasher",
      "Stove"
    ],
    amenitiesIncluded: ["Outdoor Space", "Parking", "In-Unit Laundry"],
    isActive: false
  }
];
