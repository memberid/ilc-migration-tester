var axios = require('axios');
const fs = require('fs');
const url = 'https://stagingmanggis-api.member.design/graphql'
const emailToMigrate = JSON.parse(fs.readFileSync('emails.json', 'utf8'))
const phoneCode = '62'
const phoneNumber = '81901088918'
const password = 'x123123x'

function migrate(email, cb) {
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

function rollback(cb) {
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
    migrate(email, migrateResp => {
        console.log(email, migrateResp)
        rollback(rollbackResp => {
            console.log(email, rollbackResp)
            index++
            if (emailToMigrate[index]) walkThroughEmails(emailToMigrate[index], cb)
            else cb()
        })
    })
}

walkThroughEmails(emailToMigrate[0], () => {
    console.log('done')
})