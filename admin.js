const { kafka }  = require('./client');

async function init() {
    const admin = kafka.admin()
    console.log("Admin connecting...");
    admin.connect();
    console.log("Admin connection success...");

    console.log('Creating Topic [rider-updates]');
    admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
        },
    ],
    });
    console.log('Topic Created Successfully [rider-updates]');

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init();