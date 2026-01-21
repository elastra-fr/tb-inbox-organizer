# Contributing

Thank you for your interest in contributing to this project!

This project follows a simple and clear workflow to make collaboration easy.

## Branching model

- main  
  Production-ready code only.  
  No direct commits.  
  Updated only when a release is made.

- develop  
  Integration branch.  
  No direct commits.  
  All changes are merged via Pull Requests.

- feature/*  
  One feature per branch.  
  Created from develop.  
  Merged back into develop.

## Workflow

1. Fork the repository if needed  
2. Create a branch from develop  
   git checkout develop  
   git checkout -b feature/my-feature

3. Make your changes  
4. Commit using Conventional Commits  (more details in readme)
5. Push your branch  
6. Open a Pull Request targeting develop 

## Pull Requests

- One feature or fix per Pull Request  
- Keep Pull Requests small and focused  
- Make sure the extension loads correctly in Thunderbird

## Code style

- Keep the code simple and readable  
- Prefer small, focused modules  
- Avoid unnecessary complexity
