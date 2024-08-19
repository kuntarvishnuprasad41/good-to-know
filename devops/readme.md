# BASIC BASH COMMANDS

## 1. pwd

Prints the current working directory.

```html
pwd
```

## 2. cd

Changes the current working directory.

```
cd
```

## 3. ls

Lists the files and directories in the current working directory.

```
ls
```

## 4. mkdir

Creates a new directory.

```
mkdir dir-name
```

options

- -p: creates parent directories if they do not exist
- -m: sets the permissions of the new directory

### 5. rmdir

Removes an empty directory.

```
rmdir dir-name
```

### 6. touch

Creates a new empty file.

```
touch file-name
```

### 7. chmod

Changes the permissions of a file or directory.

```
chmod  permissions file-name
```

permissions

- r: read
- w: write
- x: execute
- u: user
- g: group
- o: others
- +: add permission
- -: remove permission
- =: set permission
- u+x: add execute permission for user
- g-w: remove write permission for group
- o=r: add read permission for others
- u=rwx,g=r,o=r: set read, write, and execute permissions for user,
  read permission for group, and read permission for others
- u=rw,g=r,o=r: set read and write permissions for user, read permission ...........

- 1 : read
- 2 : write
- 4 : execute
- 6 : read and write
- 5 : read and execute
- 7 : read, write, and execute
- 0 : no permissions
