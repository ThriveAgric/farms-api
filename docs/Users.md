---
id: users
title: User Management Microservice
sidebar_label: User
---

## Staging Base URL

```javascript
"https://thrive-user-auth.herokuapp.com/thr/userms/v1";
```

## Sample User Schema

<!-- DOCUSAURUS_CODE_TABS -->

```javascript
{
       id: UUID,
       first_name: String,
       last_name: String,
       email: String,
       verifiedToken: String,
       role: Enum, (default ”user”)
       verified: Enum, (default ”not verified”)
       facebookID:String,
       facebookToken:String,
       googleID: String,
       googleToken: String,
       created_at: Date,
       updated_at: Date,

       middle_name: String,
       DOB: Date,
       gender: String,
       contactAddress: String,
       phone: String,

       bank_name: String,
       bank_account_name: String,
       bank_account_number: String,

}

```

<!-- END_DOCUSAURUS_CODE_TABS -->

## Test Endpoint

> **/test**

**Description:**  
This is used to test the availability of the entire microservice. Hit here if you think the server is down.

**Action:**  
Make a url request to endpoint.

**API response:**

```
{ "message" : "API is up" }
```

<br>

## Register User

> **POST**
> /users/onboarding

**Description:**
This endpoint is used to register new users.

**Parameters:**

```javascript
    Request body:
        -first_name
        -last_name
        -password
        -email
```

**API response:**

```javascript
 { status: "success", message:"user onboarding successful". On success, the client is sent a verification token.}
{status: "failure", message:"User with the given email already exists"}
```

<!-- ## Find All Users

> **GET**
> /user

**Description:**
This will query all users in the database.

**Parameters:**

```
Headers parameter :
headers:  {
    access_token: JWT <access token>
}
```

**API response:**

```
{status: “success”, result: [<Array of data from db>]}
{status: “error”, message: “<error message from db>”}
```

## User Login

> **POST**
> /login

**Description:**
This endpoint will enable users to log in.

**Parameters:**

```
 Request parameter:
    -password (user password)
    -email (user email)
```

**API response:**

```
{
    status: “success”,
    token: {<token containing user object >},
    email : “success”,
    role: “user” || “admin” || “disabled”,
    verified: “true” || ‘false’,
    expiresIn: ‘24h’
    message: “Welcome back <user firstname>”

}

{
    status: “failure”,
    message: “<error message returned>”
}


```

## Create User

> **POST**
> /register

**Description:**
This will enable creation of users into the database.

**Parameters:**

```
    Request parameter :
        -first_name (user first name)
        -last_name (user last name)
        -password (user password)
        -email (user email)

```

**API response:**

```
{
    status: “success”,
    token: {<token containing user object >},
    email: “success”,
    role: “user” || “admin” || “disabled”,
    verified: “true” || ‘false’,
    expiresIn: ‘1h’
    message:  ‘A link has been sent to <email> to verify your account. Note that you will not be allowed to make any transactions until you verify your account.’


}

{
    status: “failure”,
    message: “<error message from db>”
}


```

## Verify User

> **GET**
> /verify?token

**Description:**
Callback authenticated endpoint that will be used to verify user.

**Action:**
( Have a route on the client that handles a call to the following route:
`$CLIENTDOMAIN/sign/verify?token=${token}`
Sends user to the client when they click on verification link in their email.
The client should have a view listen for the query parameter of token on the above (`$CLIENTDOMAIN/sign/verify?token=${token}`) route, and then make a POST request to the server with the token as a query param to verify the user. If success you show the user a success message and redirect to login page, else tell them error token invalid or expired….show them link to generate new verification token)
PS: Look at (/NEW_VERIFY_TOKEN) endpoint below.

**Parameters:**

```
    Request parameter :
        -token (verification token)

```

**API response:**

```
  {status: ‘'Success', message: `Verification successful, continue surfing…”}

  {status: ‘failure’, message: ‘An error occurred during verification’}

```

## New Verification Token

> **POST**
> /new_verify_token

**Description:**
This endpoint generates a new verify token for a user and will send a mail to the user’s registered email with a link

**Parameters:**

```
    Request parameter :
        -email (user email)

```

**API response:**

```
    {status: ‘success’, message: “An Email has been sent to <user email> with further instructions” }

    {status: ‘failure’, message: ‘<Error message from server>’}

```

## Forgot password

> **POST**
> /forgot_pword

**Description:**
 This endpoint will cater for forgotten password and will send a mail to the user’s registered email with a reset link

**Parameters:**

```
    Request parameter :
        -email (user email)

```

**API response:**

```
    {status: ‘success’, message: “An Email has been sent to <user email> with further instructions” }

	{status: ‘failure’, message: ‘<Error message from server>’}

```

## Reset Password

**Description:**
Callback authenticated endpoint that will be used to replace existing password with new one.

**Action:**
(Have a route on the client that handle a call to the following route:
`${CLIENTDOMAIN}/sign/resetpassword?token=${token}`
reset password: `$CLIENTDOMAIN/sign/resetpassword?token=${token}`
Consider sending user to the client when they click on reset link in their email, the client should have a view listen for the query parameter of token on the above route, and then make a request to the server with the token along with the new password(from a form) to reset the user password.
If success you show the user a success message and a link to login, else tell them error).

**Parameters:**

```
    Request parameter :
        -token (user password reset token)
        -newPassword (user new password)
```

**API response:**

```
    {message: ‘Password has been reset’}
    {status: 400, message: ‘Password reset token is invalid or has expired’}
```

## Change User Password

> **POST**
> /user/change_pword

**Description:**
Endpoint used to change a user password from their dashboard.

**Parameters:**

```
    Request parameter :
        newPassword (user new password)
        oldPassword (user old password)

    Headers parameter :
        headers:  {
            access_token: JWT <access token>
        }

        This is a protected route and will require access_token as authorization

```

**API response:**

```
    {message: ‘Password change successful’}
    {status: ‘error’, message: ‘<error message returned>’}
```

## Check Email

> **POST**
> /check-email

**Description:**
Endpoint used to check availability of an email.

**Parameters:**

```
    Request parameter :
        -email (user email)
```

**API response:**

```
    {status: ‘success’, messageCode: ‘00’, message: ‘No user exists with that email ’}

    {status: ‘success’, messageCode: ‘01’, message: ‘A user exists with that email ’}

    {status: ‘failure’, message: ‘Invalid Input’}
```

## Find One User

> **GET**
> /user/find

**Description:**
This will query for a particular user in the database.

**Parameters:**

```
    Headers parameter :
            -headers:  {
                access_token: JWT <access token>
            }

```

**API response:**

```
        {status: “success”, data: {<JSON of farm created>}}
        {status: “error”, message: “<error message from db>”}
```

## Update User Details

> **PUT**
> /user/update

**Description:**
This endpoint will enable user details to be updated.

**Parameters:**

```
    Request parameter :
        -first_name (user first name)
        -last_name (user last name)
        -middle_name (user middle name)
        -contactAddress (user contact address)
        -phone (user phone number)
        -gender (user gender)
        -dob (user date of birth)

     Headers parameter :
            -headers:  {
                    access_token: JWT <access token>
                }


This is a protected route and will require access_token as authorization

```

**API response:**

```
        {status: ‘success’, data:<JSON of updated user returned>}

    	{status: ‘error’, message: ‘<error message returned>’}

```

## Update User Bank

> **PUT**
> /user/bank
> (this single route is used to create and update user banking information )

**Description:**
This endpoint will enable user details to be updated.

**Parameters:**

```
        Request parameter :
            -bank_account_number (user bank account number)
            -bank_account_name (user bank account name)
            -bank_name (user bank name)

        Headers parameter :
            -headers:  {
                access_token: JWT <access token>
            }

    This is a protected route and will require access_token as authorization

```

**API response:**

```
    {status: ‘success’, data:<JSON of updated user returned>}
    {status: ‘error’, message: ‘<error message returned>’}
```

## User Check Session Validity

> **GET**
> /auth/checkauth

**Description:**
This endpoint checks if a user session is still valid.

**Parameters:**

```
  Headers parameter :
        -headers:  { access_token: JWT <access token> }

```

**API response:**

```
    { status: “success”,  message: {“<session valid>”} }

	{status: “failure”, message: “<session not valid>”}

```

## Initiate Google Oauth2

> **GET**
> /auth/google

**Description:**
This endpoint starts logging user in via google oauth2.

**API response:**

```
 Success: On success a token is sent to {clientDomain/auth/{<token>}} as a token parameter from the server

 Error: handle error on client
```

## Initiate Facebook login

> **GET**
> /auth/facebook

**Description:**
This endpoint starts logging user in via facebook login.

**API response:**

```
 Success: On success a token is sent to {clientDomain/auth/{<token>}} as a token parameter from the server

 Error: handle error on client
``` -->
