
// ACTION
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

function buyPhone() {
  return {
    type: "BUY_PHONE"
  }
}
function buyTablet() {
  return {
    type: "BUY_TABLET"
  }
}

function buyTv() {
  return {
    type: "BUY_TV"
  }
}


// REDUCER
// (preState, action) => newState

const initialStatePhone = {
  phones: 5,
  tablets: 10
}

const phoneReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
        // break
      }
      case BUY_TABLET:
        return {
          ...state,
          tablets: state.tablets - 1,
          // break
        }
        default: return state
      }
    }
    
    const initialStateTV = {
      tv: 12
    }

const tvReducer = (state = initialStateTV, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1,
        // break
      }
    default: return state
  }
}

//Conbine reducers

const rootReducer = Redux.combineReducers({
  phone: phoneReducer,
  tv: tvReducer
})

const store = Redux.createStore(rootReducer);
const availablePhones = document.getElementById("count");
const availableTablets = document.getElementById("count-tab");
const availableTv = document.getElementById("count-tv");

availablePhones.innerHTML = store.getState().phone.phones;
availableTablets.innerHTML = store.getState().phone.tablets;
availableTv.innerHTML = store.getState().tv.tv;

document.getElementById("buy-phone").addEventListener("click", function() {
  store.dispatch(buyPhone())
})

document.getElementById("buy-tablet").addEventListener("click", function() {
  store.dispatch(buyTablet())
})

document.getElementById("buy-tv").addEventListener("click", function() {
  store.dispatch(buyTv())
})

store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phone.phones;
  availableTablets.innerHTML = store.getState().phone.tablets;
  availableTv.innerHTML = store.getState().tv.tv;
})

console.log(store.getState());


