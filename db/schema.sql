/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source users_schema.sql"

*/

--Create the database day_planner_db and specified it
CREATE DATABASE game_info;
USE game_info;

--Create the table plans.
CREATE TABLE tournaments
    (
        id int NOT NULL AUTO_INCREMENT,
        city VARCHAR(120) NOT NULL,
        user_admin VARCHAR(120) NOT NULL,
        tournament_name VARCHAR(120) NOT NULL,
        tournament_password VARCHAR(120) NOT NULL,
        date_created DATE,
        tournament_date VARCHAR(120) NOT NULL,
        end_date VARCHAR(120) NOT NULL,
        cutoff VARCHAR(120) NOT NULL,
        tournament_time VARCHAR(120) NOT NULL,
        game_title VARCHAR(120) NOT NULL,
        number_players INTEGER(1),
        console VARCHAR(120) NOT NULL,
        user1 VARCHAR(120) NOT NULL,
        user2 VARCHAR(120) NOT NULL,
        user3 VARCHAR(120) NOT NULL,
        user4 VARCHAR(120) NOT NULL,
        users_in_tournament VARCHAR(120) NOT NULL,
        admin_verify BOOLEAN,
        PRIMARY KEY(id)
    );

CREATE TABLE users
    (
        id int NOT NULL AUTO_INCREMENT,
        first_name varchar(120) NOT NULL,
        last_name varchar(120) NOT NULL,
        email varchar(120) NOT NULL,
        verified BOOLEAN,
        username varchar(120) NOT NULL,
        password varchar(120) NOT NULL,
        FavGame1 varchar(120) NOT NULL,
        FavGame2 varchar(120) NOT NULL,
        FavGame3 varchar(120) NOT NULL,
        zipcode INT(5) NOT NULL,
        ninSwitch BOOLEAN,
        ps4 BOOLEAN,
        xbox1 BOOLEAN,
        nin3ds BOOLEAN,
        ninwu BOOLEAN,
        pc BOOLEAN,
        rpg BOOLEAN,
        sports BOOLEAN,
        simulator BOOLEAN,
        adventure BOOLEAN,
        action BOOLEAN,
        actionAdventure BOOLEAN,
        date_created DATE,
        PRIMARY KEY(id)

    );