import { ChatScreen } from "./ChatScreen/ChatScreen";
import messiFoto from '../../assets/messi.jpg'
import charlyFoto from '../../assets/charly.png'
import dukiFoto from '../../assets/duki.png'

const messiSticker = "../../../../assets/messiYsi.jpg"
const coscuSticker = "../../../../assets/polimardo.png"
const spidermanTriste = '../../../../assets/spidermanTriste.jpeg'

const contactos = [
    {
        nombre: 'Messi',
        thumbnail: messiFoto,
        ultima_conexion: 'ayer',
        id: 1,
        mensajes: [
            {
                author: 'Tú',
                text: 'Leo, como andas todo piola?',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '1'
            },
            {
                author: 'el',
                text: 'si bien taba jugando al fubol',
                estado: 'visto',
                day: 'hoy',
                hour: '13:16',
                id: '2'
            },
            {
                author: 'Tú',
                text: 'que baile pegaste no?',
                estado: 'visto',
                day: 'hoy',
                hour: '13:17',
                id: '3'
            },
            {
                author: 'el',
                text: "ma vale",
                estado: 'visto',
                day: 'hoy',
                hour: '13:18',
                id: '4'
            }, {
                author: 'Tú',
                text: `Ojo con q nos puede tocar mexico en 4tos...`,
                estado: 'visto',
                day: 'hoy',
                hour: '13:19',
                id: '5'
            },
            {
                author: 'el',
                text: 'y quien juega',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: '6'
            },
            {
                author: 'el',
                text: 'el chavo de 9 y ataja quico',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: '7'
            },
            {
                author: 'Tú',
                text: 'JAJAJA y don ramon',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: '8'
            },
            {
                author: 'Tú',
                text: 'de wing izquierdo',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: '9'
            },
            {
                author: 'el',
                text: messiSticker,
                estado: 'visto',
                day: 'hoy',
                hour: '13:22',
                id: '10'
            },
            {
                author: 'Tú',
                text: '127 millones y no pueden juntar',
                estado: 'visto',
                day: 'hoy',
                hour: '13:23',
                id: '11'
            },
            {
                author: 'Tú',
                text: '11 q pateen una pelota',
                estado: 'visto',
                day: 'hoy',
                hour: '13:23',
                id: '12'
            },
            {
                author: 'el',
                text: 'viste, una cosa de loko',
                estado: 'visto',
                day: 'hoy',
                hour: '13:27',
                id: '13'
            },
            {
                author: 'Tú',
                text: 'y se quieren sentar en nuestra mesa',
                estado: 'visto',
                day: 'hoy',
                hour: '13:27',
                id: '14'
            },
            {
                author: 'Tú',
                text: 'mamadera que moral...',
                estado: 'visto',
                day: 'hoy',
                hour: '13:28',
                id: '15'
            }
        ]
    },
    {
        nombre: 'Charly',
        id: 2,
        thumbnail: charlyFoto,
        ultima_conexion: 'ayer',
        mensajes: [
            {
                author: 'Tú',
                text: 'como andas GENIO',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '1'
            },
            {
                author: 'Charly',
                text: 'shut up bitch, say no more...',
                estado: 'visto',
                day: 'hoy',
                hour: '16:23',
                id: '2'
            },
            {
                author: 'Tú',
                text: spidermanTriste,
                estado: 'visto',
                day: 'hoy',
                hour: '16:25',
                id: '3'
            },
        ]
    },
    {
        nombre: 'Duki',
        id: 3,
        thumbnail: dukiFoto,
        ultima_conexion: 'ayer',
        mensajes: [
            {
                author: 'Tú',
                text: 'PESUTIII',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '1'
            },
            {
                author: 'Tú',
                text: 'PESUUUUTI LE DIJO',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '2'
            },
            {
                author: 'Duki',
                text: 'wachin como conseguiste mi num',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '3'
            },    
            {
                author: 'Tú',
                text: 'NEAAAAAAAAA',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: '4'
            },    
            {
                author: 'Tú',
                text: coscuSticker,
                estado: 'visto',
                day: 'hoy',
                hour: '13:16',
                id: '5'
            },
            {
                author: 'Duki',
                text: 'WACHO CERRÁ EL *RTO',
                estado: 'visto',
                day: 'hoy',
                hour: '13:16',
                id: '6'
            },        
            {
                author: 'Tú',
                text: 'POLIMARDO, BUENARDÓPOLIS',
                estado: 'visto',
                day: 'hoy',
                hour: '13:16',
                id: '7'
            },        
            {
                author: 'Tú',
                text: `BBRRREOOOOOOOO`,
                estado: 'visto',
                day: 'hoy',
                hour: '13:17',
                id: '8'
            }
        ]
    }
]

const setearLS = () => { //LS: localStorage
    let valorDeKey = localStorage.getItem('contactos')

    if(valorDeKey === null){
        let contactos_string = JSON.stringify(contactos)

        localStorage.setItem('contactos', contactos_string)
    }
}

const traerContactosLS = () => { //LS: localStorage
    setearLS()

    let contactos_string = localStorage.getItem('contactos')

    let contactos_objeto = JSON.parse(contactos_string)

    return contactos_objeto
}

const guardarMensajeLS = (id, nuevoMensaje) => {

    const contactosLS = traerContactosLS()

    contactosLS[id].mensajes.push(nuevoMensaje)

    let contactosLS_string = JSON.stringify(contactosLS)

    localStorage.setItem('contactos', contactosLS_string)
}

export { ChatScreen, traerContactosLS, guardarMensajeLS, contactos }