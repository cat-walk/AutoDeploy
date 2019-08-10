# This is a repository that will auto deploy you project
- Base on Github's Hook
- After you `git push` your code to the remote respository in Github, the script will auto run the code below
```
'git pull',
'rm -rf node_modules',
'sudo yarn install',
'sudo yarn build'
```
- Of course, you can modify the code according to your need