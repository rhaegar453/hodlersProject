import * as actions from './ActionTypes';


export const modalOpen=(index)=>{
    return{
        type:actions.MODAL_OPEN,
        payload:index
    }
}




export const answerQuestion=(data)=>{
    return{
        type:actions.ANSWERED,
        payload:data
    }
}

export const submitTrivia=()=>{
    return{
        type:actions.SUBMIT_TRIVIA
    }
}

export const generateReport=()=>{
    return{
        type:actions.GENERATE_REPORT
    }
}


