import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Conectamos a la base de datos
        this.dbConnection();

        // Definimos los Middlewares
        this.middlewares();

        // Definir mis rutas
        this.routes();
    }

    // Conectar base de datos
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
            

        } catch (error: any) {
            throw new Error( error );
        }
    }

    // Son funciones que se van a ejecutar antes de que pasen nuestras rutas
    middlewares() {
        
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;