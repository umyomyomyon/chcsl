#!bin/bash

res=`git diff`

node ckcsl.js ${res}
