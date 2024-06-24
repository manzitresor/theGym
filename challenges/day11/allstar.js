function strCount(str, letter){  
  return str.split('').filter(string => letter.includes(string)).length
}