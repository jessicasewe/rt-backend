# 🚀 RT Backend Drupal Project

Welcome to the **RT Backend**! This is a Drupal-based backend project, containerized with [DDEV](https://ddev.readthedocs.io/) for easy local development. Whether you're a developer, site builder, or just curious, this README will help you get started and understand the project structure. 🧑‍💻

---

## Routes to Access
api.therethread.com/user/login

## 📁 Project Structure

```
.editorconfig
.gitattributes
composer.json
composer.lock
.ddev/
  ├── .ddev-docker-compose-base.yaml
  ├── .ddev-docker-compose-full.yaml
  ├── config.yaml
  └── ... (DDEV configs & scripts)
recipes/
  └── README.txt
vendor/
  ├── autoload.php
  └── ... (Composer dependencies)
web/
  └── ... (Drupal web root, modules, themes, etc.)
```

### 🗂️ Key Directories & Files

- **.editorconfig, .gitattributes**: Editor & Git settings for consistency ✍️
- **composer.json, composer.lock**: PHP dependencies managed by Composer 📦
- **.ddev/**: DDEV configs for local Docker-based development 🐳
- **recipes/**: Extra docs or scripts 📜
- **vendor/**: Composer-managed PHP dependencies (auto-generated) ⚙️
- **web/**: Drupal web root (core, modules, themes, files) 🌐

---

## 🛠️ Local Development

### Prerequisites

- [Docker](https://www.docker.com/) 🐳
- [DDEV](https://ddev.readthedocs.io/en/stable/) ⚡
- [Composer](https://getcomposer.org/) 🎼

### 🚦 Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd rt-backend
   ```

2. **Start DDEV:**
   ```sh
   ddev start
   ```

3. **Install Composer dependencies:**
   ```sh
   ddev composer install
   ```

4. **Access the site:**
   - Open [https://rt-backend.ddev.site](https://rt-backend.ddev.site) in your browser 🌍

---

## 🧰 Useful Commands

- **Start/Stop DDEV:**
  ```sh
  ddev start
  ddev stop
  ```
- **SSH into web container:**
  ```sh
  ddev ssh
  ```
- **Run Drupal CLI (Drush):**
  ```sh
  ddev drush <command>
  ```
- **Run Composer:**
  ```sh
  ddev composer <command>
  ```

---

## 💡 Additional Notes

- `.ddev/` contains all local dev environment configs.
- `web/` holds Drupal core, modules, themes, and site files.
- `recipes/` may have extra scripts or documentation.

For more info, check
