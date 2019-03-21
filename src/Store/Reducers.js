import * as actions from "./ActionTypes";
import data from "./data";

const initialStore = {
  modalState: false,
  modalData: {},
  questions: data,
  answered:[],
  submitted:false,
  attempted:0,
  correct:0,
  wrong:0,
  score:0,
  generated:false
};



const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case actions.MODAL_OPEN: {
      if (action.payload !== undefined) {
        return {
          ...state,
          modalData: state.questions[action.payload],
          modalState: !state.modalState
        };
      } else {
        return {
          ...state,
          modalState: !state.modalState
        };
      }
    }
    case actions.ANSWERED: {
        let i={};
        let id;
      let newObj = state.questions.map((data, index) => {
        if (data.id == action.payload.id) {
          data.myAnswer = action.payload.answer;
          data.answered = true;
          i={...data}
          id=index;
          return data;
        }
        return data;
      });
      newObj.splice(id, 1)

      return {
        ...state,
        questions: newObj,
        answered:[...state.answered, i]
      };
    }
    case actions.SUBMIT_TRIVIA:{
        return{
            ...state,
            submitted:true
        }
    }

    case actions.GENERATE_REPORT:{
        let count=0;
        let rightAnswer=state.answered.map(item=>{
            if(item.myAnswer==item.correct_answer){
                count++;
            }
        })
        console.log(count);
        return{
            ...state,
            attempted:state.answered.length,
            correct:count,
            wrong:state.answered.length-count,
            generated:true
        }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
