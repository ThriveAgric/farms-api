---
id: errors
title: Errors
sidebar_label: Errors
---

Thrive Agric's Farm API is RESTful, this means it uses conventional HTTP response codes to indicate
the success or failure of requests.

### HTTP Status Codes

> 200, 300

### Meaning:

`This means the request made was successful and the intended action was carried out.`

<br>
> 400

### Meaning:

`A validation or client side error occurred and the request was not fulfilled.`

<br>
> 401

### Meaning:

`The request was not authorized. This can be triggered by passing an invalid secret key in the authorization header or the lack of one.`

<br>

> 404

### Meaning:

`Request could not be fulfilled as the request resource does not exist.`

<br>

> 500, 501, 502, 503, 504

### Meaning:

`Request could not be fulfilled due to an internal error on Thrive Agric's end. This shouldn't happen so please report as soon as you encounter this error`

<br>
