# IWD website 

Welcome to the IWD Website 2024 GitHub repository! This document provides guidelines on how to contribute to the project using Visual Studio Code (VS Code). Follow these steps to clone the repository, create feature or bug-fix branches, commit your changes, and create a pull request.

## Cloning the Repository in VS Code

1. Open VS Code.
2. Go to View -> Command Palette (or press `Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Type `Git: Clone` and select it.
4. Enter the repository URL: `https://github.com/maryamtello1/IWD-website-2024.git`
5. Choose a local directory where you want to clone the repository and click `Select Repository Location`.
6. Once cloned, a prompt will ask if you want to open the cloned repository. Click `Open`.

## Creating Branches

Always ensure your branches are created off the `dev` branch. Don't commit directly to main because this can mess the website up. Before creating a new branch, make sure to pull the latest changes:

1. Switch to the `dev` branch by clicking on the branch name in the bottom left corner and selecting `dev` from the list.
2. Pull the latest changes from `dev` either by clicking on the source control tab, and then selecting `pull` from the dropdown menu or by typing git pull in the terminal. 

### Feature Branches

For new features, create a branch named `feature/<feature-name>`. For example, if you are adding a navbar, create a branch called `feature/navbar`. 

### Bug Fixes

For bug fixes, create a branch named `bug-fix/<bug-name>`.

### Refactoring

For refactoring tasks, create a branch named `refactor/<task-name>`. Refractoring is when I ask you to modify/clean up the code without changing its function. that might involve moving it to a different file, making it more modular, etc. 

### Creating Your Branch

1. In VS Code, open the Source Control sidebar (or press `Ctrl+Shift+G`).
2. Click on the branch icon in the bottom left corner, then choose `Create new branch...`.
3. Enter your branch name (e.g., `feature/navbar`) and select `dev` as the base branch when prompted.

## Committing Changes in VS Code

1. Make your changes in the codebase.
2. Open the Source Control sidebar.
3. Stage your changes by clicking the `+` button next to each changed file or right-click and select `Stage Changes`.
4. Enter a commit message in the message box at the top. Make it descriptive, indicating what changes you've made.
5. Commit the changes by clicking the checkmark icon at the top of the Source Control sidebar or pressing `Ctrl+Enter`.

## Creating a Pull Request

1. Push your branch to GitHub by clicking on the `...` icon in the Source Control sidebar, selecting `Push`, and then pushing your current branch.
2. Go to the GitHub repository page in your web browser.
3. You should see your recently pushed branch. Click `Compare & pull request`.
4. Ensure the base branch is set to `dev`.
5. Fill in the pull request details, explaining your changes.
6. Assign the pull request to either Maryam or Abdul for review by adding them as reviewers.
7. Click `Create pull request`.


