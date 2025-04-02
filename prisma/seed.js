const prisma = require("../prisma");

const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const players = [
      {
        name: "Charlie",
        breed: "Golden Retriever",
        status: "field",
      },
      {
        name: "Luna",
        breed: "Alaskan Husky",
        status: "field",
      },
      {
        name: "Maximus",
        breed: "German Shepherd",
        status: "field",
      },
      {
        name: "Daisy",
        breed: "Cocker Spaniel",
        status: "field",
      },
      {
        name: "Rocky",
        breed: "Boxer",
        status: "field",
      },
      {
        name: "Bella",
        breed: "French Bulldog",
        status: "bench",
      },
      {
        name: "Toby",
        breed: "Beagle",
        status: "bench",
      },
      {
        name: "Milo",
        breed: "Dachshund",
        status: "bench",
      },
      {
        name: "Sadie",
        breed: "Australian Shepherd",
        status: "bench",
      },
      {
        name: "Cooper",
        breed: "Belgian Malinois",
        status: "bench",
      },
    ];
    await prisma.player.createMany({ data: players });
  };

  await createPlayers();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });