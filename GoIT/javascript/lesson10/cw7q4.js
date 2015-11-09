/*Complete The Pattern #10 - Parallelogram
 You have to write a function pattern which returns the following Pattern(
 See Examples) upto n rows, where n is parameter.
 Rules/Note:
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-?,100]
 Examples:
 pattern(5):
     12345
    12345
   12345
  12345
 12345
 */

console.log(pattern(15));
function pattern(n){
    var output='';
    if(n > 0) {
        var lines = [];
        var line = Array(n).join(' ');

        for (var i = 1; i <= n; i++) {
            line += (i % 10);
        }

        lines.push(line);
        for (i = 1; i < n; i++) {
            lines.push(lines[i - 1].substring(1) + ' ');
        }

        output = lines.join('\n');
    }
    return output;
}
