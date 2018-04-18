const SCHEMA_NAME = 'Cliente';

// importar Realm, com schema e tals
import realmDB from '../../../schemas/schemas';

export function save(newCliente) {
    // pegar current id pq realm não tem autoincrement
    newCliente.id = findMaxId();

    realmDB.write(() => {
        const cliente = realmDB.create(SCHEMA_NAME, newCliente);
    });
}

export function update(cliente) {
    realmDB.write(() => {
        console.log('ON UPDATE');
        console.log(cliente);
        realm.create(SCHEMA_NAME, cliente, true);
    });
}

export function remove(cliente) {
    console.log('ON DELETE');
    console.log(cliente);
    realmDB.delete(cliente);
}

export function findAll() {
    let query = realmDB.objects(SCHEMA_NAME);
    let arrayClientes = Array.from(query);

    return arrayClientes;
}

export function findById(id) {
    
}

export function findMaxId() {
    let lastId = realmDB.objects(SCHEMA_NAME).max('id');
    let nextId = (lastId == null) ? 1 : lastId + 1;

    return nextId;
}

export function deleteAll() {
    console.log('ON DELETE ALL');
    realmDB.write(() => {
        let allClientes = realmDB.objects(SCHEMA_NAME);
        realmDB.delete(allClientes); // delete all clientes
    });
}