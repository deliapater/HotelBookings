use games_hub;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Cleyra Uzcategui",
    email: "cleyra@email.com",
    checked_in: {
      yes: true,
      no: false
    }
  },

  {
    name: "Paola Guerra",
    email: "paola@email.com",
    checked_in: {
      yes: true,
      no: false
    }
  },

  {
    name: "Maria Rodriguez",
    email: "maria@email.com",
    checked_in: {
      yes: false,
      no: true
    }
  },

  {
    name: "Pascaline Martin",
    email: "pascaline@email.com",
    checked_in: {
      yes: false,
      no: true
    }

  }
]);
