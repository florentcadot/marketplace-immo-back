#!/bin/bash
apt update
apt install postgresql postgresql-contrib
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE marketplace-immo;"
