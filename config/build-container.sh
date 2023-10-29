#!/bin/bash

echo "Building nginx docker image..."
docker build -t nginx-proxy:latest .