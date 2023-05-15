#!/bin/bash

# MySQL connection details
MYSQL_HOST="127.0.0.1"
MYSQL_USER="laphi"
MYSQL_PASSWORD="laphicet@2023"
MYSQL_DATABASE="heybadminton"

# Drop database if it exists
DROP_DATABASE_QUERY="DROP DATABASE IF EXISTS $MYSQL_DATABASE;"

# Create database query
CREATE_DATABASE_QUERY="CREATE DATABASE $MYSQL_DATABASE;"

# Create table query
CREATE_TABLE_QUERY="CREATE TABLE tournament (
    id INT(11) NOT NULL AUTO_INCREMENT,
    carouseImageUrl VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);"

# Insert queries
INSERT_QUERIES=(
    "INSERT INTO tournament (carouseImageUrl) VALUES ('https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg');"
    "INSERT INTO tournament (carouseImageUrl) VALUES ('https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg');"
    "INSERT INTO tournament (carouseImageUrl) VALUES ('https://www.badmintoneurope.tv/image/800/450/bb063c4b-886e-4e98-8ded-eaa104b803d6.png');"
)

# Connect to MySQL and execute queries
mysql -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "$DROP_DATABASE_QUERY"

mysql -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "$CREATE_DATABASE_QUERY"

mysql -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" -D "$MYSQL_DATABASE" -e "$CREATE_TABLE_QUERY"

mysql -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" -D "$MYSQL_DATABASE" -e "${INSERT_QUERIES[@]}"
