---
title: Jekyll setup on Windows
---
***Work in Progress***

The easier way would be by installing either [WSL] (Windows Subsystem for Linux),
[WSL2], or [MSYS2].
WSL2 requires a Windows 10 Build 18917 or higher.

All these solutions brings a Linux environment on Windows.

I've installed Ubuntu 18.04 on WSL1.

Download and install [Git], [VSCode] and [Ruby] for Windows.
Using WSL, once running VSCode, a popup will suggest to install a 'Remote - WSL',
install it as well.

From Extensions (CTRL+Shift+X), search and install:
- EditorConfig for VSCode (Official by EditorConfig)
- Liquid (by Νίκος)
- vscode-sfz (by Arne Jokela)

Select menu `View -> Terminal`, then from the Terminal window below, click on
the combobox `Select Default Shell` and set `Git Bash` from Git for Windows
package.

You can clone the repository with:
```
git clone git@github.com:sfzformat/sfzformat.github.io.git
```
and open the directory in VSCode, you can also save the current workspace, call
it 'sfzformat'. It will appear on the file list on the left, grayed after a while
because it's a `.gitignore`d file.

At this point if the current terminal path is set to the sfzformat directory,
we can do the last step by running `./setup.sh`, it will install Jekyll
and the needed applications to build the website locally.

[WSL]:    https://docs.microsoft.com/en-us/windows/wsl/install-win10
[WSL2]:   https://docs.microsoft.com/en-us/windows/wsl/wsl2-install
[MSYS2]:  http://www.msys2.org/
[Git]:    https://git-scm.com/download/win
[VSCode]: https://code.visualstudio.com/download
[Ruby]:   https://rubyinstaller.org/
