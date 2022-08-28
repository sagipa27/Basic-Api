import {
    v4 as uuidv4
} from 'uuid';

export const createUser = (req, res) => {

    const user = req.body;

    users.push({
        ...user,
        id: uuidv4()
    });

    res.send(`user with name ${user.firstName} and age ${user.age} has been added to the data base`);
};

export const getUser = (req, res) => {
    console.log(users);
    res.send(users);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`user with id ${id} has been deleted from the data base`);
};

export const patchUser = (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;

    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated to the data base`);

};

export const getEsUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((users) => users.id === id);

    res.send(foundUser);
};