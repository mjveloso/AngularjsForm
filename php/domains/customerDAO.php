<?php
	
	require_once('../database/connectionDAO.php');

	class CustomerDAO extends ConnectionDAO {

		public function fetchAllCustomers() {
			try {
				$this->openConnection();
				$stmt = $this->dbh->query('SELECT `customerID`, `firstname` FROM `customers` ');
				$stmt->execute();
				$ctr = 0;

				while($result = $stmt->fetchAll(PDO::FETCH_KEY_PAIR)) {

					foreach ($result as $key ) {
						return $result;
					}

				}

			}catch(Exception $e) {
				$e->getMessage();
			}
		}

	}