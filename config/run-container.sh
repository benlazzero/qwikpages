#!/bin/bash

echo "Starting nginx container..."
docker run -p 3030:3030 -d --name ngnix-rev1 nginx-proxy