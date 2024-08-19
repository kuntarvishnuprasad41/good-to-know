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

## 8. echo

Prints the text to the standard output.

```
echo  "text"
```

other options

- -n: do not print a newline
- -e: enable interpretation of backslash escapes
- -E: disable interpretation of backslash escapes
- -n: do not print a newline

## 9. head

Displays the first few lines of a file.

```
head  file-name
```

## 10. tail

Displays the last few lines of a file.

```
tail  file-name
```

## 11. pipe |

Redirects the output of one command to the input of another command.

```
command1 | command2
```

Example:

```
ls -l | grep keyword
```

## 12. wc

Gives the word count

```
wc file-name
```

## 13. sort

Sorts the lines of a file.

```
sort file-name
```

## 14. grep

Searches for a pattern in a file.

```
grep keyword file-name
```

options

- -v: Invert the sense of matching, to select non-matching lines.
- -c: Suppress normal output; instead print a count of matching lines.
- -h: Suppress the file name for multiple files.
- -q: Be quiet, do not output anything.
- -r: Recursively search subdirectories.
- -i: Ignore case distinctions.
- -n: Prefix each line by its line number.
- -w: Use whitespace as the delimiter.
- -o: Print the matched text instead of the whole line.

## 15. history

Displays a list of commands that have been executed recently.

```
history
```

## 16. sed

Stream Editor
sed is a powerful text processing tool that can be used to perform a wide range of text manipulation tasks
sed is a stream editor, which means it reads input from a file or standard input, performs operations

```
sed 's/old/new/g' file-name
```

options

- -e: Specify a script to be executed.
- -f: Specify a file containing a script to be executed.
- -n: Suppress automatic printing of pattern space.
- -r: Enable extended regular expressions.
- -s: Specify a file to be used as the source of input instead of standard input.

## 17. awk

awk is a programming language that is used for text processing and manipulation.
awk is a powerful tool that can be used to perform a wide range of text manipulation tasks
awk is a pattern scanning and processing language

```
awk 'pattern {action}' file-name
```

options

- -f: Specify a file containing an awk program to be executed.
- -v: Assign a value to a variable.
- -F: Specify the field separator.

- -v: Specify the record separator.
