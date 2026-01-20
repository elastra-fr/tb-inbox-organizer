# tb-inbox-organizer

Multi-account inbox cleaner and organizer for Thunderbird.

## Status
Early development

## Compatibility
- Thunderbird 115+

## Development
See `docs/development.md`

## Commit Message Convention
We follow **Conventional Commits**. Format:

<type>(<scope>): <short message>


### Types
| Type        | Usage |
|------------|----------------|
| `feat`     | New feature |
| `fix`      | Bug fix |
| `docs`     | Documentation changes |
| `refactor` | Code refactoring |
| `chore`    | Maintenance, config, setup |
| `test`     | Adding/fixing tests |
| `ci`       | CI/CD changes |

### Scope Examples
- `core` — main logic  
- `cleaner` — cleanup / archiving  
- `organizer` — rules, tags, folders  
- `ui` — popup/interface  
- `manifest` — manifest.json  
- `docs` — documentation updates

### Best Practices
- Use **imperative mood**: `fix bug` not `fixed bug`  
- Keep ≤ 72 characters  
- Avoid punctuation at the end  
- English recommended

### Example Commits
feat(core): list inbox folders for all accounts
fix(cleaner): prevent deletion on empty folder
docs: add development instructions
chore: initial project setup

