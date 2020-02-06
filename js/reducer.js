let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

console.log(changeState(state, action))
console.log(changeState(state, action))
console.log(changeState(state, action))

function render(){
  document.body.textContent =  state.count
}

function dispatch(action){
  state = changeState(state, action)
  console.log(state)
  render()
}

dispatch(action)
dispatch(action)
dispatch(action)