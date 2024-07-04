import { ChatScreen } from "./ChatScreen/ChatScreen";
import messiFoto from '../../assets/messi.jpg'
import charlyFoto from '../../assets/charly.png'

const MOOK_MENSAJES = [
    {
        author: 'yo',
        text: 'Leo, como andas todo piola?',
        estado: 'visto',
        day: 'hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'pepe',
        text: 'si bien taba jugando al fubol',
        estado: 'visto',
        day: 'hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'yo',
        text: 'que baile pegaste no?',
        estado: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '3'
    },
    {
        author: 'pepe',
        text: "ma vale",
        estado: 'visto',
        day: 'hoy',
        hour: '13:18',
        id: '4'
    }, {
        author: 'yo',
        text: `Ojo con q nos puede tocar mexico en 4tos...`,
        estado: 'visto',
        day: 'hoy',
        hour: '13:19',
        id: '5'
    },
    {
        author: 'pepe',
        text: 'y quien juega',
        estado: 'visto',
        day: 'hoy',
        hour: '13:20',
        id: '6'
    },
    {
        author: 'pepe',
        text: 'el chavo de 9 y ataja quico',
        estado: 'visto',
        day: 'hoy',
        hour: '13:20',
        id: '7'
    },
    {
        author: 'yo',
        text: 'JAJAJA y don ramon',
        estado: 'visto',
        day: 'hoy',
        hour: '13:20',
        id: '8'
    },
    {
        author: 'yo',
        text: 'de wing izquierdo',
        estado: 'visto',
        day: 'hoy',
        hour: '13:20',
        id: '9'
    },
    {
        author: 'pepe',
        text: "../../../../assets/messiYsi.jpg",
        estado: 'visto',
        day: 'hoy',
        hour: '13:22',
        id: '10'
    },
    {
        author: 'yo',
        text: '127 millones y no pueden juntar',
        estado: 'visto',
        day: 'hoy',
        hour: '13:23',
        id: '11'
    },
    {
        author: 'yo',
        text: '11 q pateen una pelota',
        estado: 'visto',
        day: 'hoy',
        hour: '13:23',
        id: '12'
    },
    {
        author: 'pepe',
        text: 'viste, una cosa de loko',
        estado: 'visto',
        day: 'hoy',
        hour: '13:27',
        id: '13'
    },
    {
        author: 'yo',
        text: 'y se quieren sentar en nuestra mesa',
        estado: 'visto',
        day: 'hoy',
        hour: '13:27',
        id: '14'
    },
    {
        author: 'yo',
        text: 'mamadera que moral...',
        estado: 'visto',
        day: 'hoy',
        hour: '13:28',
        id: '15'
    }
]

const contactos = [
    {
        nombre: 'Messi',
        thumbnail: messiFoto,
        ultima_conexion: 'ayer',
        id: 1,
        mensajes: [
            {
                author: 'yo' | 'cualquier nombre',
                text: 'texto de mensaje',
                estado: 'visto' | 'entregado' | 'no entregado',
                day: 'hoy' | 'ayer' | '23/12/2024',
                hour: '13:15',
                id: 'valor_id'
            },
        ]
    },
    {
        nombre: 'Charly',
        id: 2,
        thumbnail: charlyFoto,
        ultima_conexion: 'ayer',
        mensajes: [
            {
                author: 'yo' | 'cualquier nombre',
                text: 'texto de mensaje',
                estado: 'visto' | 'entregado' | 'no entregado',
                day: 'hoy' | 'ayer' | '23/12/2024',
                hour: '13:15',
                id: 'valor_id'
            }
        ]
    }
]

export { ChatScreen, MOOK_MENSAJES, contactos }