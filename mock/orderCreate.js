module.exports = {
	api: '/user/order/save',
	response: function(req, res) {
		res.json({
		    "msg": "success",
		    "data": "",
		    "prefix": "http://127.0.0.1:6070/",
		    "res_code": 200
		});
	}
}