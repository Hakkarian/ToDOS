const fn = () => {
    console.log('start')
    return Promise.resolve('missing value')
}

fn().then(data => {
    console.log('1st then')
    return data
}).then(item => {
    console.log('2nd then')
    return item
}).then(text => {
    console.log('3rd then', text)
    return text
}).finally(console.log('we did it'))