var FizzBuzz = ['Fizz', 'Buzz']
  for(var i = 1; i <=100; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
          console.log('Fizz');
      } else {
          if (i % 5 === 0 && i % 3 !== 0) {
              console.log('Buzz');
          } else {
              if (i % 3 === 0 && i % 5 === 0) {
                  console.log('FizzBuzz');
              } else {
                  console.log(i);
              }
          }
      }
  }
var worlds = ['milk', 'beer', 'beer', 'milk', 'milk']
var Good = ['milk']
var Bed = ['beer']
for(var i = 0; i < worlds.length; i++){
     if(Good.includes(worlds[i])){
        console.log(`${worlds[i]} in Good`)
        continue;
} else if(Bed.includes(worlds[i])){
        console.log(`${worlds[i]} in Bed`)
    }
}
