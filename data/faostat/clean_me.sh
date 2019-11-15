#!/bin/bash
# Run the script and pass relative path to documnet
# Example: './clean_me.sh FAOSTAT_file_\(Normalized\).csv'
# The script will return cleared file named 'FAOSTAT_file_cleared.csv'
# WARNING: THE ORIGINAL DATAFILE WILL BE DELETED AFTER PROCESSING!!!

if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters, please pass the path to the file to be processed"
    exit
fi

cat $1 | tr -d '"' | sed "s/, /:/g" > "${1/(Normalized)/cleared}"
rm $1
