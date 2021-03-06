<?php

date_default_timezone_set('UTC');

$CONFIG_INI_FILE = dirname(__FILE__) . '/config.ini';
if (!file_exists($CONFIG_INI_FILE)) {
  trigger_error('Application not configured. Run pre-install script.');
  exit(-1);
}

$CONFIG = parse_ini_file($CONFIG_INI_FILE);
$CONFIG = array_merge($CONFIG, $_SERVER);

$MOUNT_PATH = $CONFIG['MOUNT_PATH'];
$OBS_META_URL = $CONFIG['OBS_META_URL'];
$OBS_DATA_URL = $CONFIG['OBS_DATA_URL'];
