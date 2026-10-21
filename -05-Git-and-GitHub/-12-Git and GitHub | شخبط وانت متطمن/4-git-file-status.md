> what happens inside the index file ?

when you start tracking a file
you want to add it to the staging area
we first create  a SHA for that file
then write that SHA in the index file

then create creates an object for that blob in the .git (tracking the actual blob)

we use the following command to change a file from untracked to tracked and add it to the staging area
```bash
git add
```


but still we don't have versions of our app yet
to create the first version we use git commit

> what is the file stages ?
- Untracked (U)
- Tracked
  - Modified (M)
  - Unmodified
