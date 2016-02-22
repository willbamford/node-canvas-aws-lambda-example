# Node canvas AWS Lambda example

Example of using AWS Lambda with [Amazon API Gateway](https://aws.amazon.com/api-gateway/) to render to a [node-canvas](https://github.com/Automattic/node-canvas) and then upload to S3.

Native modules ([source](https://aws.amazon.com/blogs/compute/nodejs-packages-in-lambda/)):

> You’ll need to either ensure that the libraries and their transitive dependencies are statically compiled or use rpath-style linking; we’ll do it the static way in this post, and demonstrate use of rpath in a subsequent post. (Note that many, but not all, libraries can be statically linked this way.)

## Steps

Fire up an EC2 instance (`t2.nano` will do) with the appropriate AMI listed at http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html e.g. for EU (Ireland) search "Community API" for `ami-bff32ccc`.

SSH into the instance e.g.

```
sudo ssh -i your-key-pair.pem ec2-user@ec2-12-34-56-123.eu-west-1.compute.amazonaws.com
```

Install compatible Node.js (currently v0.10.36):

```
sudo -i

wget https://nodejs.org/dist/v0.10.36/node-v0.10.36-linux-x64.tar.gz

cd /usr/local
tar --strip-components 1 -xzf /home/ec2-user/node-v0.10.36-linux-x64.tar.gz
```

curl -0 https://nodejs.org/dist/v0.10.36/node-v0.10.36-linux-x64.tar.gz | tar -zx
```


```
sudo -i
curl --silent --location https://rpm.nodesource.com/setup_5.x | bash -
yum -y install nodejs
yum install gcc-c++ make
```

Dependencies:

```
sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel
```

## Links

* https://aws.amazon.com/blogs/compute/nodejs-packages-in-lambda/
* https://github.com/Automattic/node-canvas/issues/680
* https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
* http://stackoverflow.com/a/34019827/186965
