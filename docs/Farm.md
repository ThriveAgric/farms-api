---
id: farm
title: Farm Management Microservice
sidebar_label: Farm
---

## Staging Base URL

```javascript
"https://thrive-farm-tracking.herokuapp.com/thr/project/v1";
```

Farm management consists of 2 Object Schemas:

- Farm tracking
- Farm unique id generator

<br>
### Sample Farm Tracking Schema

```
    {

            project: {
            farm_id: Number,
            name:  String,
            imageURL: String,
            price: Number,
            instock: Boolean,
            returns: Number,
            duration: Number, (months in number)
            loi: Boolean,
            farm_location: String,
            farm_size: Number,
                farm_category:Enum:[‘plant’,’livestock’,’poultry’]
            number_in_stock: Number,
            description: String,
            insured: Boolean,
            farm_stage: Enum :[‘coming soon’,’open’,’closed’,’harvested’,’archived’]


            gpsCoordinate: {
                lon: Number,
                lat: Number
        },

        start_date: {type: Date},
        end_date : {type: Date},
        harvested_date: {type: Date},
        insurance_statement: String,
        fully_funded_date: {type: Date},
        },

        updates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Updates"
        }
            ],
            followers: [{
        id: String,
        name: String,
        email: String
            }],
            users: [{
        id: String,
        name: String,
        email: String
        }],

        meta: {
            created_at: {type: Date, default: Date.now},
            updated_at: {type: Date, default: Date.now},
        }

}

```

<br>
### Sample Farm Unique ID Generator Schema

```
{
   project_id: Number,
 unique_id: String,
 meta: {
   created_at: {type: Date, default: Date.now},
   updated_at: {type: Date, default: Date.now},
 }
}
```

<br>
### Test Endpoint

```
/test
```

**Description:**  
This is used to test the availability of the entire
microservice. Hit here if you think the server is down.

**Action:**  
Make a url request to endpoint.

<br>
**Sample API Response**

```
    {status: 200,  "message" : "Welcome to the farm api. I’m up" }
```

<br>

## View All Farms (UNAUTHORIZED USERS)

### Endpoint

```
/all
```

**Method Type**

> GET

**Description:**  
This will query all farms created

<br>
**Sample API Response**

```
    {status: ‘success’, data: [<Farms returned in an array>]}

	{status: ‘failure’, message: ‘error message from server’}

```

<br>
## View All Farms (AUTHORIZED USERS)

### Endpoint

```
/all_farms
```

<br>
**Method Type**

> GET

<br>
**Parameters:**

```
        Headers parameter :
                    headers:  {
                        access_token: JWT <access token>
                    }

```

**Description:**  
This will query all farms created indicating whether the user is following a farm or not

<br>
**Sample API Response**

```
    {status: ‘success’, data: [<Farms returned in an array>]}

	{status: ‘failure’, message: ‘error message from server’}


```

<br>
## View All Harvested Farms

### Endpoint

```
/harvested_farms
```

<br>
**Method Type**
> GET

**Description:**  
This will query all harvested farms

 <br>
**Sample API Response**

```
    {status: ‘success’, data: [<Farms returned in an array>]}

	{status: ‘failure’, message: ‘error message from server’}
```

<br>
## View All Archived Farms

### Endpoint

```
/archived_farms
```

<br>
**Method Type**
> GET

**Description:**  
This will query all archived farms

<br>
**Sample API Response**

```
    {status: ‘success’, data: [<Farms returned in an array>]}

	{status: ‘failure’, message: ‘error message from server’}

```

<br>
## View One Farm (UNAUTHORIZED USERS)

### Endpoint

```
/find?projectId=

```

<br>
**Method Type**
> GET

<br>
**Parameters:**

```
    Query parameter :
        projectId (id of the farm in db)

```

**Description:**  
This will query all farms created for a specific farm based on the id

<br>
**Sample API Response**

```
    {status: ‘success’, data: [<JSON Farm returned>]}

	{status: ‘failure’, message: ‘error message from server’}

```

<br>
## View One Farm (AUTHORIZED USERS)

### Endpoint

```
/find_farm?projectId=

```

<br>
**Method Type**
> GET

<br>
**Parameters:**

```
    Query parameter :
        projectId (id of the farm in db)



    Headers parameter :
            headers:  {
                access_token: JWT <access token>
            }

```

**Description:**  
This will query all farms created for a specific farm based on the id

<br>
**Sample API Response**

```
    {status: ‘success’, data: [<JSON Farm returned>]}

	{status: ‘failure’, message: ‘error message from server’}

```

<br>
## Follow a Farm

### Endpoint

```
/follow

```

<br>
**Method Type**
> POST

<br>
**Parameters:**

```
        In the header
            access_token: JWT <token>
            as body

		Request parameter:
            projectId (db id of the farm)

```

**Description:**  
This endpoint is to enable users subscribe/follow a farm

<br>
**Sample API Response**

```
    {status: ‘success’, message: ‘Successfully followed the farm’}

    {status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Unfollow a Farm

### Endpoint

```
/unfollow

```

<br>
**Method Type**
> POST

<br>
**Parameters:**

```
        In the header
            access_token: JWT <token>
            as body

		Request parameter:
            projectId (id of the farm in db)

```

**Description:**  
This endpoint is to enable users unsubscribe/unfollow a farm

<br>
**Sample API Response**

```
    {status: ‘success’, message: ‘Successfully unfollowed the farm’}

    {status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## FIND A USER FUNDED & FOLLOWED FARMS

### Endpoint

```
/user/funded_followed

```

<br>
**Method Type**
> GET

<br>
**Parameters:**

```
        Headers parameter :
            headers:  { access_token: JWT <access token> }

```

**Description:**
This endpoint fetches all farms a user has followed and funded

<br>
**Sample API Response**

```
     {
        status: ‘success’,
        data: { <[ARRAY of followed and funded farms] > }
    }

    {status: ‘failure’, message: ‘<error message from server>’}


```

<br>
## FIND A USER'S FUNDED FARMS

### Endpoint

```
/user/funded

```

<br>
**Method Type**
> GET

<br>
**Parameters:**

```
        Headers parameter :
            headers:  { access_token: JWT <access token> }

```

**Description:**
This endpoint fetches all farms a user has funded

<br>
**Sample API Response**

```
     {
        status: ‘success’,
        data: { <[ARRAY of funded farms] > }
    }

    {status: ‘failure’, message: ‘<error message from server>’}


```

<br>
## FIND A USER'S FOLLOWED FARMS

### Endpoint

```
/user/following

```

<br>
**Method Type**
> GET

<br>
**Parameters:**

```
        Headers parameter :
            headers:  { access_token: JWT <access token> }

```

**Description:**
This endpoint fetches all farms a user has followed

<br>
**Sample API Response**

```
     {
        status: ‘success’,
        data: { <[ARRAY of followed farms] > }
    }

    {status: ‘failure’, message: ‘<error message from server>’}


```
