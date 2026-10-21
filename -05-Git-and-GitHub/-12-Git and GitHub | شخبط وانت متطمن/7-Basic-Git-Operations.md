> how git tracks the history ?

each commit have a parent commit (except the first one "root commit")


this commits linked list called a branch

> how git identify where is your current working tree at ?

the git have a pointer called HEAD



```bash
# 1. see current status
git status
# -s for summarized

# 2. editing files and save

# 3. staging files
git add <file_name> <or (. or *) for all>

# 3. commit the changes
git commit -m ""

# or git commit -am "" to add and commit at the same time

# 4. see the diffs between the 3 areas

# between the working dr and staging (the index)
git diff
# between the index and the repo
git diff --staged
# or --cached

# 5. see the commits history
git log
# summarized version
git log --online

# using filters with logs
git log file_name

# get specific number of logs
git log -2

# 6. read a commit changes
git show SHA-value --color-words 

#7. compare 2 commits
git diff SHA-of-the-old-version..SHA-of-the-ending-commit 
```

