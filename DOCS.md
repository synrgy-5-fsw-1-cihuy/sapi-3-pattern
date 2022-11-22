## POST /api/products/

Request Body

```json
{
  "name": "Nahida",
  "description": "lorem ipsum dolor sit amet jamet",
  "price": 10000
}
```

Response

```json
{
  "message": "OK",
  "data": {
    "id": 1,
    "name": "Nahida",
    "description": "lorem ipsum dolor sit amet jamet",
    "price": 10000,
    "createdAt": "2022-11-12T11:13:31.984Z",
    "updatedAt": "2022-11-12T11:13:31.984Z"
  }
}
```

## GET /api/products/

Response

```json
{
  "message": "OK",
  "data": [
    {
      "id": 1,
      "name": "Nahida",
      "description": "lorem ipsum dolor sit amet jamet",
      "price": 10000,
      "createdAt": "2022-11-12T11:13:31.984Z",
      "updatedAt": "2022-11-12T11:13:31.984Z"
    }
  ]
}
```

## GET /api/products/:id => 1

Response

```json
{
  "message": "OK",
  "data": {
    "id": 1,
    "name": "Nahida",
    "description": "lorem ipsum dolor sit amet jamet",
    "price": 10000,
    "createdAt": "2022-11-12T11:13:31.984Z",
    "updatedAt": "2022-11-12T11:13:31.984Z"
  }
}
```

## PUT /api/products/:id => 1

Request Body

```json
{
  "price": 20000
}
```

Response

```json
{
  "message": "OK"
}
```

## DELETE /api/products/:id => 1

Response

```json
{
  "message": "OK"
}
```
