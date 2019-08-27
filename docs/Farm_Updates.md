---
id: farmUpdates
title: Farm Updates
sidebar_label: Farm Updates
---

## Staging Base URL

```
https://thrive-farm-tracking.herokuapp.com/thr/project/v1/updates
```

<br>
### Sample Farm Updates Schema

```javascript
    {
        project: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Project"
            },
            farm_id: Number,
    },

    images: [{
        src: String,
        title: String,
        subtitle: String
    }],

    videos: [{
        url: String,
        info: String,
        description: String
    }],

        title: String,
        progress: Number,
        week_number: Number,
        activity: String,
        stage: Number,
        report: String,
        description: String,
        created_at: {type: Date, default: Date.now},
        meta: {
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now},
     }
    }

```

<br>
## Get all Farms Updates

## Endpoint

```javascript
/
```

**Method Type**

> GET

**Description:**  
This endpoint is to enable get all updates.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm updates>}}

	{status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Get all  Updates for a Farm

## Endpoint

```javascript
/find?projectId=`${projectId}`
```

**Method Type**

> GET

<br>
**Parameters:**

```javascript
    Request parameter:
        -projectId (id of the farm in db)
```

**Description:**  
This endpoint is to enable get all updates for a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm updates>}}

	{status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Get one Update of a Farm

## Endpoint

```javascript
/find_one_update?updateId=`${updateId}`
```

**Method Type**

> GET

<br>
**Parameters:**

```javascript
    Request parameter:
        -projectId (id of the farm in db)
```

**Description:**  
This endpoint is to enable get one update of a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm updates>}}

	{status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Create Update for a Farm

## Endpoint

```javascript
/create
```

**Method Type**

> POST

<br>
**Parameters:**

```javascript
        Request parameter:
            -projectId (id of the farm in db)
            -"title": "",
            -"progress": 100,
            -"week_number": 5,
            -"activity": "Planting of crop extensions",
            -"stage": 2,
            -"report": "",
            -"description": ""
         Headers parameter :
            - headers:  { access_token: JWT <access token> }
```

**Description:**  
This endpoint is to enable creating updates for a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm update created>}}

	{status: ‘failure’, message: ‘<error message from server>’}
```

<br>
## Update an Update for a Farm

## Endpoint

```javascript
/edit
```

**Method Type**

> PUT

<br>
**Parameters:**

```javascript
        Request parameter:
            -projectId (id of the farm in db)
            -"title": "",
            -"progress": 100,
            -"week_number": 5,
            -"activity": "Planting of crop extensions",
            -"stage": 2,
            -"report": "",
            -"description": ""
         Headers parameter :
            - headers:  { access_token: JWT <access token> }
```

**Description:**  
This endpoint is to enable creating updates for a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm updated>}}

	{status: ‘failure’, message: ‘<error message from server>’}
```

<br>
## Add/Update images for a farm Update

## Endpoint

```javascript
/edit/images
```

**Method Type**

> PUT

<br>
**Parameters:**

```javascript
        Request parameter:
            -updateId:  (id of the farm update in db)
            -src,
            -title,
            -subtitle
         Headers parameter :
            -headers:  { access_token: JWT <access token> }

```

<br>
**Description:**  
This endpoint is to enable updating an update images for a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm update updated>}}

	{status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Add/Update videos for a farm Update

## Endpoint

```javascript
/edit/images
```

**Method Type**

> PUT

<br>
**Parameters:**

```javascript
        Request parameter:
                -updateId:  (id of the farm update in db)
                -url,
                -info,
                -description
        Headers parameter :
                -headers:  { access_token: JWT <access token> }


```

<br>
**Description:**  
This endpoint is to enable updating an update videos for a farm.

<br>
**Sample API Response**

```javascript
    {status: ‘success’, data: {<JSON of farm update updated>}}

	{status: ‘failure’, message: ‘<error message from server>’}

```

<br>
## Delete Update for a Farm

## Endpoint

```
/delete
```

**Method Type**

> DELETE

<br>
**Parameters:**

```
        Request parameter:
            -projectId (id of the farm in db)
            -updateId:  (id of the farm update in db)
		Headers parameter :
            -headers:  { access_token: JWT <access token> }



```

<br>
**Description:**  
This endpoint is to enable deleting an update for a farm.

<br>
**Sample API Response**

```
    	{status: ‘success’, message: “Update deleted successfully”}

	    {status: ‘failure’, message: ‘<error message from server>’}

```
