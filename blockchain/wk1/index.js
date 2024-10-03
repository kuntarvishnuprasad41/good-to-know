const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = 'Vishnuprasad' + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        console.log({ input: inputStr, hash: hash });

        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('0000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);