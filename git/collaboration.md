# Git Collaboraton

## 1. master/main: main branch

```
git checkout -b <branch-name/feature-name>
```

This command creates a new branch and switches to it. The `-b` option tells Git to create

## 2. switch to branch

```
git checkout <branch-name/feature-name>
```

or

```
git switch  <branch-name/feature-name>
```

## 3. Add Changes

### add changes and then commit

## 3. Merge the branches (Not recommended without pull requests)

### 3.1 know the diff

```
git diff <branch-name/feature-name> master/main
```

### 3.2 merge

```
git merge <branch-name/feature-name>
```

## 4. Pull Request

### 4.1 create pull request

#### 4.1.1 Local pull requests

```
git request-pull origin <branch-name/feature-name>

```

#### 4.1.2 Remote pull requests

```
git push origin <branch-name/feature-name>

```

Now create pull requests using GUI and merge it there

### 4.2 merge pull request

## Merge conflicts

Merge conflicts happen when same file is changed in both current version and the version you are trying to merge. Git will mark these conflicts with `<<<<<<<`, `=======`, `>>>>>>>` markers.

### Occurances

- While starting the merge process
- During the merge process

## Git commands to resolve conflicts

### 1. git log --merge

- Shows the merge history that are causing the conflicts

### 2. git diff

- Shows the differences between the current version and the version you are trying to merge

### 3. git checkout

- Switch to the version you are trying to merge

### 4. git reset --mixed

- Reset the current version to the version you are trying to merge

### 5. git merge --abort

- Abort the merge process

### 6. git reset

- Reset the current version to the previous commit
