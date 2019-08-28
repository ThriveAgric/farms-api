---
id: transactions
title: Transactions
sidebar_label: Transactions
---

## Staging Base URL

```javascript
"https://thrive-virtual-wallet.herokuapp.com/thr/transaction/v1";
```

## Sample Transaction Schema

```javascript
{
    user: {
      id: String,
      name: String,
      email: {
        type: String,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }
    },
    transactions: [
      {
        project: {
          id: String,
          farm_units: Number,
          farm_name: String,
          farm_id: Number,
          farm_price: Number,
          farm_roi: Number,
          farm_duration: Number
        },
        returns_per_unit: Number,
        overall_returns: Number,
        payout_amount: Number,
        payout_date: { type: Date },

        order_number: Number,
        transactionType: {
          type: String

        },
        transactionRef: { type: String, unique: true },
        amount: Number,
        transactionId: String,
        paid_at: Date,
        initiated_at: { type: Date, default: Date.now },

        message: String,
        charged_amount: Number,
        originIP: String,
        currency: String,
        payment_gateway: String,

        gateway_customer_firstname: String,
        gateway_customer_lastname: String,
        gateway_customer_phone: String,
        gateway_customer_account_number: String,

        status: {
          type: String,
          enum: ['Completed', 'Processing', 'Cancelled', 'Failed']
        },

        authorization: {
          last4: String,
          card_type: String,
          bank: String
        },
        payout: {
          status: {
            type: String,
            enum: [
              'Processing',
              'Failed',
              'Rolled Over',
              'Completed',
              'Not Available'
            ],
            default: 'Not Available'
          },
          payout_date: { type: Date },
          payout_duration: { type: Number },

          rollOver_date: { type: Date },
          rollOver_Id: {
            type: settings.mongoose.Schema.Types.ObjectId,
            ref: 'Rollover'
          },
          rollOver_status: { type: Boolean, default: false },
          rollOver_amount: Number,
          rollOver_balance: Number
        }
      }
    ],
    meta: {
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date, default: Date.now }
    }
  }

```

## Test Endpoint

> **/test**

**Description:**  
This is used to test the availability of the entire microservice. Hit here if you think the server is down.

**Action:**  
Make a url request to endpoint.

**API response:**

```javascript
{ "message" : "API is up" }
```

<br>

## Register Transaction

> POST
> **/transactions/register**

**Description:**
This is used to save transactions made by Partner Businesses.

**Parameters:**

```
Request parameter:
    -email (user mail)
    -projectId (project Id)
    -amount
    -farmUnits
    -dateCustomerPaid
```

**API Response:**

```javascript
{
  status: "success", message:"Transaction was successful!"
}

{
    status: "failure", message:"User with the given email could not be found"
}

```
