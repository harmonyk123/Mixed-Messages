function generateRandomNumber(num){
    return (Math.floor(Math.random()*num))
}

const collection ={
    country: ['Dubai','UK','USA','Canada','South-Africa'],
    jobs: ['engineering','doctor','lawyer','developer','designer'],
    dessert: ['ice-cream','chocolate','biscuit','milkshake']
}

//STORE THE 'wisdom in an array
let personalWisdom = [];


//iterate over the object
for(let prop in collection) {
    let chooseFromObject = generateRandomNumber(collection[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'country':
        personalWisdom.push(`Your sign right now is a "${collection[prop][chooseFromObject]}".`)
        break
      case 'jobs':
        personalWisdom.push(`You are having: "${collection[prop][chooseFromObject]}".`)
        break
      case 'dessert':
        personalWisdom.push(`You should: "${collection[prop][chooseFromObject]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }

  const word = personalWisdom.join('\n')
  console.log(word)