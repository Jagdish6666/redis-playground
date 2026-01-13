const client = require('./client');

async function init() {

    await client.lpush('message',1)
    await client.lpush('message',2)
    await client.lpush('message',3)
    // await client.set('name:3', 'Hey from Node js')
    // await client.expire('name:3',10)
    // const result = await client.get('name:3');
    const result = await client.lpop('message');
    console.log("result->",result);
    
}
init();