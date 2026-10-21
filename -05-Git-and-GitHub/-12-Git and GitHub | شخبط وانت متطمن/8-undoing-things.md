```bash
# how to untrack a file that you tracked by using git add
git rm --staged <file>

# how to discard changes (diffs between working tree and staged tree)
git restore <file>

# how to discard changes (diffs between staging area and repo)
# first make the file unstaged
git rm --staged <file> 
# or
git restore --staged <filed>
# second restore
git restore <file>


# how to update the message of the last commit
git commit --amend

# how to add the current staged changes to the last commit (you will create new commit and delete the old one)
git commit --amend -m ""

# how to move throw the commits history (moving the HEAD) (without deleting anything)
#  make the changes reflects to the staging area (so you can use git diff)
git reset HEAD

# make it reflect to Working dir directly
git reset HEAD --hard

# to go back in time for n commits
git reset HEAD~1  

# to see the HEAD moving history
git reflog

# to move the HEAD forward (fast forward)
# you will know the number used from the git reflog
git reset HEAD@{1}

# you can use the word HEAD as a sha representing what the head is on currently

```