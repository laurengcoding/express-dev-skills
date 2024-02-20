const skills = [
    {id: 100, skill: 'HTML'},
    {id: 101, skill: 'CSS'},
    {id: 102, skill: 'Javascript'},
    {id: 103, skill: 'A browser game with lots of bugs'},
    {id: 104, skill: 'Big yapper'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skill;
}
