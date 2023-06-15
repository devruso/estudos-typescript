// resultConversion é um literal type, ou seja, criado por nós, e não pelo typescript
// literal types are the types thjat are based on your core types (string, number, boolean) but then you have a specific value that is allowed for that type
function combine(n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text' ) {
    let result;
     if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
      result = +n1 + +n2;
    }else {
      result = n1.toString() + n2.toString();
    }
    // if(resultConversion === 'as-number') {
    //   return +result;
    // }else {
    //     return result.toString();
    // }
  }
  
  const combinedAges = combine(22, 15, 'as-number');
  console.log(combinedAges);
  
  const combinedNames = combine('Jamil', 'son', 'as-text');
  console.log(combinedNames);