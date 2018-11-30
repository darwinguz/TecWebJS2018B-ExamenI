import * as fileSytem from "fs";

export class AppUtil {
    static escribirArchivo(nombreArchivo, contenido): Promise<any> {
        // @ts-ignore
        return new Promise<any>(
            ((resolve, reject) => {
                fileSytem.writeFile(nombreArchivo, contenido, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido)
                    }
                })
            })
        );
    }

    static leerArchivo(nombreArchivo): Promise<any> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            fileSytem.readFile(nombreArchivo, 'utf-8', (error, contenidoLeidoArchivo) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(contenidoLeidoArchivo)
                }
            });
        });
    }

    static async getObjectFromJSON(pathArchivo) {
        try {
            return JSON.parse(await AppUtil.leerArchivo(pathArchivo))
        } catch (e) {
            console.log(e);
        }
    }
}