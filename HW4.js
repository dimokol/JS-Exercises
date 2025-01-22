// a) Return the first 3 users with the most points
// b) Return the first 3 users with the most points in the United Kingdom

const users = [
    {
      name: "Maria",
      age: 24,
      country: "Greece",
      points: 100
    },
    {
      name: "Kostas",
      age: 50,
      country: "Italy",
      points: 2000
    },
    {
      name: "John",
      age: 30,
      country: "France",
      points: 20
    },
    {
      name: "James",
      age: 30,
      country: "United Kingdom",
      points: 1400
    },
    {
      name: "Jennifer",
      age: 28,
      country: "United Kingdom",
      points: 3000
    }
  ];
  
  
  
  const result = users.filter(user => user.country === "United Kingdom").sort((user1, user2) => user2.points - user1.points)?.slice(0, 3);
  
  console.log(result);