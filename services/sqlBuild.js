module.exports = {
    objToSql : (obj) => {
    
        let sqlColumns = "";
        
        Object.keys(obj).forEach(key => {
            sqlColumns += key + " = '" + obj[key] + "',";
        })

        sqlColumns[sqlColumns.length - 2] = ""; 

        return sqlColumns;
    }
}