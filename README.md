# ⚡ GitHub Actions Demo – Simple Math Operations

This repository demonstrates how to set up **GitHub Actions** for a JavaScript project.  
The project contains basic math operations (addition, subtraction, multiplication, division) 
The GitHub Actions workflow (`testCI.yml`) ensures that tests run automatically on every push or pull request.

---

## 🚀 Features
- Basic math operations implemented in **JavaScript**
- Unit tests using **Jest** 
- GitHub Actions workflow for:
  - Installing dependencies
  - Running tests
  - Checking build success

---

```
## 📂 Project Structure
├── .github/
│ └── workflows/
│ └── testCI.yml # GitHub Actions workflow
├── index.js # Math operations (add, subtract, etc.)
├── index.test.js # Unit tests for math functions
├── package.json
├── package-lock.json
└── README.md

```



---

## 🛠️ Setup & Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/githubactions-demo.git
   cd githubactions-demo

install dependencies:
```
$ npm install
```
Run locally 

```
$ npm test
```


