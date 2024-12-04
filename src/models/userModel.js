const users = []; // Database sederhana menggunakan array

module.exports = {
    findUserByUsername: (username) => users.find(user => user.username === username),
    addUser: (user) => users.push(user),
    users
};
