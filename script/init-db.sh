#!/bin/bash
psql -h localhost -p 5432 -U postgres -c "DROP DATABASE IF EXISTS marketplace-immo;"
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE marketplace-immo;"
