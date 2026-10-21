after you add a file to the stage area

we know that it creates an object for it 

to know the know the git status we use the command

```bash
git status
```


to see all the files that is in the index

```bash
git ls-files
git ls-files -s
```

how to manually find the git objects

```bash
find .git/objects/ -type f
```

objects is stored in the folder so the first 2 char of the folder is the first 2 char of the sha

> how to read the objects

to read the type

```bash
git cat-file -t b7aec520dec0a7516c18eb4c68b64aeleb9b5a5e
blob
```

to read the size

```bash
git cat-file -s b7aec520dec0a7516c18eb4c68b64aeleb9b5a5e
11
```

to read the content

```bash
git cat-file -p b7aec520dec0a7516c18eb4c68b64aeleb9b5a5e
Hello, Git
```

> how to make versioning in git ?

use the following commit

```bash
git commit -m "initial commit"
```

after we committed the single file we had we found 3 objects
1 for the folder (tree)
1 for the file (blob)
1 for the commit (it make us know which objects is together in the same batch or the same commit so it works as a wrapper telling us which objects related to this commit and other metadata about the commit)

> how to see the commits history ?

```bash
git log
```


reading the commit object

```bash
git cat-file -t cd53
commit

git cat-file -p cd35
tree 15853f9f8c707ec3f3aee8702de10b8583516ab3
author Ahmed Samy <ahmed.samy@gmail.com> 1639806315 -0600
committer Ahmed Samy <ahmed.samy@gmail. com> 1639806315 -0600
Initial commit

# then you read the tree to find the blobs inside it 
# then read the files to know the content
```