var myStr = "the cow jumped over the moon";
function longestWord(str){
    var splited = myStr.split(" ");
    console.log(splited[2].length + ", " + splited[2]);
}
longestWord();