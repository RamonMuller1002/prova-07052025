const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const myReadFile = (arquivo, res) => {
    fs.readFile(arquivo, 'utf-8', (err, data) => { //abrndo o arquivo database e lendo ele, em formato utf-8
        console.log(data)
        res.send(data)
    })
}

async function newLog(arquivo , name) {
    const date = new Date();
    const log = `${uuid} - ${date} - ${name}`;

    const allLogs = await readFile(arquivo);
    await writeFile(arquivo, allLogs + "\n" + log);
    return log;
}


function getLog(arquivo, id) {
    return new Promise((resolve, reject) => {
        myReadFile(arquivo).then(data => {
            let log = undefined;

            String(data).split('\n').forEach(line => {
                if (line.substring(0, id.length) !== id) return;
                log = line;
            })
            if (log) resolve(log);
            reject(new Error("No log found with specified ID"));
        }).catch(err => reject(err));
    })
}


module.exports = { myReadFile, getLog , newLog }












