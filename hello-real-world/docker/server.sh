#!/usr/bin/env bash

while { echo -en "HTTP/1.1 200 OK\r\n\r\nREAL WORLD"; } | nc -q0 -l -p "${PORT}"; do
    echo -n "Response sent."
done
