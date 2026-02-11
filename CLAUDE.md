# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site ("Hoya's Library") for technical knowledge organized by category.

## Commands

```bash
npm run docs:dev      # Start dev server
npm run docs:build    # Build for production
npm run docs:preview  # Preview production build
```

## Architecture

### Document Organization

Documents are organized in `library/{category}/` directories:
- `ios/` - iOS development (Swift, Objective-C, UIKit)
- `flutter/` - Flutter/Dart cross-platform
- `server/` - Backend & DevOps (Docker, Nginx, Node.js)
- `networking/` - Network services and protocols
- `jailbreak/` - Jailbreak and reverse engineering
- `company/`, `photoshop/`, `explore/` - Other categories

**File naming conventions:**
- Prefer hyphen-separated names: `flutter-commands.md`, `ssh-public-key-login.md`
- For related docs, use subdirectories: `mitmproxy/installation.md`, `mitmproxy/server-setup.md`
- Single-word names are acceptable: `cocoapods.md`, `nginx.md`

### Dynamic Sidebar Generation

`.vitepress/config.mts` contains `getSidebarItems()` that:
1. Recursively scans `library/{category}/` directories
2. Extracts `title` from frontmatter in each markdown file
3. Generates nested sidebar structure automatically
4. Ignores files starting with `.` and `index.md` at the directory level

**Frontmatter format:**
```yaml
---
title: Document Title
---
```

Only the `title` field is required. Category is determined by directory path, not frontmatter.

### Navigation

Top nav links are manually configured in `.vitepress/config.mts` under `themeConfig.nav`. When adding new categories, update:
1. Create `library/{new-category}/` directory
2. Add markdown files with frontmatter
3. Add nav entry to config (sidebar generates automatically)

### Base Path

Site is deployed with base path `/hoyalibrary/` - all links use this prefix in production.

## Adding New Documents

1. Create markdown file in appropriate `library/{category}/` directory
2. Add frontmatter with `title` field
3. Sidebar entry generates automatically on next build
4. For multi-document topics, create subdirectory and organize files there

## Git Workflow

When moving or reorganizing documents:
- Use `git mv` or stage deletions + additions together
- Update nav links in `.vitepress/config.mts` if necessary
- Frontmatter `title` determines display name, not filename
