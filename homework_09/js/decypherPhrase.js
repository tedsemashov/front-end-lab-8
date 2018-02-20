decypherPhrase = (map, str) => {
   var charactersMap = {};
   for (key in map) {
      charactersMap[map[key]] = key;
   }
   return cypherPhrase(charactersMap, str);
}