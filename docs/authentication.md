---
id: authentication
title: Authentication
sidebar_label: Authentication
---

You can authenticate your API calls by including your secret key in the Authorization header of every request you make.

> Do ensure that you do not commit your secret API keys to git, or use them in your client-end code

<br>

## Sample Authorization header

```javascript
headers: {
    access_token: 377yuw992889ue990
}
```

Every API request made without authentication will fail with the status code of `401: Unauthorized User!`
