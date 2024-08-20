# Adding SSH Keys to login to git

# https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## Step 1.

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

##### Note:

If you are using a legacy system that doesn't support the Ed25519 algorithm, use:

```
 ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### It will create testauthkey and testauthkey.pub

### 1. Goto github

### 2. goto settings

### 3. goto SSH and GPG keys

### 4. click on new SSH key

### 5. paste the contents of testauthkey.pub

### 6. give a title to the key

### 7. click on add SSH key

### 8. goto your terminal

### 9. run the command ssh -T git@github.com

### 10. you should see a message saying "Hi username! You've successfully authenticated, but GitHub does not provide shell access."

### 11. you are now ready to use git with ssh
