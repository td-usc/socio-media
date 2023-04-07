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
    dbclient.scan({ TableName: tableName }, (err, data) => {
        console.log(err, data)
    })
}

export const deleteTableItem = (tableName, key) => {
    dbclient.deleteItem({ TableName: tableName, Key: key }, (err, data) => {
        console.log(err, data)
    })
}

export const getTableItem = (tableName, key) => {
    dbclient.getItem({ TableName: tableName, Key: key }, (err, data) => {
        console.log(err, data)
    })
}

export const putTableItem = (tableName, item) => {
    dbclient.putItem({ TableName: tableName, Item: item }, (err, data) => {
        console.log(err, data)
    })
}

export const updateTableItem = (tableName, key, itemName, itemAttr) => {

    // Upvotes and Downvotes
    dbclient.getItem({ TableName: tableName, Key: key }, (err, data) => {

        if(tableName === "socio-media-posts")
        {
            if (itemName !== "Upvotes" && itemName !== "Downvotes") 
            {
                console.log("Could not update post");
                return;
            }
            if (itemName === "Upvotes")
            {
                if (itemAttr === "+") data.Item.Upvotes = {N: (Number(data.Item.Upvotes.N) + 1).toString()};
                if (itemAttr === "-") data.Item.Upvotes = {N: (Number(data.Item.Upvotes.N) - 1).toString()};
            }
            if (itemName === "Downvotes")
            {
                if (itemAttr === "+") data.Item.Downvotes = {N: (Number(data.Item.Downvotes.N) + 1).toString()};
                if (itemAttr === "-") data.Item.Downvotes = {N: (Number(data.Item.Downvotes.N) - 1).toString()};
            }
            
        }

        dbclient.putItem({ TableName: tableName, Item: data.Item }, (err, data) => {
            console.log(err, data)
        })
    })
}