<?php

	class ConnectionDAO {

		protected $username = "root";
		protected $password = "";
		protected $db_name = "test";
		protected $host = "localhost";
		protected $charset = "utf8";
		protected $opt = [
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
			// PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
		];
		protected $dbh = null; // pdo container

		public function openConnection() {
			try {
				$this->dbh = new PDO(
					"mysql:host=". $this->host . ";dbname=". $this->db_name,
					$this->username,
					$this->password,
					$this->opt
					);
			}catch(Exception $e) {
				$e->getMessage();
			}
		}

		public function closeConnection() {
			try {
				$this->dbh = null;
			}catch(Exception $e) {
				$e->getMessage();
			}
		}

	}