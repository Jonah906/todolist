exports.getDate = function (){

    const today = new Date();
    // console.log(today);
    const options = {
      weekday:"long",
      day:"numeric",
      month:"long"
    }
    
    return today.toLocaleDateString("en-US",options);   
};

exports.getDay = function (){

    const today = new Date();
    // console.log(today);
    const options = {
      weekday:"long"
    //   day:"numeric",
    //   month:"long"
    }
    
   return today.toLocaleDateString("en-US",options);   
};

// console.log(exports);
