const db = {
    'user': [
        { id: '1', name: 'Carlos' },
    ]
}

const list = async (table) => {
    return db[table]
}
const get = async (table, id) => {
    let collectionDB = await list(table)
    return collectionDB.filter(item => item.id === id)[0] || null
}
const upsert = async (table, data) => {
    db[collectionDB].push(data)
}
const remove = async (table, id) => {
    return true
}


module.exports = {
    list,
    get,
    upsert,
    remove
}