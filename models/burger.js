var orm = require("../config/orm.js");

var burger = {
    all: function (data) {
        orm.all("burgers", function (res) {
            data(res);
        });
    },
    create: function (cols, vals, data) {
        orm.create("burgers", cols, vals, function (res) {
            data(res);
        });
    },
    update: function (objColVals, condition, data) {
        orm.update("burgers", objColVals, condition, function (res) {
            data(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            data(res);
        });
    }
};

module.exports = burger;