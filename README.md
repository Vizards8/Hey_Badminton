# Hey Badminton!
This is the final project for CSCI 6234 Object Oriented Design - Sping 2023 Group 9. 

## Overview
* Application: Website
* Program language: Java (back-end) + JavaScript (front-end)
* Framework: Spring boot2 (back-end) + React (front-end)

## Demo
* Explore our website demo at: [https://hey-badminton-vizards8.vercel.app/](https://hey-badminton-vizards8.vercel.app/)
* We provide two pre-existing accounts for your convenience:
  * admin_user: root@root
  * normal_user: user1@user1, user2@user2
* Alternatively, you can register your own account.

## Slides
[Google Drive](https://docs.google.com/presentation/d/1lF3PdN1U0-0lVJ-0RPXKd3fob1CUjmEDquPwAA-aUbM/edit?usp=sharing)

## Movie Presentation
[Google Drive](https://drive.google.com/file/d/1Vd2fskJJ3TEJAoqRwFjyIkS6xZvxlNbe/view?usp=share_link)

## How to run

### Init MySQL:
```bash
mysql -u root < init.sql
```

### Java Back-end:
```bash
cd .\heybadminton\back\
java -jar .\back-1.0-SNAPSHOT.jar
```
* Now the back-end server should be online

### JavaScript Front-end
* open a new terminal
```bash
cd .\heybadminton\front\
npm install
npm start
```
* Now the front-end should be online

### Visit the website
* You can now visit the website in the browser
* Local: http://localhost:3000


## Tasks
- [x] Equipment Page
- [x] Post Detail Page
- [x] Tournaments Page
- [x] Courtmate Page
- [x] Home page
- [x] remove 10/page(ps: adjust datasize and limite the number of page below to 5)
- [x] add POST button on Equipment
- [x] add POST button on Courtmate
- [x] add example pictures on Post
- [x] add Home/Equipment post button callback function
- [x] add Home/Courtmate join button callback function
- [x] Admin page
- [x] show picture on Home/post
- [x] generate some MEANINGFUL data
- [x] add equipment link on home page
- [x] add Home/Courtmate create button callback function
