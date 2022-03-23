const  emailGenerator = (fullName) => {
  const emailIdentifier = fullName.toLowerCase().split(' ').join('_');
  return {
    fullName,
    email: `${emailIdentifier}`,}
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(emailGenerator));
