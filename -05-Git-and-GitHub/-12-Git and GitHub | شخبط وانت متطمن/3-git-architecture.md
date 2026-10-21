# Git Architecture

any architecture starts with a requirement list

> Git Requirements (simple version)
1. It should Track everything
2. OS Independent
3. everything should have a unique Id
4. Track History
5. It Shouldn't Change the Content of the files

### folders structure

working directory: your project folder with all the things you want to track
Git Repository: The folder the git uses to store all version control system (folder called .git)


and we put the git repo inside the working directory

let's start with the first requirement list (track everything)

> how can git track which file is which file (how to identify files) what ID? 

we cannot use the file name as the ID
because this should be something we track the changes

we don't just track the file content but its metadata like size and name and type 

so Git track Objects not files

> What is Git Objects ?

things that Git track
1. blob : file + its metadata (type , size , name )
2. tree : folder + its metadata
3. commits
4. tagged annotations

> how can we make git OS Independent ?

by making git as simple folder which contain files
so no databases or things like this

we may have compression (for speed purposes)

> what is hashing


function that takes input and always return the same output for the same input


example : SHA-1

this is the way that git will create unique ids by hashing

example

```bash
-/Git$ echo "Hello, Git" | git hash-object --stdin
b7aec520dec0a7516c18eb4c68b64aeleb9b5a5e

-/Git$ echo "Hello, Git" | shasum
c9d5d04925b93d2fb99c73ab2b5869bde7405ca4

-/Git$ echo -e "blob 11\0Hello, Git"
blob 11Hello, Git

-/Gits echo -e "blob 11\0Hello, Git" | shasum
b7aec520dec0a7516c18eb4c68b64aeleb9b5a5e

```

so git hashing the full blob not just the file content

so if the sha changed then git knows that there is changes
if the sha is the same then no thing changes

> What is 3 tree Architectures

instead of the 2 tree Architecture which uses 2 folders (working dir and repo dir)

git uses 3 tree Architecture which includes staging area

staging area called index Area (physically its just a file)

the staging areas helps your batch changes to organized commits instead of always committing everything and all the changes

it helps you in the development workflow

