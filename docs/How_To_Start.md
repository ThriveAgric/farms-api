---
id: how-to-start
title: How to Start
---

It is quite easy to work with Thrive Agric's Farm API. Just sign up to get your API key and then call any of the APIs you need.
And remember to use your API key in every API call.

## How to start in 2 simple steps

**1. [Sign up][thrive-agric] and get an API key on your account page.**  
Once you're registered, we will send you a welcome email that contains your API key and additional information on how to get started with our APIs. Within a couple of hours, it will be activated and ready to use.

**2. Start using API for free.**
Find the complete description of API calls with a list of parameters and examples of responses in [API documentation][api].
Please, remember to use your API key in each API call.

[thrive-agric]: https://www.thriveagric.com/sign/signup
[api]: http://localhost:3000/docs/farm

## Example of using API key in API call

**Description:**
Please, use your API key in each API call.

We do not process API requests without the API key.

**API call:**

```
https://thrive-farm-tracking.herokuapp.com/thr/project/v1/test
```

**Parameters:**

```
const APIKEY = {APIKEY} //your unique API key
Example of API call:
[https://thrive-farm-tracking.herokuapp.com/thr/project/v1/test]
```
