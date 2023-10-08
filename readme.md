# Dmg Alert

An alert block as well as a cli command to query posts which contain the alert block.

## Installation

This section describes how to install the plugin and get it working.

1. Download the latest release from the [releases page](https://github.com/LyleBennett/dmg-alert/releases).
2. Upload the plugin files to the `/wp-content/plugins/dmg-alert` directory, or install the plugin through the WordPress plugins screen directly.
3. Activate the plugin through the 'Plugins' screen in WordPress

## Usage

Add the alert block to a post or page. The alert block has the following attributes:

- `type` - The type of alert. Can be `notice`, `warning` or `error`. Defaults to `notice`.

## CLI

The plugin provides a cli command to query posts (not pages) which contain the alert block. The command is `wp dmg-alert search`. The command has options for the date range. The date range options are `--date-before` and `--date-after`. The date range options accept a date string in the format `YYYY-MM-DD`. The date range options are optional. If no date range options are provided, the command will return all posts from the last 30 days including today.

# Changelog

= 0.1.0 =

- Initial Release
