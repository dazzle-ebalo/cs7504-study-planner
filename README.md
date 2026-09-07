**DevOps Study Planner (C# Web App)**

A simple ASP.NET Core web application for tracking study tasks,
built for the CS7504 Security for DevOps Source Code Management
(SCM) assessment. A small C# host (Program.cs) serves the web
page in wwwroot/; the planner itself is index.html + style.css +
app.js, with tasks stored in the browser's localStorage.

**Requirements:**
.NET 8 SDK (check with `dotnet --list-sdks` - an 8.x entry)
Download: https://dotnet.microsoft.com/download

**IDE:** Visual Studio Code [version 1.135.0]

**How to run:**
1. Open a terminal in this project's folder and run:
    dotnet run

2. Then open the address printed in the terminal (for example
http://localhost:5xxx) in your browser. Press Ctrl+C in the
terminal to stop the server.

**Team members:**
Student A: Dazzle Ebalo
Student B: Amatul Safi

Features:
- Tasks can be added with a title and due date, with a task counter.
-Task can be deleted and mark 'done'
-