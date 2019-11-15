#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters"
    exit
fi

cat $1 | tr -d '"' | sed "s/, /:/g" > "${1/(Normalized)/cleared}"
rm $1
