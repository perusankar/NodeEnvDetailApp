var Env = require('../models/env');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definition:
 *   Env:
 *     properties:
 *       name:
 *         type: string
 *       url:
 *         type: string
 *       desc:
 *         type: string
 *       date:
 *         type: string
 */

/**
 * @swagger
 * /api/envs:
 *   get:
 *     description: List all Env
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/Env'
 */
router.route('/envs')
	.get(function(req,res){
		Env.find(function(err,envs){
		if(err){
			return res.send(err);
		}
		res.json(envs);
	});
})
	.post(function(req,res){
        var env=new Env(req.body);
        env.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Env Added'});
        });
    });

router.route('/envs/:id').put(function(req,res){
	console.log(req.params.id);
	Env.findOne({_id : req.params.id},function(err,env){
		if(err){
			res.send(err);
		}

		for (prop in req.body){
			env[prop] = req.body[prop];
		}

		env.save(function(err){
			if(err){
				res.send(err);
			}	
			res.json({ message: 'Env Updated.'});
		});
	});
});

router.route('/envs/:id').get(function(req,res){
	Env.findOne({_id: req.params.id},function(err,env){
		if (err) res.send(err);
		res.json(env);
	});
});

router.route('/envs/:id').delete(function(req,res){
	Env.remove({_id: req.params.id},function(err,env){
		if (err){
			res.send(err);
		}
		res.json({message: 'Successfully Deleted.'});
	});
});

module.exports=router;
