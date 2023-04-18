function randomString(length) 
 {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) 
    {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  const people = [];
  for (let i = 0; i < 10; i++)
  {
    const person = {
      name: randomString(5),
      surname: randomString(8),
      age: Math.floor(Math.random() * 50) + 18,
      phone: `+48${Math.floor(Math.random() * 900000000) + 100000000}`
    };
    people.push(person);
  }
  console.log(people);
  
