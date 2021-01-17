import users from './users.js';
// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortByNumOfFriends = (userOne, userTwo) =>
    userOne['friends'].length - userTwo['friends'].length;
  return users.sort(sortByNumOfFriends);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
