## first step
*************
1-  setup the git in git web site
2-  config the git
  -  
  - 

- git --version  # version for git

- git init          # create git  project [create]
- git status        # info to git project (track / stage)
- git status -s     # info to git project (track / stage) pref

- git add fileN     # add fileN to -git project- from [untracked] to [stage]
- git add .         # add all file to -git project- from [untracked] to [stage]  

- git commit -m ""  # save all file to git project [save-tracked]

- git log           # to privew the all commit [history-project]

- git checkout idCommit # to return this point project in commit
- git checkout master   # to return the last version project in commit

- git rm --cached fileN # to return this file from [save-tracked] to [untracked]

# ignore file for git
  1- create file named [.gitignore]
  2- insert list file name to .gitignore file
  3- youe mast the list file name not add in git project

##### ------------------------------------------------------------------------------
#####       GitHub
- git remote add origin https://github.com/AhmedZakrai/monter-qrCode.git

- git remote -v   # to select the repository in github

- git branch -M main  # to rename the master repository to main

- git push -u origin main   # to update file to github 

