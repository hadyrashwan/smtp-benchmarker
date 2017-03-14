# smtp-benchmarker
a simple app to benchmark  premium  customers smtp server for batch activations feature before connecting it to production

#### Therhold
each customer should be capable handling 200  different custom emails in maximum time of 6s

#### Setup
clone the project

```sh
$ git clone  https://github.com/hadyrashwan/smtp-benchmarker.git

```

install nodejs and npm from here https://nodejs.org/en/

install dependencies


```sh
$ npm install

```


#### Run it

change the paramters with the your  smtpTransport string
change the mailer to match your email

then

```sh
$ npm  start

```
#### Adanced options
for custom port , tls  etc refer to nodemailer documentation to set your string
https://nodemailer.com/smtp/
