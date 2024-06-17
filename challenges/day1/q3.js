function abbrevName(name){
    let splitedName = name.split(' ');
    let letters = (splitedName[0][0] + "."+splitedName[1][0]).toUpperCase()
    return letters;
}