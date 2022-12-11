## Ratio | Web3 Application Using Hedera 😎
## Inspiration
Motive/Idea: We have seen a lot of frauds and people cheating the government and stealing others' identities. We want to make sure that all people equally benefit from government schemes and that no one can cheat others by using someone's id as proof. So we came up with an idea to prevent this which is Ratio. 
## What it does
Our website creates a public and private key for new users and allows them to purchase some orders and validate the user through hedera whether they have already used the public key to purchase the same order. Our website also displays the transaction history of the user when logged in.
## How we built it
We build the front end using react js and TailwindCSS and use firebase as the back end to store the user's credentials. Then we generated the public key and private key for a user using hedera. Also, we use firebase cloud messaging service to send the private and public keys to the respective phone number. We used hedera to build our smart contract as it was the best among all.
  - Tech Stack:
     - React JS
     - Redux
     - Firebase
     - tailwindcss
     
![image](https://media.discordapp.net/attachments/1012227636312944650/1051396426963365918/image.png?width=824&height=618)
# How to run
 - Copy .env.local.example to .env.local and fill it with environment variables
- Install the node_modules with yarn install
- Start both the servers on the different servers. For frontend run yarn start and for backend run yarn dev
 - Make sure to add .env file in both the frontend and backend project. (Check the Readme for the .env.example)
- Update the local .env file accordingly. Open an issue thread if any error occurs.

## Features
The user can perform the following actions on Ratio.
## Sign Up
The user can sign up and log in and also can generate a public and private key for the user for the first time when the user enters the application. The account will be created on Auth0.
## Order
The user can signup and using a private key can order items from the government with their HBar currency. Also can transfer from any public key to any public key.
# Challenges we ran into
Setting up the hedera environment in the editor was the first challenge that we faced. Saving the user's credentials in firebase and retrieving them when needed was also difficult. Finally using retrieving information to perform the required transaction using hedera was quite challenging.

# Accomplishments that we're proud of
We are proud that we build the UI of the website from scratch with care. It is simple as well as aesthetic. Using hedera for generating keys for the users was new to us and built our smart contract using it. So we are surely proud of that as well. ✨
# What we learned
We learned about hedera and how to build a smart contract to verify and transfer HBar using it. We also learned about firebase which can be used for storing information as well as some important documents input from the user.
# What's next for Ratio
We are planning to increase the items that are open for the transaction and add more functionalities and add some cool aminations to attract users. Also, improve our hedera contract to serve worldwide.

# Get In Touch
Email : kavikumarceo@gmail.com

LinkedIn : https://www.linkedin.com/in/thekavikumar/

Made with 💖  by Kavikumar, Gopikishaan, Anirudh for **Hack-On-Chain**
