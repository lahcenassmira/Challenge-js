


function capitalizeLetters(string){
    const letters =  string.split(' ');
    const Newarr = [];
    for(i in letters){
        Newarr.push(letters[i].charAt(0).toUpperCase() + letters[i].slice(1));
    }

    return Newarr.join(' ');


}

console.log(capitalizeLetters("lahcen assmira //  assmira lahcen"));