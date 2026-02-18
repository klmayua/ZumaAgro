# Branching Strategy

## Main Branches

### `main`
- Contains production-ready code
- Only updated through pull requests from `develop`
- Tagged with version numbers for releases

### `develop`
- Contains completed features ready for the next release
- Features are merged here from feature branches
- This is the branch we use for development

## Feature Branches

Feature branches are created from `develop` and merged back into `develop` when complete.

Naming convention: `feature/feature-name`

Examples:
- `feature/media-center`
- `feature/integrated-model`
- `feature/careers-page`

## Release Process

1. Create release branch from `develop`: `release/v1.0.0`
2. Perform final testing and bug fixes
3. Merge release branch into `main`
4. Tag `main` with version number
5. Merge release branch back into `develop`

## Hotfix Branches

For urgent production fixes:
- Create from `main`: `hotfix/critical-bug-fix`
- Merge into both `main` and `develop`
- Tag new version on `main`