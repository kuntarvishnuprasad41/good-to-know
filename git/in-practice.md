# Git in Practice step by step

## Steps

### 1. init

Initialize the local git repo

```
git init
```

### 2. add

Add the file to the staging area

```
git add <file_name>
```

#### 2.1 in case you don't know whether the file is added or not

```
git status

```

#### 2.2 in case you want to add all files

```
git add .
```

#### 2.3 in case you want to unstage the changes

```
git rm  --cached <file_name>
```

### 3. commit

Commit the changes

```
git commit -m "<commit_message>"

```

#### 3.1 in case you want to unstage the changes

```
git reset <file_name>
```

#### 3.3 in case you want to commit all changes

```
git commit -m "<commit_message>" -a
```

#### 3.4 commit changes without add. (Works only for already added files)

```
git commit -ma "<commit_message>"
```

#### 3.4 in case you want to commit all changes with a specific author

```
git commit -m "<commit_message>" -a --author="<author_name>"
```

### 4. Add remote

Add a remote repository

```
git remote add origin <repository_url>
```

#### 4.1 To check existing remote repos

```
git remote -v
```

### 5. push

Push the changes to the remote repository

```
git push -u origin <branch_name>
```

#### set upstream

```
git push -u origin <branch_name>
```

#### 5.1 in case you want to push all branches

```
git push -u origin --all
```

### 6. clone

Clone a repository

```
git clone <repository_url>
```
