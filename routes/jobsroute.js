const express=require('express')
const jobRouter=express.Router();
const {getAllJobs,getJob,createJob,deleteJob,updateJob,getUser}=require('../controller/jobs')
jobRouter.route('/getuser').get(getUser)
jobRouter.route('/create').post(createJob);
jobRouter.route('/').get(getAllJobs);
jobRouter.route('/:id').get(getJob).post(deleteJob).patch(updateJob)

module.exports=jobRouter