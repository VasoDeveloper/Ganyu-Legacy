#!bin/bash
XXX='\033[1;40m'
GREEN='\033[1;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
PURPLE='\033[0;35m'
while : 
do
printf "${CYAN}︎GANYU 3.1.0 CONECTANDO\n"

node GANYU-CONNECT.js sim

printf "${XXX}- REINICIANDO NOVAMENTE\n"
done
