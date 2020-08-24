const { exec } = require('child_process')

exec('git diff', (err, stdout, stderr) => {
    if (err) {
        console.log(stderr)
        return
    }
    const diff = stdout;
    console.log(diff)
    console.log(__dirname) //自身の場所を表示する
    const isIncludeConsoleLog = diff.includes('console.log')
    if (isIncludeConsoleLog) {
        console.error('console.logがあるよ!!!')
        console.log(diff.split('\n'))//これで改行ごとに区切れる
        return
    }
    console.log('console.logはないよ!!!')
    return
})

