const { spawn } = require('child_process');

const data_to_pass_in = "Send this to python script.";

console.log("Data sent to python script:", data_to_pass_in);

const python_process = spawn('/bin/python3', ['./python.py', data_to_pass_in]);

//childPython.stdout.on('data', (data) => {
    //console.log('stdout: ${data}');
//});

//childPython.stderr.on('data', (data) => {
    //console.error('stderr: ${data}');
//});

//childPython.on('close', (code) => {
    //console.log('child process exited with code: ${code}');
//});

python_process.stdout.on("data", (data) => {
    console.log("Data received from python script:", data.toString());
});

