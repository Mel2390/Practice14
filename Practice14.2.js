
// Find User by Name 

function findUserByUsername(users, username) {
  
  return users.find(user => user.username === username);
}





// Remove User
function removeUser(users, username) {
  
  const index = users.findIndex(user => user.username === username);
  
  if (index !== -1) {
      return users.splice(index, 1)[0];
  }
  
  return undefined;
}

