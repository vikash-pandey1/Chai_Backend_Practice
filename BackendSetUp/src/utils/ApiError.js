class ApiError extends Error{
    constructor(
        statusCode,
        messsage = "something went wrong",
        errors = [],
        statck = ""
    ){
        super(messsage)
        this.statusCode = statusCode
        this.data = null
        this.message = messsage
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}