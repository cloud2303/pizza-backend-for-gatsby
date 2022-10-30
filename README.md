# Sanity Clean Content Studio

### prerequisites

```bash
npm install sanity-cli -g
```

### init

```bash
npm install
npm start
```

### deploy graphql endpoint


```bash

# default dataset name equals production

sanity graphql deploy deploy --dataset production
``` 

### use sample data

```bash
sanity dataset  import ./all-sample-data.gz production --replace
```
