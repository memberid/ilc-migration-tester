var axios = require('axios');
const emailToMigrate = ['rizki@indosystem.com', 'anda02@gmail.com', 'eni20@gmail.com', 'henri@member.id', 'iyotesting1@gmail.com', 'eni07@gmail.com', 'eni25@gmail.com', 'eni32@gmail.com', 'iyotesting02@gmail.com', 'eni19@gmail.com', 'eni22@gmail.com', 'indo@gmail.com', 'eni31@gmail.com', 'eni33@gmail.com', 'eni11@gmail.com', 'duto@member.id', 'eni21@gmail.com', 'agnes.kumala@gmail.com.to', 'yanu@member.id', 'iyokitty8@gmail.com.to', 'kikifatma@mailinator.com.to', 'kirannita@mailinator.com.to', 'sekarayu@mailinator.com.to', 'niaandin@mailinator.com.to', 'riana@mailinator.com.to', 'noniernia@mailinator.com.to', 'ikajanah@mailinator.com.to', 'rizki.asdf@gmail.com.to', 'kispray.test@gmail.com.to', 'friskaevel1@gmail.com', 'friskaevel2@gmail.com', 'friskaevel3@gmail.com', 'friskaevel5@gmail.com', 'friskaevel6@gmail.com', 'friskaevel9@gmail.com', 'friskaevel13@gmail.com', 'mpongmbul2@gmail.com', 'mpongmbul3@gmail.com', 'mpongmbul4@gmail.com', 'mpongmbul5@gmail.com', 'mpongmbul6@gmail.com', 'mpongmbul8@gmail.com', 'mpongmbul9@gmail.com', 'mpongmbul10@gmail.com', 'mpongmbul13@gmail.com', 'mpongmbul14@gmail.com', 'iyoandaeni7@gmail.com', 'kaniaanggit@gmail.com', 'faniaulia@mailinator.com', 'sarahsisil@mailinator.com', 'mellakinan@mailinator.com', 'siskasari@mailinator.com', 'chachaani@mailinator.com', 'evelynrina@mailinator.com', 'sandrasafira@mailinator.com', 'anggunlenia@mailinator.com', 'sarianggi@mailinator.com', 'ginanisa@mailinator.com', 'nadiaayu@mailinator.com', 'raditfebri@gmail.com', 'aditputra@mailinator.com', 'wulandari@gmail.com', 'dimasyoga@mailinator.com', 'sandyyuda@mailinator.com', 'rimaaidah@mailinator.com', 'iimimroah@mailinator.com', 'lianshyn@mailinator.com', 'damardwi@mailinator.com', 'feninindi@mailinator.com', 'mayaheni@mailinator.com', 'auliananin@mailinator.com', 'radus@gamcil.com', 'rizki.fuad@gmail.com.cii', 'andaeni@mailinator.com', 'andini@gmail.com', 'mia@mailinator.com', 'andaeni@gmail.com', 'friskaevel@gmail.com', 'deo@member.id', 'jenia@mailinator.com', 'iyo@mailinator.com', 'lisa@mailinator.com', 'rano@mailinator.com', 'vindi@mailinator.com', 'kirani@mailinator.com', 'putri@mailinator.com', 'dinda.annisa@midtrans.com', 'aneza_anezi@yahoo.com', 'nida@mailinator.com', 'anindita@mailinator.com', 'alvin.wirawan@ymail.com.to', 'handoyoirawan@gmail.com.to', 'gavrilaevelyn4@gmail.com', 'larasanisa@mailinator.com', 'dianmila@mailinator.com', 'fenialisa@mailinator.com', 'cintaaliya@mailinator.com', 'lidia@mailinator.com', 'lili@mailinator.com', 'melin@mailinator.com', 'iyo.andaeni@indosystem.com', 'lisdianasawang@gmail.com', 'iyokitty92@gmail.com', 'iyokitty93@gmail.com', 'iyombul14@gmail.com', 'iyombul15@gmail.com', 'iyombul75@gmail.com', 'andaeiyo2@gmail.com', 'andaeiyo3@gmail.com', 'andaeiyo4@gmail.com', 'eniandae1@gmail.com', 'eniandae2@gmail.com', 'eniandae3@gmail.com', 'eniandae4@gmail.com', 'iyoevelyn2@gmail.com', 'iyoevelyn4@gmail.com', 'iyombul10@gmail.com', 'iyombul31@gmail.com', 'iyokitty50@gmail.com', 'eniandae21@gmail.com', 'eniandae22@gmail.com', 'eniandae23@gmail.com', 'eniandae24@gmail.com', 'iyoandaeni10@gmail.com', 'iyoandaeni12@gmail.com', 'iyoandaeni13@gmail.com', 'iyoandaeni15@gmail.com', 'evelynmpong1@gmail.com', 'evelynmpong2@gmail.com', 'mpongmbul20@gmail.com', 'mpongmbul21@gmail.com', 'iyokitty31@gmail.com', 'iyokitty32@gmail.com', 'iyokitty33@gmail.com', 'iyokitty34@gmail.com', 'Hana@mailinator.com', 'rizki@indosystem.com.to', 'rizki@member.com.id', 'rizki@member.com.it', 'rizki@member.co.id', 'rizki@member.co.idd', 'iyok11@gmail.com', 'iyoke13@gmail.com', 'iyoke15@gmail.com', 'iyoke17@gmail.com', 'iyotestingk26@gmail.com', 'iyo2@gmail.com', 'iyo3@gmail.com', 'iyo5@gmail.com', 'iyo6@gmail.com', 'iyo8@gmail.com', 'iyo11@gmail.com', 'iyo14@gmail.com', 'iyo15@gmail.com', 'tes4@gmail.com', 'tes5@gmail.com', 'tes10@gmail.com', 'tes11@gmail.com', 'tes12@gmail.com', 'tes13@gmail.com', 'tes15@gmail.com', 'cindyviolin26@gmail.com', 'andaempong@gmail.com', 'evelynmpong@gmail.com', 'test1@gmail.com', 'test51@gmail.com', 'test45@gmail.com', 'test46@gmail.com', 'test10@gmail.com', 'test11@gmail.com', 'test14@gmail.com', 'test15@gmail.com', 'test17@gmail.com', 'test19@gmail.com', 'test20@gmail.com', 'test30@gmail.com', 'test33@gmail.com', 'test34@gmail.com', 'test37@gmail.com', 'test38@gmail.com', 'test39@gmail.com', 'test41@gmail.com', 'test42@gmail.com', 'test43@gmail.com', 'test52@gmail.com', 'test55@gmail.com', 'test64@gmail.com', 'test47@gmail.com', 'test48@gmail.com', 'test49@gmail.com', 'test50@gmail.com', 'pekalipancirebon@gmail.com', '1test@gmail.com', '2test@gmail.com', '3test@gmail.com', '4test@gmail.com', 'iyo5test@gmail.com', 'iyo6test@gmail.com', 'iyo7test@gmail.com', 'iyo8test@gmail.com', 'iyo9test@gmail.com', 'iyo10test@gmail.com', 'iyo11test@gmail.com', 'iyo12test@gmail.com', 'iyo13test@gmail.com', 'iyo14test@gmail.com', 'iyo15test@gmail.com', 'iyo16test@gmail.com', 'iyo17test@gmail.com', 'iyo18test@gmail.com', 'iyo19test@gmail.com', 'iyo20test@gmail.com', 'iyo21test@mailinator.com', 'iyo22test@mailinator.com', 'mpongmbul@gmail.com', 'iyotestpp2@gmail.com', 'iyotestpp3@gmail.com', 'iyotestpp4@gmail.com', 'eniandae@gmail.com', 'iyo30test@mailinator.com', 'iyotestpp1@gmail.com', 'iyo01@gmail.com', 'iyo02@gmail.com', 'iyo03@gmail.com', 'iyo04@gmail.com', 'iyo06@gmail.com', 'iyo07@gmail.com', 'iyo08@gmail.com', 'iyo09@gmail.com', 'iyo010@gmail.com', 'iyo011@gmail.com', 'iyo012@gmail.com', 'iyo013@gmail.com', 'iyo014@gmail.com', 'iyo015@gmail.com', 'iyo016@gmail.com', 'iyo017@gmail.com', 'iyo018@gmail.com', 'iyo019@gmail.com', 'iyo020@gmail.com', 'iyo021@gmail.com', 'iyo022@gmail.com', 'iyoandaeni020304050607080@gmail.com', 'ibrdrahim@gmail.com', 'iyoandaenitesting010203040506070809010011012013014015@gmail.com', 'iyoandaeni12345678910111213141516171819202122232425@gmail.com', 'iyoandaeni1234567891011121@gmail.com', 'iyoandaenitestingtesting123456789101112131415@gmail.com', 'iyoandaenitestingtesting02123456789101112131415@gmail.com', 'eni01@gmail.com', 'eni02@gmail.com', 'eni03@gmail.com', 'eni04@gmail.com', 'eni05@gmail.com', 'eni06@gmail.com', 'eni08@gmail.com', 'eni09@gmail.com', 'eni10@gmail.com', 'iyoandaeni@gmail.com', 'eni13@gmail.com', 'eni14@gmail.com', 'eni15@gmail.com', 'eni16@gmail.com', 'eni17@gmail.com', 'iyotesting002@gmail.com', 'iyotesting81@gmail.com', 'eni34@gmail.com', 'iyotesting10@gmail.com', 'iyotesting14@gmail.com', 'iyotesting800@gmail.com', 'iyotesting590@gmail.com', 'iyotesting59@gmail.com', 'iyotesting06@gmail.com', 'iyotesting08@gmail.com', 'iyotesting03@gmail.com', 'iyotesting04@gmail.com', 'iamyour4gent_002@hotmail.com', 'iamyour4gent_001@hotmail.com', 'iyoandaeni1@gmail.com', 'iyo@member.id', 'iyotesting01@gmail.com', 'iyotesting003@gmail.com', 'rokitv.help@gmail.com', 'email.jendek@gmail.com', 'my.customer00001@gmail.com', 'my.customer00003@gmail.com', 'dutotrdj@gmail.com', 'iyotesting2@gmail.com', 'iyotesting3@gmail.com', 'iyotesting4@gmail.com', 'iyotesting5@gmail.com']

function sendReq(email, cb) {
    var index = emailToMigrate.indexOf(email)
    var phone = Math.floor(Math.random() * 100000000000)
    var data = JSON.stringify({
        query: `mutation {
        MemberMigrationLogin(
                email : "${email}",
                password : "x123123x",
                phoneCode : "62",
                phoneNumber : "${phone}"
            )
            {
                success
        }
    }`,
        variables: {}
    });

    var config = {
        method: 'post',
        url: 'https://stagingmanggis-api.member.design/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(email, JSON.stringify(response.data));
            index++
            if (emailToMigrate[index]) sendReq(emailToMigrate[index], cb)
            else cb()
        })
        .catch(function (error) {
            console.log(error);
        });
}

sendReq('rizki@indosystem.com', () => {
    console.log('done')
})