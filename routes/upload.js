/*
 * @Author: Sydney
 * @Date:   2017-02-28 15:10:15
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-03-19 13:16:01
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

router.get('/', checkLogin, function(req, res, next) {
	res.render('upload');
});
router.post('/', checkLogin, function(req, res, next) {
	try {
		if (!req.files.file1.name) {
			throw new Error('请选择文件');
		} else {
			req.flash('success', '上传成功！')
		}
	} catch (e) {
		req.flash('error', e.message)
		console.log(e);
	}


	res.redirect('/upload')
});
module.exports = router;