# GIT VCS

## Local Repository

- A local repository is a copy of the entire project stored on your local machine.

- It is a working copy of the project.

### Working Directory and Staging area or index

- The working directory is the directory where you are currently working on the project.
- The staging area or index is a temporary storage area where you can stage your changes before committing them
- The staging area is used to prepare your changes for a commit.

## Process

1. **push** - Push your changes to the remote repository.
2. **pull** - Pull the changes from the remote repository.

## Basic Workflow of git

1. **modify a file from working dir**
2. **add the file to staging area**
3. **commit the file to local repo**

## Files - All files are represented by hash

- **blobs** - A blob is a binary large object that represents a file in the repository.
- **trees** - A tree is a data structure that represents a directory in the repository.

## commits

- A commit is a snapshot of the repository at a particular point in time.
- Each commit is identified by a unique hash.
- commit object = tree + parent hashes + commit metadata || a node of the linked list
- every commit object has a pointer to the parent commit object
- If a commit has multiple parent commits, then that particular commit has been created by merging two branches

## Commands

- `git init` - Initialize a new git repository.
- `git add <file>` - Add a file to the staging area.
- `git commit -m "message"` - Commit the changes in the staging area with a message
- `git log` - Display the commit history.
- `git status` - Display the status of the repository.
- `git branch <branch-name>` - Create a new branch.
- `git checkout <branch-name>` - Switch to a branch.
- `git merge <branch-name>` - Merge a branch into the current branch.
- `git remote add <remote-name> <url>` - Add a remote repository.
- `git push <remote-name> <branch-name>` - Push the changes to the remote repository
- `git pull <remote-name> <branch-name>` - Pull the changes from the remote repository
- `git clone <url>` - Clone a repository from a remote repository.
- `git remote rm <remote-name>` - Remove a remote repository.
- `git branch -d <branch-name>` - Delete a branch.
- `git branch -m <new-branch-name>` - Rename a branch.
- `git tag <tag-name>` - Create a tag.
- `git tag -d <tag-name>` - Delete a tag.
- `git tag -a <tag-name> -m "message"` - Create an annotated tag
- `git tag -a <tag-name> -m "message" <commit-hash>` -
