<?php
// Example: restrict access or log usage
session_start();
if (!isset($_SESSION['user'])) {
  die("Access denied.");
}
?>