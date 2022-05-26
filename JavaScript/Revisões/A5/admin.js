function getAdmins (map) {
    let admins = [];
    for ([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Guilherme', 'Admin');
usuarios.set('Letícia', 'Admin');

console.log(getAdmins(usuarios))

meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function uniqueValues (Array){
    const mySet = new Set(Array);

    return [...mySet];
}

console.log (uniqueValues(meuArray))