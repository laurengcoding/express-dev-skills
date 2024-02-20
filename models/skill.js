const skills = [
    {id: 100, skill: 'HTML', thoughts: 'I just love writing tags so much! Tags, tags, tags!'},
    {id: 101, skill: 'CSS', thoughts: 'Love to curate a cute vibe through CSS! Important to curate a cute vibe. The vibe here? Kind of yuck and very tired'},
    {id: 102, skill: 'Javascript', thoughts: 'Do I love it? Do I hate it? Very hard to say.'},
    {id: 103, skill: 'A browser game with lots of bugs', thoughts: 'Yummy yummy bugs mmmmmmm soooooo delicious!!!'},
    {id: 104, skill: 'Big yapper', thoughts: 'Nothing but yap yap yap code code code yap yap yap yap ya-'}
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
    return skills;
}
