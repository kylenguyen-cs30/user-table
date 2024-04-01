#!/bin/zsh


echo "Creating a new user..."
http POST localhost:3001/users fName="John" lName="Doe" email="john.doe@example.com" phoneNum="1234567890"

echo "Creating a new user..."
http POST localhost:3001/users fName="Jack" lName="Sparrow" email="jack.sparrow@example.com" phoneNum="1234567890"

echo "Creating a new user..."
http POST localhost:3001/users fName="Captain" lName="Hook" email="captain.hookcaptai@example.com" phoneNum="1234567890"



echo "Retrieving all users..."
http GET localhost:3001/users

# Replace :id with the actual ID of the user you want to interact with in the following commands
id=2

echo "Retrieving a single user by ID..."
http GET localhost:3001/users/$id

echo "Updating a user..."
http PUT localhost:3001/users/$id fName="Jane" lName="Doe" email="jane.doe@example.com" phoneNum="0987654321"

echo "Deleting a user..."
http DELETE localhost:3001/users/$id
