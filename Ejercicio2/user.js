/*function getUsers(){
    console.log('prueba')
    console.log(fetch('https://randomuser.me/api/'))
}

getUsers()*/

//CALLBACKS

/*
function getUsersWithCallbacks(callbacks){
    fetch('https://randomuser.me/api/') //traducir a JSON
    .then(response => response.json())
    .then(data => {
        const results = data;
        callbacks(null, results)
    })

    .catch(error =>{
        callbacks(error, null)

    })
}

getUsersWithCallbacks((error, results)=>{
    if(error) console.error('Error al obtener datos', error)
    const name = document.getElementById('name');
    for(let user of results){
        name.innerText = user.name.first;
    }
})
*/

// Asincronia
// Esperar a que se ejecute por completo una instruccion, Sin obstruir
//el hilo de procesos.

//fromsa de manejar la asicronia

/**
 * Callbacks
 * Promises
 * Async/Await
 **/

/* const getUsers = ()=>{

} */

//PROMESAS
/*
const getUsersWitPromise = ()=>{
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const{results} = data;
            resolve(results)
        })
        .catch(error => console.error(error))
    })
}

getUsersWitPromise()
    .then(results => {
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const phone = document.getElementById('phone')
        for(const user of results){
            name.innerText = user.name.first
            surname.innerText = user.name.last;
            phone.innerText = user.phone
        }
    })

    .catch(error => console.error(error))
    */
  
const getUsersWitAsync = async ()=>{
    try{
        const response = await fetch('https://randomuser.me/api/?results=10')
        const {results} = await response.json()
        const users = document.getElementById('users')

        for(const user of results){
           users.innerHTML += `
           <tr id="${user.id.name}">
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.phone}</td>
           </tr>
           `
        }
        
    }catch(error){
        console.error(error)
    }
}

getUsersWitAsync()