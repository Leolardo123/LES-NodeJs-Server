module.exports = {
    objToSql : (obj) => {
    
        let sqlColumns = "";
        let sqlValues = ""
        
        Object.keys(obj).forEach(key => {
            if(key != obj.length) {
                sqlColumns += key + ",";
                sqlValues += "'"+obj[key]+"' ,";
            } else {
                sqlColumns += key;
                sqlValues += obj[key];
            }
            
        })

        sqlColumns = sqlColumns.substring(0, sqlColumns.length - 1);
        sqlValues = sqlValues.substring(0, sqlValues.length - 1);

        sqlParams = {
            cols: sqlColumns,
            values: sqlValues
        }

        return sqlParams;
    }
}

