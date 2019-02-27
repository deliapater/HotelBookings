use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Cleyra Uzcategui",
    email: "cleyra@email.com",
    checked_in: true
  },

  {
    name: "Paola Guerra",
    email: "paola@email.com",
    checked_in: true

  },

  {
    name: "Maria Rodriguez",
    email: "maria@email.com",
    checked_in: false
  },

  {
    name: "Pascaline Martin",
    email: "pascaline@email.com",
    checked_in: false

  }
]);
