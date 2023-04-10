
function logError(error,request,res,next){
  next(error);
}

// BAD REQUEST
function boomErrorHandler(err,req,res,next){
  if (err.isBoom){
    const { output } =err;
    res.json(output.payload)
  }
    next(err);
}
// npi que paso
function errorHandler(err,req,res,next){
  const codigo = err.status
  res.status(codigo || 500);
  res.send({"error":true,"messages":err.message ||"Internal server error ","codigoStatus":codigo})
  // res.send("juan")
}

module.exports = {logError,boomErrorHandler,errorHandler};
