# Setting up and Running a React Application

This guide tells you how to install react and run your react application, 

## Installation

### Node.js and npm
First you need to make sure you have Node.js installed
#### Windows

1. Download the Windows installer from the [official Node.js website](https://nodejs.org/).
2. Run the installer and follow the prompts to install both Node.js and npm. The installer includes npm by default.
3. To check the installation, open a command prompt and run:
   ```
   node -v
   npm -v
   ```
   This should display the installed versions of Node.js and npm.

#### macOS

1. You can install Node.js and npm using Homebrew, a package manager for macOS. If you don't have Homebrew installed, open the Terminal and run:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
   ```
2. Install Node.js and npm by running:
   ```
   brew install node
   ```
3. Verify the installation by running:
   ```
   node -v
   npm -v
   ```

### Installing React

With Node.js and npm installed, you can now run our react app. open the cloned repository in vscode, 

1. In your terminal or command prompt, type the following 
   ```
   cd iwd-app
   ```
3. then type the following
   ```
   npm start
   ```

You now can see the react app, any code changes you make will be reflected on the website. 
