# DEPRECATED - this no longer works (since AWS Lambda upgraded from Node 0.10 to Node 4.3+)

See: https://github.com/Automattic/node-canvas/wiki/Installation---AWS-Lambda

# Node canvas AWS Lambda example

Example of using AWS Lambda with [node-canvas](https://github.com/Automattic/node-canvas). `node-canvas` has a dependency on [Cairo](http://cairographics.org/) which is a native library with other native library dependencies which aren't currently available on the current [AWS Lambda AMI (2015.09)](http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html).

An AWS blog post describes the static compilation process ([source](https://aws.amazon.com/blogs/compute/nodejs-packages-in-lambda/)):

> You’ll need to either ensure that the libraries and their transitive dependencies are statically compiled or use rpath-style linking; we’ll do it the static way in this post, and demonstrate use of rpath in a subsequent post. (Note that many, but not all, libraries can be statically linked this way.)

However, to get this working for node-canvas I used dynamic linking with `rpath`. I more or less followed the process outlined by [mankins](https://github.com/mankins) on this [this node-canvas GitHub issue](https://github.com/Automattic/node-canvas/issues/680)

## Files

[src](src/) contains the compiled shared object files and [index.js](src/index.js) which contains the the lambda function (`index.handler`).

[dist](dist/) is just the contents of [src](src/) compressed into a zip file which should be ready to upload to AWS Lambda.

