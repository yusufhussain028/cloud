
const userType=(state=[],action) =>{
	if(action.type==="UPDATE")
	{
	return action.state;
	}
    if(action.type==="SORTBYFIST")
     {
     console.log('entered'+ state);
     return state.slice().sort(function(a, b) {
    var nameA = a.first_name.toLowerCase(),
        nameB = b.first_name.toLowerCase()
    if (nameA < nameB)
      return -1
    if (nameA > nameB)
      return 1
    return 0
  });
     }  
      if(action.type==="SORTBYLAST")
     {
     console.log('entered'+ state);
     return state.slice().sort(function(a, b) {
    var nameA = a.last_name.toLowerCase(),
        nameB = b.last_name.toLowerCase()
    if (nameA < nameB)
      return -1
    if (nameA > nameB)
      return 1
    return 0
  });
     } 


	else{
	return state;
	}
};


export default userType;