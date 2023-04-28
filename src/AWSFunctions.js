import * as AWS from 'aws-sdk'

AWS.config.region = 'us-west-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-1:5fe74a5b-b94b-4e33-af8b-7f84aa19d4a9',
});

const dbclient = new AWS.DynamoDB();

export const describeTable = (tableName) => {
    dbclient.describeTable({ TableName: tableName }, (err, data) => {
        console.log(err, data)
    })
}

export const scanTable = (tableName) => {
    return new Promise((resolve, reject) => {
        dbclient.scan({ TableName: tableName }, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data.Items);
          }
        });
      });
};

// export const getPopular = () => {
//     console.log("get popular started");
//     let params = {
//         TableName: "socio-media-posts",
//         IndexName: "Upvotes-index",
//         KeyConditionExpression : "Upvotes GE :UpvotesVal",
//         ExpressionAttributeValues : {
//             ':UpvotesVal' : {N: '0'}
//         }
//     };
//     return new Promise((resolve, reject) => {
//         dbclient.query( params, function(err, data) {
//             console.log("ger populat result")
//             console.log(err, data);
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data.Items);
//             }
//         });
//     });
// }

export const deleteTableItem = (tableName, key) => {
    dbclient.deleteItem({ TableName: tableName, Key: {"Username": {S: key}} }, (err, data) => {
        console.log(err, data)
    })
}

export const getTableItem = (tableName, key) => {
    dbclient.getItem({ TableName: tableName, Key: {"Username": {S: key}} }, (err, data) => {
        console.log(err, data)
    })
}

export const createUser = (username) => {
    dbclient.getItem({ TableName: "socio-media-users", Key: {"Username": {S: username}} }, (err, data) => {
            // console.log(data);
            if (data === null) {
                let Item = {
                        'Username' : {S: username},
                        'Enemies' : {N: '0'},
                        'Friends' : {N: '0'},
                        'Posts' : {N: '0'}
                    }
                putTableItem("socio-media-users", Item);
            }
        })
}

export const createPost = (username, content) => {
    console.log(username);
    console.log(content);

    dbclient.getItem({ TableName: "socio-media-users", Key: {"Username": {S: username}} }, (err, data) => {
        let prevPosts = 0;
        if (data !== null) {
            prevPosts = Number(data.Item.Posts.N);
            prevPosts += 1

            let updatedItem = {
                'Username': {S: username},
                'Enemies': {N: '0'},
                'Friends': {N: '0'},
                'Posts': {N: String(prevPosts)}
            }
            putTableItem("socio-media-users", updatedItem)
            let Item = {
                'Title': {S: username + '-' + prevPosts},
                'Content': {S: content},
                'DestroyCounter': {N: '0'},
                'Downvotes': {N: '0'},
                'Upvotes': {N: '0'}
            }
            putTableItem("socio-media-posts", Item);
        }
    })
}

export const putTableItem = (tableName, item) => {
    dbclient.putItem({ TableName: tableName, Item: item }, (err, data) => {
        console.log(err, data)
    })
}

export const updateTableItem = (tableName, key, itemName) => {

    // Upvotes and Downvotes
    if (tableName === "socio-media-posts") {
        dbclient.getItem({TableName: tableName, Key: {"Title": {S: key}}}, (err, data) => {

            if (itemName !== "Upvotes" && itemName !== "Downvotes" && itemName !== "DestroyCounter") {
                console.log("Could not update post");
                return;
            }
            if (itemName === "Upvotes") {
                data.Item.Upvotes = {N: (Number(data.Item.Upvotes.N) + 1).toString()};
            }
            if (itemName === "Downvotes") {
                data.Item.Downvotes = {N: (Number(data.Item.Downvotes.N) + 1).toString()};
            }
            if (itemName === "DestroyCounter") {
                data.Item.DestroyCounter = {N: (Number(data.Item.DestroyCounter.N) + 1).toString()};
            }

            dbclient.putItem({TableName: tableName, Item: data.Item}, (err, data) => {
                console.log(err, data)
            })
        })
    }
    else
    {
        dbclient.getItem({TableName: tableName, Key: {"Title": {S: key}}}, (err, data) => {

            if (itemName === "Enemies") {
                data.Item.Enemies = {N: (Number(data.Item.Enemies.N) + 1).toString()};
            }
            if (itemName === "Friends") {
                data.Item.Friends = {N: (Number(data.Item.Friends.N) + 1).toString()};
            }

            dbclient.putItem({TableName: tableName, Item: data.Item}, (err, data) => {
                console.log(err, data)
            })
        })
    }
}