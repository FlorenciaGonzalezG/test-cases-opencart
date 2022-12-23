class UtilitiesMethods {
   
    /**
     * Crear string aleatorio
     * @param {number} length 
     * @returns string
     */
    async generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

    /**
     * Extraer una parte de un string y volverlo un numero
     * @param {string} constant 
     * @param {string} parameter 
     * @param {number} index 
     * @returns number
     */
    async makeSplit(constant, parameter, index) {
        let result = Number(constant.split([parameter])[index]);
        return result;
    }

    /**
     * Extraer parte de un string
     * @param {string} constant 
     * @param {number} start 
     * @param {number} end 
     * @returns 
     */
    async makeSlice(constant, start, end) {
        let result = constant.slice(start,end);
        return result;
    }
}

export default new UtilitiesMethods();

