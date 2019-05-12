var connection = require("../config/connection.js");

function

module.exports = {
    selectAll: function (table) {
        var queryString = `SELECT * FROM ?`

        connection.query(queryString, [table]function (err, data) {
            if (err) {
                throw err;
            }
        })
    }
}