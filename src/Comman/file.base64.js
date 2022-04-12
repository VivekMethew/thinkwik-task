const fs = require('fs')
module.exports = {
    base64File: async (filen, dest, base64) => {
        return new Promise((resolve, reject) => {
            // let base64Data = base64.replace(/^data:image\/\D;base64,/, "")
            let minType = base64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
            let base64Data1 = base64.split(',')[1]
            let filename = `${filen}_${Date.now()}.${minType.split('/')[1]}`
            let destination = `src/${dest}`
            fs.writeFile(`${destination}/${filename}`, base64Data1, { encoding: 'base64' }, function (err) {
                if (err) {
                    reject(err)
                }
                resolve({
                    filename: filename,
                    filetype: minType,
                    url: `/${dest}/${filename}`
                })
            });
        })
    }
}