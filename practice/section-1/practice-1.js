'use strict';

function collectSameElements(collectionA, collectionB) {
  const array = [];
  for(var str;str<collectionA.length;str++){
    for(var b;b<collectionB.length;b++){
      if(collectionA[str]==collectionB[b]){
        array.push(collectionA[str]);
      }
    }
  }
  return array;
}
