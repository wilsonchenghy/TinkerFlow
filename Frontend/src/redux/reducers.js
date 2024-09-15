import { combineReducers } from "redux";
import instructionContentReducer from "./instructionContentReducer";
import instructionTitleReducer from "./instructionTitleReducer";
import schemeticReducer from "./schemeticReducer";

const rootReducer = combineReducers({
    instructionContent: instructionContentReducer,
    instructionTitle: instructionTitleReducer,
    schemetic: schemeticReducer
})

export default rootReducer;