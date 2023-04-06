
function logError(error,request,res,next){
  next();
}

// BAD REQUEST
function boomErrorHandler(err,req,res,next){
  if (err.isBoom){
    const { output } =err;
    res.sendStatus(output.statusCode).json(output.payload)
  }
    next(err);
}
// npi que paso
function errorHandler(err,req,res,next){
  res.statusCode(err.status || 500);
  res.send({"error":true,"messages":err.messages||"Internal server error"})
}

module.exports = {logError,boomErrorHandler,errorHandler};
