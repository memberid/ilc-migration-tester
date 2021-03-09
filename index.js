var axios = require('axios');
const fs = require('fs');
const url = 'https://stagingmanggis-api.member.design/graphql'
var emailToMigrate = JSON.parse(fs.readFileSync('emails.json', 'utf8'))
emailToMigrate.reverse()
const phoneCode = '62'
const password = 'x123123x'

function migrate(email, phoneNumber, cb) {
    var data = JSON.stringify({
        query: `mutation {
        MemberMigrationLogin(
                email : "${email}",
                password : "${password}",
                phoneCode : "${phoneCode}",
                phoneNumber : "${phoneNumber}"
            )
            {
                success
        }
    }`,
        variables: {}
    });
    sendRequest(data, cb)
}

function rollback(phoneNumber, cb) {
    var data = JSON.stringify({
        query: `mutation {
        deletePhoneNumber(
            phoneCode: "${phoneCode}",
            phoneNumber: "${phoneNumber}"){
                success
        }
    }`,
        variables: {}
    });
    sendRequest(data, cb)
}

function sendRequest(data, cb) {
    var config = {
        method: 'post',
        url,
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };

    axios(config)
        .then(function (response) {
            cb(JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });
}

function walkThroughEmails(email, cb) {
    var index = emailToMigrate.indexOf(email)
    var phoneNumber = Math.floor(Math.random() * (99999999999 - 00000000001 + 1) + 00000000001)
    migrate(email, phoneNumber, migrateResp => {
        console.log(email, phoneNumber, migrateResp)
        rollback(phoneNumber, rollbackResp => {
            console.log(email, phoneNumber, rollbackResp)
            index++
            if (emailToMigrate[index]) walkThroughEmails(emailToMigrate[index], cb)
            else cb()
        })
    })
}

walkThroughEmails(emailToMigrate[0], () => {
    console.log('done')
})