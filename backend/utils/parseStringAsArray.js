module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());

            //split corta a String toda vez que tiver uma vírgula
            //map percorre um array
            //trim retira espaçamentos antes e depois de uma String
        
};