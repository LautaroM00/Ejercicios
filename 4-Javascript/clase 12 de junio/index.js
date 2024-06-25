const URL_API = 'https://jsonplaceholder.typicode.com'

const obtenerUsuarios = async () =>{
    const response = await fetch(URL_API + '/users/1',{
        method: 'GET',
    })

    const data = await response.json()

    div.innerHTML = `       
        <h2>
        ${data.name}
        </h2>
        <span>
        ${data.phone}
        </span>
        <span>
        ${data.email}
        </span>`
}


obtenerUsuarios()


let div = document.getElementById('div')

