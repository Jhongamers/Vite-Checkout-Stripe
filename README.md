# Vite-Checkout-Stripe

this is project is a checkout of product,using api stripe where the costumer click to buy the product and redirect to the page of checkout where 
the costumer will enter the card data and finalize the purchase

## development

to start development, you need to clone the github project in a directory of your choice:

```shell
cd "directory of your choice"

git clone https://github.com/Jhongamers/Vite-Checkout-Stripe/new/master
```

### Install Project Dependencies

first let's install project dependecies :

```shell
Yarn install
```

this command will download all project dependencies and install in your project 


###  Environment Variables important

important configure your Environment Variables for your project, .env you can to configure your ``PUBLIC_KEY=your_key``  and ``SECRET_KEY=your_secret_key``
for you use Environment Variables you have use ````VITE_YOUR_VARIABLES````, you also have to configure your environment variables that you will use 
in the file vite-env.d.ts to you to use the same environment variable in your file .env
your file .env has to be in the root folder, to import .env you should have to use in your project import.meta.env.VITE_YOUR_VARIABLE


### Start project 
to start the project you should have to use 
````shell
Yarn dev
````

