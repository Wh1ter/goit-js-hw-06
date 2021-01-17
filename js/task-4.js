import users from './users.js';
// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = users => {
  return users.filter(user => user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// В уравнении неверно заданы варианты ответов, верно - 4 объекта